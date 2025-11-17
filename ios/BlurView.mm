#import "BlurView.h"
#import "BlurViewEffect.h"

#ifdef RCT_NEW_ARCH_ENABLED
#import <react/renderer/components/BlurViewSpec/ComponentDescriptors.h>
#import <react/renderer/components/BlurViewSpec/EventEmitters.h>
#import <react/renderer/components/BlurViewSpec/Props.h>
#import <react/renderer/components/BlurViewSpec/RCTComponentViewHelpers.h>
#import "RCTFabricComponentsPlugins.h"

using namespace facebook::react;

@interface BlurView () <RCTBlurViewViewProtocol>
@end
#else
@interface BlurView ()
@end
#endif

@implementation BlurView {
  UIView * _view;
}

#ifdef RCT_NEW_ARCH_ENABLED
+ (ComponentDescriptorProvider)componentDescriptorProvider
{
  return concreteComponentDescriptorProvider<BlurViewComponentDescriptor>();
}
#endif

- (instancetype)initWithFrame:(CGRect)frame
{
  if (self = [super initWithFrame:frame]) {
#ifdef RCT_NEW_ARCH_ENABLED
    static const auto defaultProps = std::make_shared<const BlurViewProps>();
    _props = defaultProps;
#endif

    self.clipsToBounds = YES;
    self.overlayColor = @"light";
    self.blurRadius = @10;

    self.blurEffectView = [[UIVisualEffectView alloc] init];
    self.blurEffectView.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
    self.blurEffectView.frame = self.bounds;

    [self updateBlurEffect];

    [self insertSubview:self.blurEffectView atIndex:0];
  }

  return self;
}

