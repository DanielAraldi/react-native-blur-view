package com.blurview

import android.view.ViewGroup
import com.facebook.react.uimanager.ThemedReactContext

import eightbitlab.com.blurview.BlurView;

class BlurViewView {
  companion object {
    fun createViewInstance(context: ThemedReactContext): BlurView {
      val view = BlurView(context)
      val activity = context.currentActivity

      if (activity == null) return view

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

    fun setOverlayColor(view: BlurView, overlayColor: Int) {
      view.setOverlayColor(overlayColor)
      view.invalidate()
    }

    fun setBlurRadius(view: BlurView, radius: Float) {
      view.setBlurRadius(radius)
      view.invalidate()
    }
  }
}
