package com.blurview

import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewGroupManager
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.viewmanagers.BlurViewManagerInterface
import com.facebook.react.viewmanagers.BlurViewManagerDelegate

@ReactModule(name = BlurViewManager.NAME)
class BlurViewManager : ViewGroupManager<BlurView>(),
  BlurViewManagerInterface<BlurView> {
  private val mDelegate: ViewManagerDelegate<BlurView> = BlurViewManagerDelegate(this)

  override fun getDelegate(): ViewManagerDelegate<BlurView> {
    return mDelegate
  }

  override fun getName(): String {
    return NAME
  }

  public override fun createViewInstance(context: ThemedReactContext): BlurView {
    return BlurView(context)
  }

  companion object {
    const val NAME = "BlurView"
  }

  @Override
  @ReactProp(name = "overlayColor")
  override fun setOverlayColor(view: BlurView?, overlarColor: String?) {
    view?.setOverlayColor(overlarColor ?: "light")
  }

  @Override
  @ReactProp(name = "blurRadius", defaultFloat = 10f)
  override fun setBlurRadius(view: BlurView?, radius: Float) {
    view?.setRadius(radius)
  }

  @Override
  @ReactProp(name = "downscaleFactor", defaultFloat = 6f)
  override fun setDownscaleFactor(view: BlurView?, downscaleFactor: Float) {
    view?.setDownscaleFactor(downscaleFactor)
  }

  @Override
  @ReactProp(name = "reducedTransparencyFallbackColor")
  override fun setReducedTransparencyFallbackColor(view: BlurView?, reducedTransparencyFallbackColor: String?) {
    /**
      No-op: Android does not have a direct equivalent to iOS's reduced
      transparency fallback.
     */
  }

  @Override
  @ReactProp(name = "targetId")
  override fun setTargetId(view: BlurView?, targetId: String?) {
    view?.setTargetId(targetId)
  }

  /**
   * Indicates that React Native's Yoga layout should handle child positioning.
   * Returns false to let React Native manage the layout of children.
   */
  override fun needsCustomLayoutForChildren(): Boolean {
    return false
  }
}

