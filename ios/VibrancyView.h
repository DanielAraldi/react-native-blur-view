#import <UIKit/UIKit.h>

#import "BlurViewView.h"

#ifndef VibrancyViewNativeComponent_h
#define VibrancyViewNativeComponent_h

NS_ASSUME_NONNULL_BEGIN

@interface VibrancyView : BlurViewView

@property(nonatomic, strong, nullable) UIVibrancyEffect *vibrancyEffect;
@property(nonatomic, strong, nullable) UIVisualEffectView *vibrancyEffectView;

@end

NS_ASSUME_NONNULL_END

#endif /* VibrancyViewNativeComponent_h */
