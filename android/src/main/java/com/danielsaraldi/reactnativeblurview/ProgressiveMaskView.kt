package com.danielsaraldi.reactnativeblurview

import android.content.Context
import android.graphics.Canvas
import android.graphics.Color
import android.graphics.LinearGradient
import android.graphics.Paint
import android.graphics.PorterDuff
import android.graphics.PorterDuffXfermode
import android.graphics.Shader
import com.facebook.react.views.view.ReactViewGroup
import kotlin.math.roundToInt

class ProgressiveMaskView(context: Context?) : ReactViewGroup(context) {
  private var direction: String = "top"
  private var offset: Float = 1f

  private val maskPaint: Paint = Paint(Paint.ANTI_ALIAS_FLAG).apply {
    xfermode = PorterDuffXfermode(PorterDuff.Mode.DST_IN)
  }

  companion object {
    private const val MASK_STEPS: Int = 16
  }

  override fun onSizeChanged(w: Int, h: Int, oldw: Int, oldh: Int) {
    super.onSizeChanged(w, h, oldw, oldh)

    this.updateMask()
  }

  override fun dispatchDraw(canvas: Canvas) {
    if (this.offset <= 0f) return

    val width = this.width.toFloat()
    val height = this.height.toFloat()

    if (width <= 0f || height <= 0f) {
      super.dispatchDraw(canvas)
      return
    }

    val saveCount = canvas.saveLayer(0f, 0f, width, height, null)
    super.dispatchDraw(canvas)
    canvas.drawRect(0f, 0f, width, height, this.maskPaint)
    canvas.restoreToCount(saveCount)
  }

  private fun updateMask() {
    val width = this.width.toFloat()
    val height = this.height.toFloat()

    if (width <= 0f || height <= 0f || this.offset <= 0f) {
      this.maskPaint.shader = null
      this.invalidate()
      return
    }

    val colors = ArrayList<Int>(MASK_STEPS + 2)
    val positions = ArrayList<Float>(MASK_STEPS + 2)

    for (step in 0..MASK_STEPS) {
      val progress = step.toFloat() / MASK_STEPS.toFloat()
      val eased = progress * progress * (3f - 2f * progress)
      val alpha = ((1f - eased) * 255f).roundToInt()

      colors.add(Color.argb(alpha, 0, 0, 0))
      positions.add(progress * this.offset)
    }

    if (this.offset < 1f) {
      colors.add(Color.TRANSPARENT)
      positions.add(1f)
    }

    val (x0, y0, x1, y1) = when (this.direction) {
      "bottom" -> listOf(0f, height, 0f, 0f)
      "left" -> listOf(0f, 0f, width, 0f)
      "right" -> listOf(width, 0f, 0f, 0f)
      else -> listOf(0f, 0f, 0f, height)
    }

    this.maskPaint.shader = LinearGradient(
      x0,
      y0,
      x1,
      y1,
      colors.toIntArray(),
      positions.toFloatArray(),
      Shader.TileMode.CLAMP
    )

    this.invalidate()
  }

  fun setDirection(direction: String?) {
    val normalized = when (direction) {
      "bottom", "left", "right" -> direction
      else -> "top"
    }

    if (this.direction == normalized) return

    this.direction = normalized
    this.updateMask()
  }

  fun setOffset(offset: Float) {
    val clipped = offset.coerceIn(0f, 1f)

    if (this.offset == clipped) return

    this.offset = clipped
    this.updateMask()
  }
}
