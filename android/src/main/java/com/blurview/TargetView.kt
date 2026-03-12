package com.blurview

import android.content.Context
import android.util.AttributeSet
import android.view.View
import android.view.ViewGroup
import eightbitlab.com.blurview.BlurTarget

class TargetView: ViewGroup {
  internal var blurTarget: BlurTarget = UIManagerCompatibleBlurTarget(context)

  constructor(context: Context): super(context)
  constructor(context: Context, attrs: AttributeSet): super(context, attrs)
  constructor(context: Context, attrs: AttributeSet, defStyleAttr: Int): super(context, attrs, defStyleAttr)

  init {
    super.addView(
      blurTarget,
      LayoutParams(
        LayoutParams.MATCH_PARENT,
        LayoutParams.MATCH_PARENT
      )
    )
  }

  /**
   * When adding a child to this view, we want to actually add it to the blur target view.
   * Because of this we need to override add, remove and measurement methods.
   */
  override fun addView(child: View) {
    if (child === blurTarget) {
      super.addView(child)
      return
    }

    blurTarget.addView(child)
  }

  override fun addView(child: View?, index: Int) {
    if (child === blurTarget) {
      super.addView(child, index)
      return
    }

    blurTarget.addView(child, index)
  }

  override fun addView(child: View?, params: ViewGroup.LayoutParams?) {
    if (child === blurTarget) {
      super.addView(child, toHostLayoutParams(params))
      return
    }

    blurTarget.addView(child, params)
  }

  override fun addView(child: View?, index: Int, params: ViewGroup.LayoutParams?) {
    if (child === blurTarget) {
      super.addView(child, index, toHostLayoutParams(params))
      return
    }

    blurTarget.addView(child, index, params)
  }

  override fun addView(child: View?, width: Int, height: Int) {
    if (child === blurTarget) {
      super.addView(child, width, height)
      return
    }

    blurTarget.addView(child, width, height)
  }

  override fun updateViewLayout(view: View?, params: ViewGroup.LayoutParams?) {
    if (view === blurTarget) {
      super.updateViewLayout(view, toHostLayoutParams(params))
      return
    }

    blurTarget.updateViewLayout(view, params)
  }

  override fun removeViewAt(index: Int) = blurTarget.removeViewAt(index)

  override fun removeViews(start: Int, count: Int) = blurTarget.removeViews(start, count)

  override fun removeViewsInLayout(start: Int, count: Int) = blurTarget.removeViewsInLayout(start, count)

  override fun removeAllViews() = blurTarget.removeAllViews()

  override fun removeAllViewsInLayout() = blurTarget.removeAllViewsInLayout()

  override fun getChildCount(): Int = blurTarget.childCount

  override fun getChildAt(index: Int): View? = blurTarget.getChildAt(index)

  override fun indexOfChild(child: View?): Int = blurTarget.indexOfChild(child)

  override fun onMeasure(widthMeasureSpec: Int, heightMeasureSpec: Int) {
    val width = MeasureSpec.getSize(widthMeasureSpec)
    val height = MeasureSpec.getSize(heightMeasureSpec)
    setMeasuredDimension(width, height)

    blurTarget.measure(
      MeasureSpec.makeMeasureSpec(width, MeasureSpec.EXACTLY),
      MeasureSpec.makeMeasureSpec(height, MeasureSpec.EXACTLY)
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

    blurTarget.layout(0, 0, right - left, bottom - top)
  }

  private fun toHostLayoutParams(params: ViewGroup.LayoutParams?): LayoutParams = when (params) {
    null -> LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT)
    is LayoutParams -> params
    else -> LayoutParams(params)
  }
}
