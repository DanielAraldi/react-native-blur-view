package com.danielsaraldi.reactnativeblurview

import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewGroupManager
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.viewmanagers.ProgressiveMaskViewManagerDelegate
import com.facebook.react.viewmanagers.ProgressiveMaskViewManagerInterface

@ReactModule(name = ProgressiveMaskViewManager.NAME)
class ProgressiveMaskViewManager : ViewGroupManager<ProgressiveMaskView>(),
  ProgressiveMaskViewManagerInterface<ProgressiveMaskView> {
  private val mDelegate: ViewManagerDelegate<ProgressiveMaskView> =
    ProgressiveMaskViewManagerDelegate(this)

  override fun getDelegate(): ViewManagerDelegate<ProgressiveMaskView> {
    return mDelegate
  }

  override fun getName(): String {
    return NAME
  }

  public override fun createViewInstance(context: ThemedReactContext): ProgressiveMaskView {
    return ProgressiveMaskView(context)
  }

  companion object {
    const val NAME = "ProgressiveMaskView"
  }

  @Override
  @ReactProp(name = "direction")
  override fun setDirection(view: ProgressiveMaskView?, direction: String?) {
    view?.setDirection(direction ?: "top")
  }

  @Override
  @ReactProp(name = "offset", defaultFloat = 1f)
  override fun setOffset(view: ProgressiveMaskView?, offset: Float) {
    view?.setOffset(offset)
  }

  /**
   * Indicates that React Native's Yoga layout should handle child positioning.
   * Returns false to let React Native manage the layout of children.
   */
  override fun needsCustomLayoutForChildren(): Boolean {
    return false
  }
}
