#import <React/RCTViewComponentView.h>
#import <UIKit/UIKit.h>

#ifndef BlurViewViewNativeComponent_h
#define BlurViewViewNativeComponent_h

NS_ASSUME_NONNULL_BEGIN

@interface BlurViewView : RCTViewComponentView

@property(nonatomic, copy, nullable) NSString *overlayColor;
@property(nonatomic, copy, nullable) NSNumber *blurRadius;
@property(nonatomic, assign) Boolean autoUpdate;

@property(nonatomic, strong, nullable) UIVisualEffectView *blurEffectView;

- (void)updateBlurEffect;

@end

NS_ASSUME_NONNULL_END

#endif /* BlurViewViewNativeComponent_h */
