package com.blurview

import android.graphics.Color

enum class BlurOverlayColor(val color: Int) {
  X_LIGHT(Color.argb(140, 240, 240, 240)),
  LIGHT(Color.argb(42, 255, 255, 255)),
  DARK(Color.argb(120, 26, 22, 22)),
  REGULAR(Color.argb(35, 255, 255, 255)),
  PROMINENT(Color.argb(140, 240, 240, 240)),
  ULTRA_THIN_MATERIAL(Color.argb(75, 240, 240, 240)),
  ULTRA_THIN_MATERIAL_LIGHT(Color.argb(77, 240, 240, 240)),
  ULTRA_THIN_MATERIAL_DARK(Color.argb(65, 40, 40, 40)),
  THIN_MATERIAL(Color.argb(102, 240, 240, 240)),
  THIN_MATERIAL_LIGHT(Color.argb(105, 240, 240, 240)),
  THIN_MATERIAL_DARK(Color.argb(102, 35, 35, 35)),
  MATERIAL(Color.argb(140, 245, 245, 245)),
  MATERIAL_LIGHT(Color.argb(140, 248, 248, 248)),
  MATERIAL_DARK(Color.argb(215, 65, 60, 60)),
  THICK_MATERIAL(Color.argb(210, 248, 248, 248)),
  THICK_MATERIAL_LIGHT(Color.argb(212, 248, 248, 248)),
  THICK_MATERIAL_DARK(Color.argb(165, 35, 35, 35)),
  CHROME_MATERIAL(Color.argb(165, 248, 248, 248)),
  CHROME_MATERIAL_LIGHT(Color.argb(167, 248, 248, 248)),
  CHROME_MATERIAL_DARK(Color.argb(100, 32, 32, 32));

  companion object {
    fun fromString(color: String): BlurOverlayColor {
      return when (color.lowercase()) {
        "x-light" -> X_LIGHT
        "light" -> LIGHT
        "dark" -> DARK
        "regular" -> REGULAR
        "prominent" -> PROMINENT
        "ultra-thin-material" -> ULTRA_THIN_MATERIAL
        "ultra-thin-material-light" -> ULTRA_THIN_MATERIAL_LIGHT
        "ultra-thin-material-dark" -> ULTRA_THIN_MATERIAL_DARK
        "thin-material" -> THIN_MATERIAL
        "thin-material-light" -> THIN_MATERIAL_LIGHT
        "thin-material-dark" -> THIN_MATERIAL_DARK
        "material" -> MATERIAL
        "material-light" -> MATERIAL_LIGHT
        "material-dark" -> MATERIAL_DARK
        "thick-material" -> THICK_MATERIAL
        "thick-material-light" -> THICK_MATERIAL_LIGHT
        "thick-material-dark" -> THICK_MATERIAL_DARK
        "chrome-material" -> CHROME_MATERIAL
        "chrome-material-light" -> CHROME_MATERIAL_LIGHT
        "chrome-material-dark" -> CHROME_MATERIAL_DARK
        else -> LIGHT
      }
    }
  }
}
