#import <React/RCTViewComponentView.h>
#import <UIKit/UIKit.h>

#import "BlurViewEffect.h"

#ifndef BlurViewNativeComponent_h
#define BlurViewNativeComponent_h

NS_ASSUME_NONNULL_BEGIN

@interface BlurView : RCTViewComponentView

@property(nonatomic, copy, nullable) NSString *overlayColor;
@property(nonatomic, copy, nullable) NSNumber *blurRadius;

@property(nonatomic, strong, nullable) BlurViewEffect *blurEffect;
@property(nonatomic, strong, nullable) UIVisualEffectView *blurEffectView;

@end

NS_ASSUME_NONNULL_END

#endif /* BlurViewNativeComponent_h */
