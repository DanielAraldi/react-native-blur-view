#import <React/RCTViewComponentView.h>
#import <UIKit/UIKit.h>

#import "BlurViewEffect.h"

#ifndef BlurViewViewNativeComponent_h
#define BlurViewViewNativeComponent_h

NS_ASSUME_NONNULL_BEGIN

@interface BlurViewIos : RCTViewComponentView

@property(nonatomic, copy, nullable) NSString *overlayColor;
@property(nonatomic, copy, nullable) NSNumber *blurRadius;

@property(nonatomic, strong, nullable) BlurViewEffect *blurEffect;
@property(nonatomic, strong, nullable) UIVisualEffectView *blurEffectView;

- (void)updateBlurEffect;

@end

NS_ASSUME_NONNULL_END

#endif /* BlurViewViewNativeComponent_h */
