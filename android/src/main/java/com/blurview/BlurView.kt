package com.blurview

import android.content.Context
import android.graphics.Color
import android.util.AttributeSet
import android.util.Log
import android.view.ViewGroup
import kotlin.text.equals
import kotlin.text.lowercase

class BlurView : eightbitlab.com.blurview.BlurView {
  private var overlayColor: OverlayColor = OverlayColor.fromString("light")
  private var radius: Float = 10f * INTENSITY
  private var isConfigured: Boolean = false

  companion object {
    private val TAG: String = "BlurView"
    private val INTENSITY: Float = 0.675f
  }

  private enum class OverlayColor(val color: Int) {
    X_LIGHT(Color.argb(140, 240, 240, 240)),
    LIGHT(Color.argb(38, 255, 255, 255)),
    DARK(Color.argb(120, 26, 22, 22)),
    REGULAR(Color.argb(35, 255, 255, 255)),
    PROMINENT(Color.argb(140, 240, 240, 240)),
    ULTRA_THIN_MATERIAL(Color.argb(20, 255, 255, 255)),
    ULTRA_THIN_MATERIAL_LIGHT(Color.argb(5, 255, 255, 255)),
    ULTRA_THIN_MATERIAL_DARK(Color.argb(20, 0, 0, 0)),
    THIN_MATERIAL(Color.argb(102, 240, 240, 240)),
    THIN_MATERIAL_LIGHT(Color.argb(105, 240, 240, 240)),
    THIN_MATERIAL_DARK(Color.argb(102, 35, 35, 35)),
    MATERIAL(Color.argb(140, 245, 245, 245)),
    MATERIAL_LIGHT(Color.argb(140, 248, 248, 248)),
    MATERIAL_DARK(Color.argb(215, 65, 60, 60)),
    THICK_MATERIAL(Color.argb(210, 248, 248, 248)),
    THICK_MATERIAL_LIGHT(Color.argb(212, 248, 248, 248)),
    THICK_MATERIAL_DARK(Color.argb(165, 35, 35, 35)),
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

  constructor(context: Context?) : super(context) {
    this.initialize()
  }

  constructor(context: Context?, attrs: AttributeSet?) : super(context, attrs) {
    this.initialize()
  }

  constructor(context: Context?, attrs: AttributeSet?, defStyleAttr: Int) : super(
    context,
    attrs,
    defStyleAttr
  ) {
    this.initialize()
  }

  override fun onAttachedToWindow() {
    super.onAttachedToWindow()

    // Now we can safely walk the parent hierarchy
    if (!this.isConfigured) {
      this.isConfigured = true
      this.initialize()
    }
  }

  override fun onDetachedFromWindow() {
    super.onDetachedFromWindow()

    this.isConfigured = false
    this.removeCallbacks(null)
  }

  private fun initialize() {
    val rootView = findOptimalBlurRoot()

    rootView?.let { root ->
      try {
        super.setBackgroundColor(this.overlayColor.color)

        super.setupWith(root)
          .setBlurRadius(this.radius)
          .setOverlayColor(this.overlayColor.color)

        root.clipToOutline = true
        root.clipChildren = true
      } catch (e: Exception) {
        super.setBackgroundColor(this.overlayColor.color)
        super.setOverlayColor(this.overlayColor.color)

        val throwable = Throwable("Failed to initialize blur: ${e.message}")
        throw Error(TAG, throwable)
      }
    }
  }

  private fun clipRadius(radius: Float): Float {
    return if (radius <= 0) 0f
    else if (radius >= 67.5f) 67.5f
    else radius
  }

  /**
   * Attempts to find the nearest Screen ancestor (from react-native-screens).
   * Falls back to app root if no Screen is found.
   */
  private fun findOptimalBlurRoot(): ViewGroup? {
    val screenAncestor = this.findNearestScreenAncestor()
    return screenAncestor ?: this.getAppRootFallback()
  }

  /**
   * Walks up the view hierarchy looking for react-native-screens Screen components
   * using class name detection to avoid hard dependencies.
   */
  private fun findNearestScreenAncestor(): ViewGroup? {
    var currentParent = this.parent
    while (currentParent != null) {
      if (isReactNativeScreen(currentParent)) {
        return currentParent as? ViewGroup
      }
      currentParent = currentParent.parent
    }
    return null
  }

  private fun isReactNativeScreen(view: Any): Boolean {
    val className = view.javaClass.name
    return className == "com.swmansion.rnscreens.Screen"
  }

  private fun getAppRootFallback(): ViewGroup? {
    var parent = this.parent
    while (parent != null) {
      if (parent is ViewGroup && parent.id == android.R.id.content) {
        return parent
      }
      parent = parent.parent
    }

    try {
      val activity = context as? android.app.Activity
      activity?.findViewById<ViewGroup>(android.R.id.content)?.let {
        return it
      }
    } catch (e: Exception) {
      Log.d(TAG, "Could not access activity root view: ${e.message}")
    }

    return this.parent as? ViewGroup
  }

  fun setOverlayColor(overlayColor: String) {
    val overlay = OverlayColor.fromString(overlayColor)

    this.overlayColor = overlay

    if (!this.isConfigured) return

    super.setBackgroundColor(overlay.color)
    super.setOverlayColor(overlay.color)
    super.invalidate()
  }

  fun setRadius(radius: Float) {
    var radiusValue = radius * INTENSITY

    this.radius = this.clipRadius(radiusValue)

    if (!this.isConfigured) return

    val clippedRadius = this.clipRadius(radiusValue)
    super.setBlurRadius(clippedRadius)
    super.invalidate()
  }
}
