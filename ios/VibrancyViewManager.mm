#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>
#import "RCTBridge.h"

#import "VibrancyView.h"

@interface VibrancyViewManager : RCTViewManager
@end

@implementation VibrancyViewManager

RCT_EXPORT_MODULE(VibrancyView);

- (UIView *)view
{
  return [[VibrancyView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(overlayColor, NSString);
RCT_EXPORT_VIEW_PROPERTY(blurRadius, NSNumber);

@end

