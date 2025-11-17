package com.blurview

import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewGroupManager
import com.facebook.react.uimanager.annotations.ReactProp

@ReactModule(name = BlurViewManager.NAME)
class BlurViewManager : ViewGroupManager<BlurView>() {

  override fun getName(): String {
    return NAME
  }

  public override fun createViewInstance(context: ThemedReactContext): BlurView {
    return BlurView(context)
  }

  companion object {
    const val NAME = "BlurView"
  }

  @ReactProp(name = "overlayColor")
  fun setOverlayColor(view: BlurView?, overlayColor: String?) {
    view?.setOverlayColor(overlayColor ?: "light")
  }

  @ReactProp(name = "blurRadius", defaultFloat = 10f)
  fun setBlurRadius(view: BlurView?, radius: Float) {
    view?.setRadius(radius)
  }

  @ReactProp(name = "targetId")
  fun setTargetId(view: BlurView?, targetId: String?) {
    view?.setTargetId(targetId)
  }
}

