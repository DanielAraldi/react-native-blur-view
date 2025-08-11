#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>
#import "RCTBridge.h"

#import "BlurViewView.h"

@interface BlurViewManager : RCTViewManager
@end

@implementation BlurViewManager

RCT_EXPORT_MODULE(BlurViewIos);

- (UIView *)view
{
  return [[BlurViewIos alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(overlayColor, NSString);
RCT_EXPORT_VIEW_PROPERTY(radius, NSNumber);

@end