#ifdef RCT_NEW_ARCH_ENABLED
- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps
{
  const auto &oldViewProps = *std::static_pointer_cast<BlurViewProps const>(_props);
  const auto &newViewProps = *std::static_pointer_cast<BlurViewProps const>(props);

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
#endif

- (UIBlurEffectStyle)blurEffectStyle
{
  if ([self.overlayColor isEqualToString: @"x-light"]) return UIBlurEffectStyleExtraLight;
  else if ([self.overlayColor isEqualToString: @"light"]) return UIBlurEffectStyleLight;
  else if ([self.overlayColor isEqualToString: @"dark"]) return UIBlurEffectStyleDark;

  // Available >= iPhone 10
  #if defined(__IPHONE_OS_VERSION_MAX_ALLOWED) && __IPHONE_OS_VERSION_MAX_ALLOWED >= 100000
    if ([self.overlayColor isEqualToString: @"regular"]) return UIBlurEffectStyleRegular;
    else if ([self.overlayColor isEqualToString: @"prominent"]) return UIBlurEffectStyleProminent;
  #endif

  // Available >= iPhone 13
  #if !TARGET_OS_TV && defined(__IPHONE_OS_VERSION_MAX_ALLOWED) && __IPHONE_OS_VERSION_MAX_ALLOWED >= 130000
    if ([self.overlayColor isEqualToString: @"chrome-material"]) return UIBlurEffectStyleSystemChromeMaterial;
    else if ([self.overlayColor isEqualToString: @"material"]) return UIBlurEffectStyleSystemMaterial;
    else if ([self.overlayColor isEqualToString: @"thick-material"]) return UIBlurEffectStyleSystemThickMaterial;
    else if ([self.overlayColor isEqualToString: @"thin-material"]) return UIBlurEffectStyleSystemThinMaterial;
    else if ([self.overlayColor isEqualToString: @"ultra-thin-material"]) return UIBlurEffectStyleSystemUltraThinMaterial;
    else if ([self.overlayColor isEqualToString: @"chrome-material-dark"]) return UIBlurEffectStyleSystemChromeMaterialDark;
    else if ([self.overlayColor isEqualToString: @"material-dark"]) return UIBlurEffectStyleSystemMaterialDark;
    else if ([self.overlayColor isEqualToString: @"thick-material-dark"]) return UIBlurEffectStyleSystemThickMaterialDark;
    else if ([self.overlayColor isEqualToString: @"thin-material-dark"]) return UIBlurEffectStyleSystemThinMaterialDark;
    else if ([self.overlayColor isEqualToString: @"ultra-thin-material-dark"]) return UIBlurEffectStyleSystemUltraThinMaterialDark;
    else if ([self.overlayColor isEqualToString: @"chrome-material-light"]) return UIBlurEffectStyleSystemChromeMaterialLight;
    else if ([self.overlayColor isEqualToString: @"material-light"]) return UIBlurEffectStyleSystemMaterialLight;
    else if ([self.overlayColor isEqualToString: @"thick-material-light"]) return UIBlurEffectStyleSystemThickMaterialLight;
    else if ([self.overlayColor isEqualToString: @"thin-material-light"]) return UIBlurEffectStyleSystemThinMaterialLight;
    else if ([self.overlayColor isEqualToString: @"ultra-thin-material-light"]) return UIBlurEffectStyleSystemUltraThinMaterialLight;
  #endif

  return UIBlurEffectStyleLight;
}

- (void)updateBlurEffect
{
  self.blurEffectView.effect = nil;

  UIBlurEffectStyle blurEffectStyle = [self blurEffectStyle];
  BlurViewEffect *blurEffect = [BlurViewEffect effectWithStyle:blurEffectStyle andRadius:self.blurRadius];

  self.blurEffect = blurEffect;
  self.blurEffectView.effect = blurEffect;
}

#ifdef RCT_NEW_ARCH_ENABLED
- (void)mountChildComponentView:(UIView<RCTComponentViewProtocol> *)childComponentView index:(NSInteger)index
{
  NSInteger adjustedIndex = index + 2;
  [self insertSubview:childComponentView atIndex:adjustedIndex];
}

- (void)unmountChildComponentView:(UIView<RCTComponentViewProtocol> *)childComponentView index:(NSInteger)index
{
  [childComponentView removeFromSuperview];
}
#else
- (void)insertReactSubview:(UIView *)subview atIndex:(NSInteger)atIndex
{
  NSInteger adjustedIndex = atIndex + 1;
  [self insertSubview:subview atIndex:adjustedIndex];
}

- (void)removeReactSubview:(UIView *)subview
{
  [subview removeFromSuperview];
}
#endif

- (void)layoutSubviews
{
  [super layoutSubviews];

  if (self.blurEffectView) {
    self.blurEffectView.frame = self.bounds;
  }

  if (self.blurEffectView && self.blurEffectView.superview == self) {
    NSInteger currentIndex = [self.subviews indexOfObject:self.blurEffectView];
    if (currentIndex != 0 && currentIndex != NSNotFound) {
      [self.blurEffectView removeFromSuperview];
      [self insertSubview:self.blurEffectView atIndex:0];
    }
  }
}

- (void)dealloc
{
  if (self.blurEffectView) {
    [self.blurEffectView removeFromSuperview];
    self.blurEffectView = nil;
  }
  
  if (self.blurEffect) {
    self.blurEffect = nil;
  }
}

#ifdef RCT_NEW_ARCH_ENABLED
Class<RCTComponentViewProtocol> BlurViewCls(void)
{
  return BlurView.class;
}
#endif

- (void)setOverlayColor:(NSString *)overlayColor
{
  if (overlayColor && ![self.overlayColor isEqual:overlayColor]) {
    _overlayColor = overlayColor;
    [self updateBlurEffect];
  }
}

- (NSNumber *)clipRadius:(NSNumber *)radius
{
  if ([radius doubleValue] <= 0.0) {
    return @0.0;
  } else if ([radius doubleValue] >= 100.0) {
    return @100.0;
  }
  
  return radius;
}

- (void)setRadius:(NSNumber *)radius
{
  if (radius && ![self.blurRadius isEqualToNumber:radius]) {
    _blurRadius = [self clipRadius:radius];
    [self updateBlurEffect];
  }
}

@end
