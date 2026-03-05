package com.blurview

import android.annotation.SuppressLint
import android.content.Context
import android.util.AttributeSet
import eightbitlab.com.blurview.BlurTarget

class UIManagerCompatibleBlurTarget : BlurTarget {
  constructor(context: Context): super(context)
  constructor(context: Context, attrs: AttributeSet): super(context, attrs)
  constructor(context: Context, attrs: AttributeSet, defStyleAttr: Int): super(context, attrs, defStyleAttr)

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
}
