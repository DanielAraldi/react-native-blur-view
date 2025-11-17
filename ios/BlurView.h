#import <UIKit/UIKit.h>
#import "BlurViewEffect.h"

// Check if Fabric (new architecture) is available
#ifdef RCT_NEW_ARCH_ENABLED
#import <React/RCTViewComponentView.h>
#else
#import <React/RCTView.h>
#endif

#ifndef BlurViewNativeComponent_h
#define BlurViewNativeComponent_h

NS_ASSUME_NONNULL_BEGIN

#ifdef RCT_NEW_ARCH_ENABLED
// New architecture: inherit from RCTViewComponentView
@interface BlurView : RCTViewComponentView
#else
// Old architecture: inherit from UIView
@interface BlurView : UIView
#endif

@property(nonatomic, copy, nullable) NSString *overlayColor;
@property(nonatomic, copy, nullable) NSNumber *blurRadius;

@property(nonatomic, strong, nullable) BlurViewEffect *blurEffect;
@property(nonatomic, strong, nullable) UIVisualEffectView *blurEffectView;

@end

NS_ASSUME_NONNULL_END

#endif /* BlurViewNativeComponent_h */
