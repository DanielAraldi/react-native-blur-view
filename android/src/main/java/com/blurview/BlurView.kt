package com.blurview

import android.content.Context
import android.graphics.Color
import android.os.Build
import android.util.AttributeSet
import android.util.Log
import android.view.ViewGroup
import androidx.appcompat.app.AppCompatActivity
import androidx.core.graphics.drawable.toDrawable
import eightbitlab.com.blurview.BlurTarget

class BlurView : eightbitlab.com.blurview.BlurView {
  private var targetId: String? = null
  private var overlayColor: BlurOverlayColor = BlurOverlayColor.fromString("light")
  private var radius: Float = 10f * INTENSITY
  private var isInitialized: Boolean = false
  private var rootView: BlurTarget? = null

  companion object {
    private const val TAG: String = "BlurView"
    private var INTENSITY: Float = if (Build.VERSION.SDK_INT > 31) 0.675f else 0.25f
  }

  constructor(context: Context?) : super(context) {
    this.setupBlurView()
  }

  constructor(context: Context?, attrs: AttributeSet?) : super(context, attrs) {
    this.setupBlurView()
  }

  constructor(context: Context?, attrs: AttributeSet?, defStyleAttr: Int) : super(
    context,
    attrs,
    defStyleAttr
  ) {
    this.setupBlurView()
  }

  override fun onAttachedToWindow() {
    super.onAttachedToWindow()

    if (!this.isInitialized) {
      this.reinitialize()
    }
  }

  override fun onDetachedFromWindow() {
    super.onDetachedFromWindow()

    this.rootView = null
    this.isInitialized = false
    this.removeCallbacks(null)
  }

  private fun setupBlurView() {
    super.setBackgroundColor(this.overlayColor.color)
    super.clipChildren = true
    super.clipToOutline = true
  }

  // Wait all views are mounted in interface
  private fun reinitialize() {
    post {
      this.initialize()
    }
  }

  private fun initialize() {
    // Find rootView only on first mount (when the initialization is false)
    if (!this.isInitialized) {
      this.rootView = this.findRootTargetView()

      if (this.rootView == null) {
        super.setBackgroundColor(this.overlayColor.color)
        super.setOverlayColor(this.overlayColor.color)
        super.setBlurEnabled(false)

        Log.w(TAG, "Target view not found: $targetId")
        return
      }
    }

    val drawable = this.getAppropriateBackground()
    super.setupWith(this.rootView!!, 6f, false)
      .setBlurRadius(this.radius)
      .setOverlayColor(this.overlayColor.color)
      .setBlurAutoUpdate(true)
      .setBlurEnabled(true)
      .setFrameClearDrawable(drawable)

    this.isInitialized = true
  }

  private fun findRootTargetView(): BlurTarget? {
    if (this.targetId == null) {
      Log.w(TAG, "TargetId is null")

      return null
    }

    val activityRoot = this.getRootView()
    activityRoot?.let { root ->
      val target = findViewWithTagInViewGroup(root as? ViewGroup, targetId!!)
      if (target != null) return target
    }

    var parent = this.parent
    while (parent != null) {
      if (parent is ViewGroup) {
        val target = findViewWithTagInViewGroup(parent, targetId!!)
        if (target != null) return target
      }
      parent = parent.parent
    }

    Log.w(TAG, "Target not found anywhere: $targetId")
    return null
  }

  private fun findViewWithTagInViewGroup(viewGroup: ViewGroup?, tag: String): BlurTarget? {
    if (viewGroup == null) return null

    if (viewGroup.tag == tag && viewGroup is BlurTarget) {
      return viewGroup
    }

    for (i in 0 until viewGroup.childCount) {
      val child = viewGroup.getChildAt(i)
      if (child.tag == tag && child is BlurTarget) {
        return child
      }

      if (child is ViewGroup) {
        val found = this.findViewWithTagInViewGroup(child, tag)
        if (found != null) return found
      }
    }

    return null
  }

  /**
   * This method attempts to obtain a background in the following priority order:
   * 1. The current window's decor view background (if available)
   * 2. A fallback overlay color converted to a drawable
   */
  private fun getAppropriateBackground(): android.graphics.drawable.Drawable {
    try {
      val activity = this.getActivityFromContext()
      activity?.window?.decorView?.background?.let {
        return it
      }

      activity?.window?.let { window ->
        val windowBackground = window.decorView.background
        windowBackground?.let {
          return it
        }
      }

      return this.overlayColor.color.toDrawable()
    } catch (e: Exception) {
      Log.e(TAG, "Error getting background: ${e.message}")

      return this.overlayColor.color.toDrawable()
    }
  }

  /**
   * Traverses the context hierarchy to find the associated AppCompatActivity.
   * This method unwraps the context chain by checking each context in the hierarchy.
   * It handles ContextWrapper instances by accessing their base context recursively
   * until it either finds an AppCompatActivity or reaches the end of the chain.
   */
  private fun getActivityFromContext(): AppCompatActivity? {
    var context = this.context

    while (context != null) {
      when (context) {
        is AppCompatActivity -> return context
        is android.content.ContextWrapper -> {
          context = context.baseContext
        }
        else -> break
      }
    }

    return null
  }

  private fun clipRadius(radius: Float): Float {
    val maxRadius = if (Build.VERSION.SDK_INT > 31) 67.5f else 25f

    return if (radius <= 0) 0f
    else if (radius >= maxRadius) maxRadius
    else radius
  }

  fun setOverlayColor(overlayColor: String) {
    val overlay = BlurOverlayColor.fromString(overlayColor)

    this.overlayColor = overlay

    super.setBackgroundColor(overlay.color)

    if (this.isInitialized) {
      super.setOverlayColor(overlay.color)
      this.isInitialized = false
      this.reinitialize()
    }
  }

  fun setRadius(radius: Float) {
    val radiusValue = radius * INTENSITY

    this.radius = this.clipRadius(radiusValue)

    if (this.isInitialized) {
      val clippedRadius = this.clipRadius(radiusValue)
      super.setBlurRadius(clippedRadius)
      this.isInitialized = false
      this.reinitialize()
    }
  }

  fun setTargetId(targetId: String?) {
    val oldTargetId = this.targetId

    this.targetId = targetId

    if (oldTargetId != targetId && this.isAttachedToWindow) {
      this.isInitialized = false
      this.reinitialize()
    }
  }
}
