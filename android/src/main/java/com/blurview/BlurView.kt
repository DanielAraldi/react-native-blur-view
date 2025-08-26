package com.blurview

import android.graphics.Color
import android.util.Log
import android.view.ViewGroup
import com.facebook.react.uimanager.ThemedReactContext

class BlurView {
  private enum class OverlayColor(val color: Int) {
    X_LIGHT(Color.argb(25, 255, 255, 255)),
    LIGHT(Color.argb(40, 255, 255, 255)),
    DARK(Color.argb(60, 0, 0, 0)),
    REGULAR(Color.argb(50, 255, 255, 255)),
    PROMINENT(Color.argb(70, 255, 255, 255)),
    ULTRA_THIN_MATERIAL(Color.argb(20, 255, 255, 255)),
    ULTRA_THIN_MATERIAL_LIGHT(Color.argb(5, 255, 255, 255)),
    ULTRA_THIN_MATERIAL_DARK(Color.argb(20, 0, 0, 0)),
    THIN_MATERIAL(Color.argb(35, 255, 255, 255)),
    THIN_MATERIAL_LIGHT(Color.argb(20, 255, 255, 255)),
    THIN_MATERIAL_DARK(Color.argb(35, 0, 0, 0)),
    MATERIAL(Color.argb(50, 255, 255, 255)),
    MATERIAL_LIGHT(Color.argb(35, 255, 255, 255)),
    MATERIAL_DARK(Color.argb(50, 0, 0, 0)),
    THICK_MATERIAL(Color.argb(65, 255, 255, 255)),
    THICK_MATERIAL_LIGHT(Color.argb(50, 255, 255, 255)),
    THICK_MATERIAL_DARK(Color.argb(65, 0, 0, 0)),
    CHROME_MATERIAL(Color.argb(45, 240, 240, 240)),
    CHROME_MATERIAL_LIGHT(Color.argb(30, 240, 240, 240)),
    CHROME_MATERIAL_DARK(Color.argb(45, 15, 15, 15));

    companion object {
      fun fromString(color: String): OverlayColor {
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

  companion object {
    private fun clipRadius(radius: Float): Float {
      return if (radius <= 0) 0f
      else if (radius >= 100) 100f
      else radius
    }

    fun createViewInstance(context: ThemedReactContext?): eightbitlab.com.blurview.BlurView {
      val view = eightbitlab.com.blurview.BlurView(context)
      val activity = context?.currentActivity

      if (activity == null) {
        Log.e("ReactNativeBlurView", "Failed to create BlurView instance. Activity doesn't exists.")
        return view
      }

      val decorView = activity.window.decorView
      val contentView = decorView.findViewById<ViewGroup>(android.R.id.content)

      view
        .setupWith(contentView)
        .setFrameClearDrawable(decorView.background)
        .setBlurRadius(10f)
        .setBlurEnabled(true)
        .setBlurAutoUpdate(true)

      view.clipToOutline = true
      view.clipChildren = true

      return view
    }

    fun setOverlayColor(view: eightbitlab.com.blurview.BlurView?, overlayColor: String) {
      val overlay = OverlayColor.fromString(overlayColor)
      view?.setBackgroundColor(overlay.color)
      view?.setOverlayColor(overlay.color)
      view?.invalidate()
    }

    fun setRadius(view: eightbitlab.com.blurview.BlurView?, radius: Float) {
      val clippedRadius = clipRadius(radius)
      view?.setBlurRadius(clippedRadius)
      view?.invalidate()
    }
  }
}
