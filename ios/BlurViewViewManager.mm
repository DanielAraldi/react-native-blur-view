#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>
#import "RCTBridge.h"

#import "BlurViewView.h"

@interface BlurViewViewManager : RCTViewManager
@end

@implementation BlurViewViewManager

RCT_EXPORT_MODULE(BlurViewView)

- (UIView *)view
{
  return [[BlurViewView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(overlayColor, NSString)
RCT_EXPORT_VIEW_PROPERTY(blurRadius, NSNumber)
RCT_EXPORT_VIEW_PROPERTY(autoUpdate, Boolean)

@end
