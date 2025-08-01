package com.blurview

import android.graphics.Color
import androidx.core.graphics.toColorInt
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewGroupManager
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.viewmanagers.BlurViewViewManagerInterface
import com.facebook.react.viewmanagers.BlurViewViewManagerDelegate
import eightbitlab.com.blurview.BlurView

@ReactModule(name = BlurViewViewManager.NAME)
class BlurViewViewManager : ViewGroupManager<BlurView>(),
  BlurViewViewManagerInterface<BlurView> {
  private val mDelegate: ViewManagerDelegate<BlurView> = BlurViewViewManagerDelegate(this)

  override fun getDelegate(): ViewManagerDelegate<BlurView> {
    return mDelegate
  }

  override fun getName(): String {
    return NAME
  }

  public override fun createViewInstance(context: ThemedReactContext): BlurView {
    return BlurViewView.getBlurViewInstance(context)
  }

  companion object {
    const val NAME = "BlurViewView"
  }

  @ReactProp(name = "overlayColor")
  override fun setOverlayColor(view: BlurView?, overlayColor: String?) {
    if (view == null) return

    if (overlayColor == null) {
      BlurViewView.setOverlayColor(view, Color.TRANSPARENT)
    } else {
      BlurViewView.setOverlayColor(view, overlayColor.toColorInt())
    }
  }

  @ReactProp(name = "blurRadius")
  override fun setBlurRadius(view: BlurView?, radius: Float) {
    if (view == null) return

    BlurViewView.setBlurRadius(view, radius)
  }
}
