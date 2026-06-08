package com.blurview

import android.content.res.Configuration
import android.graphics.Color

enum class BlurOverlayColor(val color: Int) {
  EXTRA_LIGHT(Color.argb(140, 240, 240, 240)),
  LIGHT(Color.argb(42, 255, 255, 255)),
  DARK(Color.argb(120, 26, 22, 22)),
  EXTRA_DARK(Color.argb(160, 35, 35, 35)),
  REGULAR_LIGHT(Color.argb(35, 255, 255, 255)),
  REGULAR_DARK(Color.argb(35, 28, 28, 30)),
  PROMINENT_LIGHT(Color.argb(140, 240, 240, 240)),
  PROMINENT_DARK(Color.argb(140, 28, 28, 30)),
  ULTRA_THIN_MATERIAL_LIGHT(Color.argb(75, 240, 240, 240)),
  ULTRA_THIN_MATERIAL_DARK(Color.argb(65, 40, 40, 40)),
  THIN_MATERIAL_LIGHT(Color.argb(102, 240, 240, 240)),
  THIN_MATERIAL_DARK(Color.argb(102, 35, 35, 35)),
  MATERIAL_LIGHT(Color.argb(140, 245, 245, 245)),
  MATERIAL_DARK(Color.argb(215, 65, 60, 60)),
  THICK_MATERIAL_LIGHT(Color.argb(210, 248, 248, 248)),
  THICK_MATERIAL_DARK(Color.argb(165, 35, 35, 35)),
  CHROME_MATERIAL_LIGHT(Color.argb(165, 248, 248, 248)),
  CHROME_MATERIAL_DARK(Color.argb(100, 32, 32, 32));

  companion object {
    fun fromString(color: String, configuration: Configuration): BlurOverlayColor {
      val isDarkMode = (configuration.uiMode and Configuration.UI_MODE_NIGHT_MASK) == Configuration.UI_MODE_NIGHT_YES

      return when (color.lowercase()) {
        "extra-light" -> EXTRA_LIGHT
        "light" -> LIGHT
        "dark" -> DARK
        "extra-dark" -> EXTRA_DARK
        "regular" -> if (isDarkMode) REGULAR_DARK else REGULAR_LIGHT
        "prominent" -> if (isDarkMode) PROMINENT_DARK else PROMINENT_LIGHT
        "ultra-thin-material" -> if (isDarkMode) ULTRA_THIN_MATERIAL_DARK else ULTRA_THIN_MATERIAL_LIGHT
        "ultra-thin-material-light" -> ULTRA_THIN_MATERIAL_LIGHT
        "ultra-thin-material-dark" -> ULTRA_THIN_MATERIAL_DARK
        "thin-material" -> if (isDarkMode) THIN_MATERIAL_DARK else THIN_MATERIAL_LIGHT
        "thin-material-light" -> THIN_MATERIAL_LIGHT
        "thin-material-dark" -> THIN_MATERIAL_DARK
        "material" -> if (isDarkMode) MATERIAL_DARK else MATERIAL_LIGHT
        "material-light" -> MATERIAL_LIGHT
        "material-dark" -> MATERIAL_DARK
        "thick-material" -> if (isDarkMode) THICK_MATERIAL_DARK else THICK_MATERIAL_LIGHT
        "thick-material-light" -> THICK_MATERIAL_LIGHT
        "thick-material-dark" -> THICK_MATERIAL_DARK
        "chrome-material" -> if (isDarkMode) CHROME_MATERIAL_DARK else CHROME_MATERIAL_LIGHT
        "chrome-material-light" -> CHROME_MATERIAL_LIGHT
        "chrome-material-dark" -> CHROME_MATERIAL_DARK
        else -> LIGHT
      }
    }
  }
}
