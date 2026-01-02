#if !TARGET_OS_TV

#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>
#import "RCTBridge.h"

#import "BlurView.h"

@interface BlurViewManager : RCTViewManager
@end

@implementation BlurViewManager

RCT_EXPORT_MODULE(BlurView);

- (UIView *)view
{
  return [[BlurView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(overlayColor, NSString);
RCT_EXPORT_VIEW_PROPERTY(blurRadius, NSNumber);

@end

#endif
