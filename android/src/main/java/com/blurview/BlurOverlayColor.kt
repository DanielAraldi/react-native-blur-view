package com.blurview

import android.graphics.Color

class BlurOverlayColor {
  private var color: String = "light"

  companion object {
    private const val INITIAL_INTENSITY: Float = 10f
    private const val MIN_INTENSITY: Float = 0.5f
  }

  fun getColor(): String {
    return this.color
  }

  fun toEffect(radius: Float): Int {
    return this.toEffect("light", radius)
  }

  fun toEffect(color: String, radius: Float): Int {
    this.color = color

    var intensity = 1f
    if (radius <= INITIAL_INTENSITY) {
      intensity = radius / INITIAL_INTENSITY

      if (intensity < MIN_INTENSITY) {
        intensity = MIN_INTENSITY
      }
    }

    val default: Int = Color.argb((85 * intensity).toInt(), 249, 249, 249)

    return when (color.lowercase()) {
      "x-light" -> Color.argb((200 * intensity).toInt(), 240, 240, 240)
      "light" -> default
      "dark" -> Color.argb((180 * intensity).toInt(), 25, 25, 25)
      "regular" -> Color.argb((100 * intensity).toInt(), 205, 205, 205)
      "prominent" -> Color.argb((215 * intensity).toInt(), 240, 240, 240)
      "ultra-thin-material" -> Color.argb((100 * intensity).toInt(), 240, 240, 240)
      "ultra-thin-material-light" -> Color.argb((102 * intensity).toInt(), 240, 240, 240)
      "ultra-thin-material-dark" -> Color.argb((100 * intensity).toInt(), 75, 70, 70)
      "thin-material" -> Color.argb((160 * intensity).toInt(), 240, 240, 240)
      "thin-material-light" -> Color.argb((160 * intensity).toInt(), 242, 242, 242)
      "thin-material-dark" -> Color.argb((105 * intensity).toInt(), 45, 45, 45)
      "material" -> Color.argb((210 * intensity).toInt(), 245, 245, 245)
      "material-light" -> Color.argb((210 * intensity).toInt(), 248, 248, 248)
      "material-dark" -> Color.argb((200 * intensity).toInt(), 65, 60, 60)
      "thick-material" -> Color.argb((220 * intensity).toInt(), 248, 248, 248)
      "thick-material-light" -> Color.argb((222 * intensity).toInt(), 248, 248, 248)
      "thick-material-dark" -> Color.argb((155 * intensity).toInt(), 35, 35, 35)
      "chrome-material" -> Color.argb((195 * intensity).toInt(), 245, 245, 245)
      "chrome-material-light" -> Color.argb((197 * intensity).toInt(), 247, 247, 247)
      "chrome-material-dark" -> Color.argb((100 * intensity).toInt(), 35, 35, 35)
      else -> default
    }
  }
}
