package com.blurview

import com.facebook.react.uimanager.ThemedReactContext
import eightbitlab.com.blurview.BlurTarget
import eightbitlab.com.blurview.BlurView

class BlurViewView {
  companion object {
    private lateinit var view: BlurView
    private var target: BlurTarget? = null

    private fun ensureTargetInitialized(context: ThemedReactContext): BlurTarget {
      if (this.target == null) this.target = BlurTarget(context)

      return this.target!!
    }

    fun getBlurViewInstance(context: ThemedReactContext): BlurView {
      this.view = BlurView(context)

      val activity = context.currentActivity ?: return this.view
      val decorView = activity.window.decorView

      this.target = this.ensureTargetInitialized(context)

      this.view
        .setupWith(this.target!!)
        .setBlurRadius(10f)
        .setBlurEnabled(true)
        .setBlurAutoUpdate(true)
        .setFrameClearDrawable(decorView.background)

      this.view.clipChildren = true
      this.view.clipToOutline = true

      return this.view
    }

    fun getTargetViewInstance(context: ThemedReactContext): BlurTarget {
      return this.ensureTargetInitialized(context)
    }

    fun setOverlayColor(view: BlurView, overlayColor: Int) {
      view.setOverlayColor(overlayColor)
    }

    fun setBlurRadius(view: BlurView, radius: Float) {
      view.setBlurRadius(radius)
    }
  }
}
