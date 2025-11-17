package com.blurview

/**
 * Interface for backward compatibility with old architecture.
 * This provides the same contract as the Fabric-generated interface.
 */
interface BlurViewManagerInterface<T> {
  fun setOverlayColor(view: T?, overlayColor: String?)
  fun setBlurRadius(view: T?, radius: Float)
  fun setTargetId(view: T?, targetId: String?)
}

