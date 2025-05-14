#import "BlurViewView.h"

#import <react/renderer/components/BlurViewViewSpec/ComponentDescriptors.h>
#import <react/renderer/components/BlurViewViewSpec/EventEmitters.h>
#import <react/renderer/components/BlurViewViewSpec/Props.h>
#import <react/renderer/components/BlurViewViewSpec/RCTComponentViewHelpers.h>

#import "RCTFabricComponentsPlugins.h"

using namespace facebook::react;

@interface BlurViewView () <RCTBlurViewViewViewProtocol>

@end

@implementation BlurViewView {
    UIView * _view;
}

+ (ComponentDescriptorProvider)componentDescriptorProvider
{
    return concreteComponentDescriptorProvider<BlurViewViewComponentDescriptor>();
}

- (instancetype)initWithFrame:(CGRect)frame
{
  if (self = [super initWithFrame:frame]) {
    static const auto defaultProps = std::make_shared<const BlurViewViewProps>();
    _props = defaultProps;

    _view = [[UIView alloc] init];

    self.contentView = _view;
  }

  return self;
}

- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps
{
  const auto &oldViewProps = *std::static_pointer_cast<BlurViewViewProps const>(_props);
  const auto &newViewProps = *std::static_pointer_cast<BlurViewViewProps const>(props);

  if (oldViewProps.overlayColor != newViewProps.overlayColor) {
    NSString * overlayColorToConvert = [[NSString alloc] initWithUTF8String: newViewProps.overlayColor.c_str()];
    [_view setBackgroundColor:[self hexStringToColor:overlayColorToConvert]];
  }

  [super updateProps:props oldProps:oldProps];
}

Class<RCTComponentViewProtocol> BlurViewViewCls(void)
{
  return BlurViewView.class;
}

- hexStringToColor:(NSString *)stringToConvert
{
  NSString *noHashString = [stringToConvert stringByReplacingOccurrencesOfString:@"#" withString:@""];
  NSScanner *stringScanner = [NSScanner scannerWithString:noHashString];

  unsigned hex;
  if (![stringScanner scanHexInt:&hex]) return nil;
  int r = (hex >> 16) & 0xFF;
  int g = (hex >> 8) & 0xFF;
  int b = (hex) & 0xFF;

  return [UIColor colorWithRed:r / 255.0f green:g / 255.0f blue:b / 255.0f alpha:1.0f];
}

@end
