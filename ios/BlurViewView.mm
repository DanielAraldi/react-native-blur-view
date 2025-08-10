#import "BlurViewView.h"
#import "BlurViewEffect.h"

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

    self.clipsToBounds = YES;
    self.overlayColor = @"light";
    self.blurRadius = @10;

    self.blurEffectView = [[UIVisualEffectView alloc] init];
    self.blurEffectView.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
    self.blurEffectView.frame = frame;

    [self updateBlurEffect];

    [self addSubview:self.blurEffectView];
  }

  return self;
}

- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps
{
  const auto &oldViewProps = *std::static_pointer_cast<BlurViewViewProps const>(_props);
  const auto &newViewProps = *std::static_pointer_cast<BlurViewViewProps const>(props);

  if (oldViewProps.blurRadius != newViewProps.blurRadius) {
    NSNumber *blurRadius = [NSNumber numberWithInt:newViewProps.blurRadius];
    [self setRadius:blurRadius];
  }

  if (oldViewProps.overlayColor != newViewProps.overlayColor) {
    NSString *overlayColor = [NSString stringWithUTF8String:newViewProps.overlayColor.c_str()];
    [self setOverlayColor:overlayColor];
  }

  [super updateProps:props oldProps:oldProps];
}

Class<RCTComponentViewProtocol> BlurViewViewCls(void)
{
  return BlurViewView.class;
}

- (UIBlurEffectStyle)blurEffectStyle
{
  if ([self.overlayColor isEqual: @"xlight"]) return UIBlurEffectStyleExtraLight;
  if ([self.overlayColor isEqual: @"light"]) return UIBlurEffectStyleLight;
  if ([self.overlayColor isEqual: @"dark"]) return UIBlurEffectStyleDark;

  // Available >= iPhone 10
  #if defined(__IPHONE_OS_VERSION_MAX_ALLOWED) && __IPHONE_OS_VERSION_MAX_ALLOWED >= 100000
    if ([self.overlayColor isEqual: @"regular"]) return UIBlurEffectStyleRegular;
    if ([self.overlayColor isEqual: @"prominent"]) return UIBlurEffectStyleProminent;
  #endif

  // Available >= iPhone 13
  #if !TARGET_OS_TV && defined(__IPHONE_OS_VERSION_MAX_ALLOWED) && __IPHONE_OS_VERSION_MAX_ALLOWED >= 130000
    if ([self.overlayColor isEqual: @"chromeMaterial"]) return UIBlurEffectStyleSystemChromeMaterial;
    if ([self.overlayColor isEqual: @"material"]) return UIBlurEffectStyleSystemMaterial;
    if ([self.overlayColor isEqual: @"thickMaterial"]) return UIBlurEffectStyleSystemThickMaterial;
    if ([self.overlayColor isEqual: @"thinMaterial"]) return UIBlurEffectStyleSystemThinMaterial;
    if ([self.overlayColor isEqual: @"ultraThinMaterial"]) return UIBlurEffectStyleSystemUltraThinMaterial;
    if ([self.overlayColor isEqual: @"chromeMaterialDark"]) return UIBlurEffectStyleSystemChromeMaterialDark;
    if ([self.overlayColor isEqual: @"materialDark"]) return UIBlurEffectStyleSystemMaterialDark;
    if ([self.overlayColor isEqual: @"thickMaterialDark"]) return UIBlurEffectStyleSystemThickMaterialDark;
    if ([self.overlayColor isEqual: @"thinMaterialDark"]) return UIBlurEffectStyleSystemThinMaterialDark;
    if ([self.overlayColor isEqual: @"ultraThinMaterialDark"]) return UIBlurEffectStyleSystemUltraThinMaterialDark;
    if ([self.overlayColor isEqual: @"chromeMaterialLight"]) return UIBlurEffectStyleSystemChromeMaterialLight;
    if ([self.overlayColor isEqual: @"materialLight"]) return UIBlurEffectStyleSystemMaterialLight;
    if ([self.overlayColor isEqual: @"thickMaterialLight"]) return UIBlurEffectStyleSystemThickMaterialLight;
    if ([self.overlayColor isEqual: @"thinMaterialLight"]) return UIBlurEffectStyleSystemThinMaterialLight;
    if ([self.overlayColor isEqual: @"ultraThinMaterialLight"]) return UIBlurEffectStyleSystemUltraThinMaterialLight;
  #endif

  return UIBlurEffectStyleDark;
}

- (void)updateBlurEffect
{
  self.blurEffectView.effect = nil;

  UIBlurEffectStyle blurEffectStyle = [self blurEffectStyle];
  BlurViewEffect *blurEffect = [BlurViewEffect effectWithStyle:blurEffectStyle andRadius:self.blurRadius];

  self.blurEffect = blurEffect;
  self.blurEffectView.effect = blurEffect;
}

- (void)layoutSubviews
{
  [super layoutSubviews];
  self.blurEffectView.frame = self.bounds;
}

- (void)setOverlayColor:(NSString *)overlayColor
{
  if (overlayColor && ![self.overlayColor isEqual:overlayColor]) {
    _overlayColor = overlayColor;
    [self updateBlurEffect];
  }
}

- (void)setRadius:(NSNumber *)radius
{
  if (radius && ![self.blurRadius isEqualToNumber:radius]) {
    _blurRadius = radius;
    [self updateBlurEffect];
  }
}

@end
