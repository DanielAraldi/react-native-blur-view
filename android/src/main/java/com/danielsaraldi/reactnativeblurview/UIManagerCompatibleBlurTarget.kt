package com.danielsaraldi.reactnativeblurview

import android.annotation.SuppressLint
import android.content.Context
import android.graphics.Canvas
import android.os.Build
import android.util.AttributeSet
import android.view.View
import eightbitlab.com.blurview.BlurTarget

class UIManagerCompatibleBlurTarget : BlurTarget {
  private val pendingBlurViews = mutableSetOf<View>()

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

  override fun onWindowVisibilityChanged(visibility: Int) {
    super.onWindowVisibilityChanged(visibility)

    if (visibility == VISIBLE && Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
      // Android may discard the separately recorded RenderNode while stopped.
      // Re-record its contents even when React has no new props to commit.
      invalidate()
    }
  }

  override fun dispatchDraw(canvas: Canvas) {
    super.dispatchDraw(canvas)

    if (canvas.isHardwareAccelerated) {
      // A blur in another window can draw before this target records its snapshot.
      // Refresh it on the next frame, after the target's display list is ready.
      pendingBlurViews.forEach { it.postInvalidateOnAnimation() }
      pendingBlurViews.clear()
    }
  }

  override fun onDetachedFromWindow() {
    pendingBlurViews.clear()
    super.onDetachedFromWindow()
  }

  @SuppressLint("MissingSuperCall")
  override fun requestLayout() {
    // No-op, terminate `requestLayout` here, UIManager handles laying out children and
    // `layout` is called on all RN-managed views by `NativeViewHierarchyManager`
  }

  internal fun refreshBlurView(blurView: View) {
    pendingBlurViews.add(blurView)
    invalidate()
  }
}
