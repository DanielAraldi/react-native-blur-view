package com.blurview

import android.content.Context
import android.os.Build
import android.util.AttributeSet
import android.util.Log
import android.view.ViewGroup
import androidx.appcompat.app.AppCompatActivity
import androidx.core.graphics.drawable.toDrawable
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.UIManagerHelper
import com.facebook.react.uimanager.common.UIManagerType

class BlurView : eightbitlab.com.blurview.BlurView {
  private var targetId: Int? = null
  private var androidColor: Int? = null
  private var overlayColor: BlurOverlayColor = BlurOverlayColor.fromString("light")
  private var radius: Float = 10f * INTENSITY
  private var downscaleFactor: Float = 6f
  private var targetView: TargetView? = null
  private var reactContext: ReactApplicationContext

  companion object {
    private const val TAG: String = "BlurView"
    private const val INTENSITY: Float = 0.675f
  }

  constructor(context: Context?) : super(context) {
    this.reactContext = (context as ThemedReactContext).reactApplicationContext

    this.setupBlurView()
  }

  constructor(context: Context?, attrs: AttributeSet?) : super(context, attrs) {
    this.reactContext = (context as ThemedReactContext).reactApplicationContext

    this.setupBlurView()
  }

  constructor(context: Context?, attrs: AttributeSet?, defStyleAttr: Int) : super(
    context,
    attrs,
    defStyleAttr
  ) {
    this.reactContext = (context as ThemedReactContext).reactApplicationContext

    this.setupBlurView()
  }

  override fun onAttachedToWindow() {
    super.onAttachedToWindow()

    this.reinitialize()
  }

  override fun onDetachedFromWindow() {
    super.onDetachedFromWindow()

    this.removeCallbacks(null)
  }

  override fun generateLayoutParams(p: ViewGroup.LayoutParams?): ViewGroup.LayoutParams {
    return ViewGroup.MarginLayoutParams(p)
  }

  override fun checkLayoutParams(p: ViewGroup.LayoutParams?): Boolean {
    return p is ViewGroup.MarginLayoutParams
  }

  override fun onMeasure(widthMeasureSpec: Int, heightMeasureSpec: Int) {
    // Trust React Native to provide correct dimensions
    setMeasuredDimension(
      MeasureSpec.getSize(widthMeasureSpec),
      MeasureSpec.getSize(heightMeasureSpec)
    )
  }

  /**
   * Override onLayout to properly position children according to React Native's Yoga layout.
   */
  override fun onLayout(changed: Boolean, left: Int, top: Int, right: Int, bottom: Int) {
    // No-op: Layout is handled by React Native's UIManager.
    // We override this to prevent the superclass (BlurViewGroup/FrameLayout) from
    // re-positioning children based on its own logic (e.g. gravity), which would
    // conflict with React Native's layout.
  }

  private fun setupBlurView() {
    val color = this.getColorForBlur()

    super.setBackgroundColor(color)
    super.layoutParams = ViewGroup.LayoutParams(
      ViewGroup.LayoutParams.MATCH_PARENT,
      ViewGroup.LayoutParams.MATCH_PARENT
    )
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
    val color = this.getColorForBlur()

    if (this.targetView == null) {
      super.setBackgroundColor(color)
      super.setOverlayColor(color)
      super.setBlurEnabled(false)

      Log.e(TAG, "Target view not found: $targetId")
      return
    }

    val drawable = this.getAppropriateBackground()
    super.setupWith(this.targetView!!.blurTarget, this.downscaleFactor, false)
      .setBlurRadius(this.radius)
      .setOverlayColor(color)
      .setBlurAutoUpdate(true)
      .setBlurEnabled(true)
      .setFrameClearDrawable(drawable)
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
        else -> {
          Log.e(TAG, "Context is not an AppCompatActivity or ContextWrapper")
          break
        }
      }
    }

    return null
  }

  private fun getColorForBlur(): Int {
    return this.androidColor ?: this.overlayColor.color
  }

  private fun clipRadius(radius: Float): Float {
    /**
     * On Android > 31 the maximum blur radius is 67.5f and minimum is 0f.
     * On Android <= 31 the maximum blur radius is 25f and minimum must be
     * 0.00001f because if 0f radius is provided the Dimezis's BlurView library
     * crashes.
     *
     * See more details in the issue: https://github.com/Dimezis/BlurView/issues/247
     */
    val isAndroidHigherThan12 = Build.VERSION.SDK_INT > Build.VERSION_CODES.S
    val minRadius = if (isAndroidHigherThan12) 0f else 0.00001f
    val maxRadius = if (isAndroidHigherThan12) 67.5f else 25f

    return radius.coerceIn(minRadius, maxRadius)
  }

  fun setOverlayColor(overlayColor: String) {
    val overlay = BlurOverlayColor.fromString(overlayColor)

    this.overlayColor = overlay

    if (this.androidColor != null) return;

    super.setBackgroundColor(overlay.color)
    super.setOverlayColor(overlay.color)

    this.reinitialize()
  }

  fun setAndroidColor(androidColor: Int?) {
    this.androidColor = androidColor

    if (androidColor == null) {
      super.setBackgroundColor(this.overlayColor.color)
      super.setOverlayColor(this.overlayColor.color)
    } else {
      super.setBackgroundColor(androidColor)
      super.setOverlayColor(androidColor)
    }

    this.reinitialize()
  }

  fun setRadius(radius: Float) {
    val radiusValue = radius * INTENSITY

    this.radius = this.clipRadius(radiusValue)

    val clippedRadius = this.clipRadius(radiusValue)
    super.setBlurRadius(clippedRadius)

    this.reinitialize()
  }

  fun setDownscaleFactor(downscaleFactor: Float) {
    if (this.downscaleFactor == downscaleFactor) return

    this.downscaleFactor = downscaleFactor.coerceIn(0f, 100f)

    this.reinitialize()
  }

  fun setTargetId(targetId: Int?) {
    if (this.targetId == targetId) return

    if (targetId == null) {
      this.targetView = null
    } else {
      val fabricUIManager = UIManagerHelper.getUIManager(
        reactContext,
        UIManagerType.FABRIC
      )
      fabricUIManager?.resolveView(targetId)?.let { view ->
        this.targetView = view as? TargetView
      }
    }

    this.targetId = targetId
    this.reinitialize()
  }
}
