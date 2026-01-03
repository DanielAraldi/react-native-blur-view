package com.blurview

import android.content.Context
import android.graphics.Color
import android.graphics.Outline
import android.os.Build
import android.util.AttributeSet
import android.util.Log
import android.util.TypedValue
import android.view.View
import android.view.ViewGroup
import android.view.ViewOutlineProvider
import androidx.annotation.RequiresApi
import androidx.appcompat.app.AppCompatActivity
import androidx.core.graphics.drawable.toDrawable
import com.qmdeve.blurview.widget.BlurViewGroup

class BlurView : BlurViewGroup {
  private var radius: Float = 10f
  private var cornerRadius: Float = 0f
  private var blurOverlayColor: BlurOverlayColor = BlurOverlayColor()

  companion object {
    private const val TAG: String = "BlurView"
    private const val MIN_BLUR_RADIUS: Float = 0f
    private const val MAX_BLUR_RADIUS: Float = 100f
    private const val BLUR_FACTOR: Float = 6f
    private const val BLUR_ROUNDS: Int = 10
  }

  constructor(context: Context?) : super(context, null) {
    this.initialize()
  }

  constructor(context: Context?, attrs: AttributeSet?) : super(context, attrs) {
    this.initialize()
  }

  override fun onDetachedFromWindow() {
    super.onDetachedFromWindow()

    this.cleanUp()
  }

  override fun generateDefaultLayoutParams(): BlurViewGroup.LayoutParams {
    return BlurViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT)
  }

  override fun generateLayoutParams(attrs: AttributeSet?): BlurViewGroup.LayoutParams {
    return BlurViewGroup.LayoutParams(context, attrs)
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

  private fun initialize() {
    val overlayColor = this.blurOverlayColor.toEffect(this.radius)

    super.setBlurRadius(this.radius)
    super.setOverlayColor(overlayColor)
    super.setDownsampleFactor(BLUR_FACTOR)

    super.blurRounds = BLUR_ROUNDS
    super.clipChildren = true

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
      super.setBackgroundColor(overlayColor)
    }

    this.updateCornerRadius()
  }

  private fun updateCornerRadius() {
    val radiusInPixels = TypedValue.applyDimension(
      TypedValue.COMPLEX_UNIT_DIP,
      this.cornerRadius,
      context.resources.displayMetrics
    )

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
      super.rootView.outlineProvider = object : ViewOutlineProvider() {
        @RequiresApi(Build.VERSION_CODES.LOLLIPOP)
        override fun getOutline(view: View, outline: Outline?) {
          outline?.setRoundRect(0, 0, view.width, view.height, radiusInPixels)
        }
      }

      super.clipToOutline = true
    }

    super.setCornerRadius(radiusInPixels)
  }

  private fun clipRadius(radius: Float): Float {
    val clampedRadius = radius.coerceIn(MIN_BLUR_RADIUS, MAX_BLUR_RADIUS)
    return (clampedRadius / MAX_BLUR_RADIUS) * MAX_BLUR_RADIUS
  }

  fun cleanUp() {
    removeCallbacks(null)
  }

  fun setOverlayColor(overlayColor: String) {
    val overlayColor = this.blurOverlayColor.toEffect(overlayColor, this.radius)

    super.setOverlayColor(overlayColor)

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
      super.setBackgroundColor(overlayColor)
    }
  }

  fun setRadius(radius: Float) {
    this.radius = this.clipRadius(radius)

    this.setOverlayColor(this.blurOverlayColor.getColor())
    super.setBlurRadius(this.radius)
  }

  fun setBorderRadius(cornerRadius: Float) {
    this.cornerRadius = cornerRadius

    this.updateCornerRadius()
  }
}
