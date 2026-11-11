#import <React/RCTViewComponentView.h>
#import <UIKit/UIKit.h>

#ifndef ProgressiveMaskViewNativeComponent_h
#define ProgressiveMaskViewNativeComponent_h

NS_ASSUME_NONNULL_BEGIN

@interface ProgressiveMaskView : RCTViewComponentView

@property(nonatomic, copy, nullable) NSString *direction;
@property(nonatomic, copy, nullable) NSNumber *offset;

@end

NS_ASSUME_NONNULL_END

#endif /* ProgressiveMaskViewNativeComponent_h */
