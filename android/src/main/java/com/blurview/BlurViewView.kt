package com.blurview

import android.view.View
import com.facebook.react.uimanager.ThemedReactContext

import eightbitlab.com.blurview.BlurView;
import java.util.Objects

class BlurViewView {
  companion object {
    fun createViewInstance(context: ThemedReactContext): BlurView {
      val view = BlurView(context)
      val decorView: View? = Objects
        .requireNonNull(context.currentActivity)
        ?.window
        ?.decorView

      if (decorView == null) return view

      view
        .setupWith(decorView.findViewById(android.R.id.content))
        .setFrameClearDrawable(decorView.background)
        .setBlurRadius(10f)
        .setBlurEnabled(true)
        .setBlurAutoUpdate(true)

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
