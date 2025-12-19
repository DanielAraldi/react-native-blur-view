package com.blurview

import android.annotation.SuppressLint
import android.content.Context
import android.util.AttributeSet
import android.util.Log
import eightbitlab.com.blurview.BlurTarget

class TargetView : BlurTarget {
  private var id: String? = null
  private var isInitialized: Boolean = false

  companion object {
    private const val TAG: String = "TargetView"
  }

  constructor(context: Context): super(context) {
    this.setupBlurTarget()
  }

  constructor(context: Context, attrs: AttributeSet): super(context, attrs) {
    this.setupBlurTarget()
  }

  constructor(context: Context, attrs: AttributeSet, defStyleAttr: Int): super(context, attrs, defStyleAttr) {
    this.setupBlurTarget()
  }

  override fun onAttachedToWindow() {
    super.onAttachedToWindow()

    if (!this.isInitialized) {
      this.reinitialize()
    }
  }

  override fun onDetachedFromWindow() {
    super.onDetachedFromWindow()

    this.isInitialized = false
    this.removeCallbacks(null)
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

  @SuppressLint("MissingSuperCall")
  override fun requestLayout() {
    // No-op, terminate `requestLayout` here, UIManager handles laying out children and
    // `layout` is called on all RN-managed views by `NativeViewHierarchyManager`
  }

  private fun setupBlurTarget() {
    super.layoutParams = LayoutParams(
      LayoutParams.MATCH_PARENT,
      LayoutParams.MATCH_PARENT
    )
  }

  private fun reinitialize() {
    post {
      this.initialize()
    }
  }

  private fun initialize() {
    if (this.id != null) {
      super.tag = this.id
      this.isInitialized = true
    } else {
      Log.w(TAG, "Target view id is null")

      this.isInitialized = false
    }
  }

  fun setId(id: String?) {
    val oldId = this.id
    this.id = id

    if (oldId != id && this.isAttachedToWindow) {
      this.isInitialized = false
      this.reinitialize()
    }
  }
}
