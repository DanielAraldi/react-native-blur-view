package com.blurview

import android.graphics.Color
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewGroupManager
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.viewmanagers.BlurViewAndroidManagerInterface
import com.facebook.react.viewmanagers.BlurViewAndroidManagerDelegate
import eightbitlab.com.blurview.BlurView

@ReactModule(name = BlurViewViewManager.NAME)
class BlurViewViewManager : ViewGroupManager<BlurView>(),
  BlurViewAndroidManagerInterface<BlurView> {
  private val mDelegate: ViewManagerDelegate<BlurView> = BlurViewAndroidManagerDelegate(this)

  override fun getDelegate(): ViewManagerDelegate<BlurView> {
    return mDelegate
  }

  override fun getName(): String {
    return NAME
  }

  public override fun createViewInstance(context: ThemedReactContext): BlurView {
    return BlurViewView.createViewInstance(context)
  }

  companion object {
    const val NAME = "BlurViewAndroid"
  }

  @Override
  @ReactProp(name = "overlayColor", customType = "Color")
  override fun setOverlayColor(view: BlurView?, overlayColor: Int?) {
    if (view == null) return

    if (overlayColor == null) {
      BlurViewView.setOverlayColor(view, Color.TRANSPARENT)
    } else {
      BlurViewView.setOverlayColor(view, overlayColor)
    }
  }

  @Override
  @ReactProp(name = "blurRadius")
  override fun setBlurRadius(view: BlurView?, radius: Float) {
    if (view == null) return

    BlurViewView.setBlurRadius(view, radius)
  }
}
