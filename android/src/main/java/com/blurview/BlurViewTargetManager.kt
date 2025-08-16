package com.blurview

import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewGroupManager
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.viewmanagers.BlurViewTargetManagerInterface
import com.facebook.react.viewmanagers.BlurViewTargetManagerDelegate
import eightbitlab.com.blurview.BlurTarget

@ReactModule(name = BlurViewTargetManager.NAME)
class BlurViewTargetManager : ViewGroupManager<BlurTarget>(),
  BlurViewTargetManagerInterface<BlurTarget> {
  private val mDelegate: ViewManagerDelegate<BlurTarget> = BlurViewTargetManagerDelegate(this)

  override fun getDelegate(): ViewManagerDelegate<BlurTarget> {
    return mDelegate
  }

  override fun getName(): String {
    return NAME
  }

  public override fun createViewInstance(context: ThemedReactContext): BlurTarget {
    return BlurViewView.getTargetViewInstance(context)
  }

  companion object {
    const val NAME = "BlurViewTarget"
  }
}
