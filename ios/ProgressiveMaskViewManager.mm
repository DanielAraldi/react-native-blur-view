#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>
#import <React/RCTBridge.h>

#import "ProgressiveMaskView.h"

@interface ProgressiveMaskViewManager : RCTViewManager
@end

@implementation ProgressiveMaskViewManager

RCT_EXPORT_MODULE(ProgressiveMaskView);

- (UIView *)view
{
  return [[ProgressiveMaskView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(direction, NSString);
RCT_EXPORT_VIEW_PROPERTY(offset, NSNumber);

@end
