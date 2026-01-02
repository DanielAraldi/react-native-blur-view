#import <React/RCTViewComponentView.h>
#import <UIKit/UIKit.h>

#import "BlurViewEffect.h"

#ifndef VibrancyViewNativeComponent_h
#define VibrancyViewNativeComponent_h

NS_ASSUME_NONNULL_BEGIN

@interface VibrancyView : RCTViewComponentView

#if !TARGET_OS_TV

@property(nonatomic, copy, nullable) NSString *overlayColor;
@property(nonatomic, copy, nullable) NSNumber *blurRadius;

@property(nonatomic, strong, nullable) BlurViewEffect *blurEffect;
@property(nonatomic, strong, nullable) UIVisualEffectView *blurEffectView;
@property(nonatomic, strong, nullable) UIVibrancyEffect *vibrancyEffect;
@property(nonatomic, strong, nullable) UIVisualEffectView *vibrancyEffectView;

#endif

@end

NS_ASSUME_NONNULL_END

#endif /* VibrancyViewNativeComponent_h */
