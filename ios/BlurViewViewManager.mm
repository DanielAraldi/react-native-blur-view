#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>
#import "RCTBridge.h"

@interface BlurViewViewManager : RCTViewManager
@end

@implementation BlurViewViewManager

RCT_EXPORT_MODULE(BlurViewView)

- (UIView *)view
{
  return [[UIView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(color, NSString)

@end
