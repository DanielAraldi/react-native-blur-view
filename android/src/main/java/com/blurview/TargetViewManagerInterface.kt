package com.blurview

/**
 * Interface for backward compatibility with old architecture.
 * This provides the same contract as the Fabric-generated interface.
 */
interface TargetViewManagerInterface<T> {
  fun setId(view: T?, id: String?)
}

