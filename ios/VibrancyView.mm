#import <React/RCTViewComponentView.h>
#import "VibrancyView.h"

#if !TARGET_OS_TV

#import "BlurViewEffect.h"
#import "BlurUtils.h"

#import <react/renderer/components/BlurViewSpec/ComponentDescriptors.h>
#import <react/renderer/components/BlurViewSpec/EventEmitters.h>
#import <react/renderer/components/BlurViewSpec/Props.h>
#import <react/renderer/components/BlurViewSpec/RCTComponentViewHelpers.h>

#import "RCTFabricComponentsPlugins.h"

using namespace facebook::react;

@interface VibrancyView () <RCTVibrancyViewViewProtocol>

@end

@implementation VibrancyView {
  UIView * _view;
}

+ (ComponentDescriptorProvider)componentDescriptorProvider
{
  return concreteComponentDescriptorProvider<VibrancyViewComponentDescriptor>();
}

- (instancetype)initWithFrame:(CGRect)frame
{
  if (self = [super initWithFrame:frame]) {
    static const auto defaultProps = std::make_shared<const VibrancyViewProps>();
    _props = defaultProps;

    self.clipsToBounds = YES;
    self.overlayColor = @"light";
    self.blurRadius = @10;

    self.blurEffectView = [[UIVisualEffectView alloc] init];
    self.blurEffectView.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
    self.blurEffectView.frame = self.bounds;

    self.vibrancyEffect = [[UIVibrancyEffect alloc] init];
    self.vibrancyEffectView = [[UIVisualEffectView alloc] init];
    self.vibrancyEffectView.frame = self.blurEffectView.bounds;
    self.vibrancyEffectView.autoresizingMask = self.blurEffectView.autoresizingMask;

    [self updateVibrancyEffect];

    [self.blurEffectView.contentView addSubview:self.vibrancyEffectView];
    [self addSubview:self.blurEffectView];
  }

  return self;
}

- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps
{
  const auto &oldViewProps = *std::static_pointer_cast<VibrancyViewProps const>(_props);
  const auto &newViewProps = *std::static_pointer_cast<VibrancyViewProps const>(props);

  if (oldViewProps.blurRadius != newViewProps.blurRadius) {
    NSNumber *blurRadius = [NSNumber numberWithDouble:newViewProps.blurRadius];
    [self setRadius:blurRadius];
  }

  if (oldViewProps.overlayColor != newViewProps.overlayColor) {
    NSString *overlayColor = [NSString stringWithUTF8String:newViewProps.overlayColor.c_str()];
    [self setOverlayColor:overlayColor];
  }

  [super updateProps:props oldProps:oldProps];
}

- (void)updateVibrancyEffect
{
  self.blurEffectView.effect = nil;
  self.vibrancyEffectView.effect = nil;

  UIBlurEffectStyle blurEffectStyle = [BlurUtils blurEffectStyle:self.overlayColor];
  self.blurEffect = [BlurViewEffect effectWithStyle:blurEffectStyle andRadius:self.blurRadius];
  self.blurEffectView.effect = self.blurEffect;

  if (@available(iOS 13.0, *)) {
    self.vibrancyEffect = [UIVibrancyEffect effectForBlurEffect:self.blurEffect style:UIVibrancyEffectStyleLabel];
  } else {
    self.vibrancyEffect = [UIVibrancyEffect effectForBlurEffect:self.blurEffect];
  }

  self.vibrancyEffectView.effect = self.vibrancyEffect;
}

- (void)mountChildComponentView:(UIView<RCTComponentViewProtocol> *)childComponentView index:(NSInteger)index
{
  childComponentView.translatesAutoresizingMaskIntoConstraints = TRUE;

  [self.vibrancyEffectView.contentView addSubview:childComponentView];
}

- (void)unmountChildComponentView:(UIView<RCTComponentViewProtocol> *)childComponentView index:(NSInteger)index
{
  [childComponentView removeFromSuperview];
}

- (void)insertReactSubview:(UIView *)subview atIndex:(NSInteger)atIndex
{
  [self.vibrancyEffectView.contentView insertSubview:subview atIndex:atIndex];
}

- (void)removeReactSubview:(UIView *)subview
{
  [subview removeFromSuperview];
}

- (void)layoutSubviews
{
  [super layoutSubviews];

  if (self.blurEffectView) {
    self.blurEffectView.frame = self.bounds;
  }

  if (self.vibrancyEffectView) {
    self.vibrancyEffectView.frame = self.blurEffectView.bounds;
  }
}

- (void)dealloc
{
  if (self.vibrancyEffectView) {
    [self.vibrancyEffectView removeFromSuperview];
    self.vibrancyEffectView = nil;
  }

  if (self.blurEffectView) {
    [self.blurEffectView removeFromSuperview];
    self.blurEffectView = nil;
  }

  if (self.vibrancyEffect) {
    self.vibrancyEffect = nil;
  }

  if (self.blurEffect) {
    self.blurEffect = nil;
  }
}

Class<RCTComponentViewProtocol> VibrancyViewCls(void)
{
  return VibrancyView.class;
}

- (void)setOverlayColor:(NSString *)overlayColor
{
  if (overlayColor && ![self.overlayColor isEqual:overlayColor]) {
    _overlayColor = overlayColor;
    [self updateVibrancyEffect];
  }
}

- (void)setRadius:(NSNumber *)radius
{
  if (radius && ![self.blurRadius isEqualToNumber:radius]) {
    _blurRadius = [BlurUtils clipRadius:radius];
    [self updateVibrancyEffect];
  }
}

@end

#else

// Minimal stub implementation for tvOS
// This prevents crashes but doesn't provide any vibrancy effect
@implementation VibrancyView

- (instancetype)initWithFrame:(CGRect)frame
{
  if (self = [super initWithFrame:frame]) {
  }
  return self;
}

@end

Class<RCTComponentViewProtocol> VibrancyViewCls(void)
{
  return VibrancyView.class;
}

#endif
