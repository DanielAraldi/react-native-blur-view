package com.blurview

import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewGroupManager
import com.facebook.react.uimanager.annotations.ReactProp

@ReactModule(name = TargetViewManager.NAME)
class TargetViewManager : ViewGroupManager<TargetView>() {

  public override fun createViewInstance(context: ThemedReactContext): TargetView {
    return TargetView(context)
  }

  override fun getName(): String {
    return NAME
  }

  companion object {
    const val NAME = "TargetView"
  }

  @ReactProp(name = "id")
  fun setId(view: TargetView?, id: String?) {
    view?.setId(id)
  }
}
