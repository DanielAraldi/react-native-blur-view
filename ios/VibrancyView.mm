#import "VibrancyView.h"
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

- (instancetype)init
{
  if (self = [super init]) {
    [[NSNotificationCenter defaultCenter] addObserver:self
                                          selector:@selector(reduceTransparencyStatusDidChange:)
                                          name:UIAccessibilityReduceTransparencyStatusDidChangeNotification
                                          object:nil];
  }

  return self;
}

- (instancetype)initWithFrame:(CGRect)frame
{
  if (self = [super initWithFrame:frame]) {
    static const auto defaultProps = std::make_shared<const VibrancyViewProps>();
    _props = defaultProps;

    self.clipsToBounds = YES;
    self.overlayColor = @"light";
    self.effectStyle = @"label";
    self.reducedTransparencyFallbackColor = @"white";
    self.blurRadius = @10;

    self.blurEffectView = [[UIVisualEffectView alloc] init];
    self.blurEffectView.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
    self.blurEffectView.frame = self.bounds;

    self.vibrancyEffect = [[UIVibrancyEffect alloc] init];
    self.vibrancyEffectView = [[UIVisualEffectView alloc] init];
    self.vibrancyEffectView.frame = self.blurEffectView.bounds;
    self.vibrancyEffectView.autoresizingMask = self.blurEffectView.autoresizingMask;

    self.reducedTransparencyFallbackView = [[UIView alloc] init];
    self.reducedTransparencyFallbackView.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
    self.reducedTransparencyFallbackView.frame = frame;
    self.reducedTransparencyFallbackView.userInteractionEnabled = NO;

    [self updateVibrancyEffect];
    [self updateFallbackView];

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
  
  if (oldViewProps.effectStyle != newViewProps.effectStyle) {
    NSString *effectStyle = [NSString stringWithUTF8String:newViewProps.effectStyle.c_str()];
    [self setEffectStyle:effectStyle];
  }

  if (oldViewProps.reducedTransparencyFallbackColor != newViewProps.reducedTransparencyFallbackColor) {
    NSString *reducedTransparencyFallbackColor = [NSString stringWithUTF8String:newViewProps.reducedTransparencyFallbackColor.c_str()];
    [self setReducedTransparencyFallbackColor:reducedTransparencyFallbackColor];
  }

  [super updateProps:props oldProps:oldProps];
}

- (BOOL)isReduceTransparencyEnabled
{
  return UIAccessibilityIsReduceTransparencyEnabled() == YES && self.reducedTransparencyFallbackColor != NULL;
}

- (void)attachToVisualEffectView:(UIView *)subview
{
  if ([self isReduceTransparencyEnabled]) {
    [self addSubview:subview];
  } else {
    [self.vibrancyEffectView.contentView addSubview:subview];
  }
}

- (void)updateFallbackView
{
  if ([self isReduceTransparencyEnabled]) {
    if (![self.subviews containsObject:self.reducedTransparencyFallbackView]) {
      [self insertSubview:self.reducedTransparencyFallbackView atIndex:0];
    }

    if ([self.subviews containsObject:self.blurEffectView]) {
      [self.blurEffectView removeFromSuperview];
    }
  } else {
    if ([self.subviews containsObject:self.reducedTransparencyFallbackView]) {
      [self.reducedTransparencyFallbackView removeFromSuperview];
    }

    if (![self.subviews containsObject:self.blurEffectView]) {
      [self insertSubview:self.blurEffectView atIndex:0];
    }
  }

  if ([self isReduceTransparencyEnabled]) {
    for (UIView *subview in self.blurEffectView.contentView.subviews) {
      [subview removeFromSuperview];
      [self addSubview:subview];
    }
  } else {
    for (UIView *subview in self.subviews) {
      if (subview == self.blurEffectView) continue;
      if (subview == self.reducedTransparencyFallbackView) continue;

      [subview removeFromSuperview];
      [self.blurEffectView.contentView addSubview:subview];
    }
  }
  
  self.reducedTransparencyFallbackView.backgroundColor = [BlurUtils colorFromString:self.reducedTransparencyFallbackColor];
}

- (void)updateVibrancyEffect
{
  self.blurEffectView.effect = nil;
  self.vibrancyEffectView.effect = nil;

  UIBlurEffectStyle blurEffectStyle = [BlurUtils blurEffectStyle:self.overlayColor];
  self.blurEffect = [BlurViewEffect effectWithStyle:blurEffectStyle andRadius:self.blurRadius];
  self.blurEffectView.effect = self.blurEffect;

  if (@available(iOS 13.0, *)) {
    #if TARGET_OS_TV
      self.vibrancyEffect = [UIVibrancyEffect effectForBlurEffect:self.blurEffect];
    #else
      UIVibrancyEffectStyle vibrancyEffectStyle = [BlurUtils vibrancyEffectStyle:self.effectStyle];
      self.vibrancyEffect = [UIVibrancyEffect effectForBlurEffect:self.blurEffect style:vibrancyEffectStyle];
    #endif
  } else {
    self.vibrancyEffect = [UIVibrancyEffect effectForBlurEffect:self.blurEffect];
  }

  self.vibrancyEffectView.effect = self.vibrancyEffect;
}

- (void)reduceTransparencyStatusDidChange:(__unused NSNotification *)notification
{
  [self updateFallbackView];
}

- (void)mountChildComponentView:(UIView<RCTComponentViewProtocol> *)childComponentView index:(NSInteger)index
{
  childComponentView.translatesAutoresizingMaskIntoConstraints = TRUE;

  [self attachToVisualEffectView:childComponentView];
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

  if (self.reducedTransparencyFallbackView) {
    self.reducedTransparencyFallbackView.frame = self.bounds;
  }

  if (self.blurEffectView) {
    self.blurEffectView.frame = self.bounds;
  }

  if (self.vibrancyEffectView) {
    self.vibrancyEffectView.frame = self.blurEffectView.bounds;
  }
}

- (void)dealloc
{
  [[NSNotificationCenter defaultCenter] removeObserver:self];

  if (self.reducedTransparencyFallbackView) {
    [self.reducedTransparencyFallbackView removeFromSuperview];
    self.reducedTransparencyFallbackView = nil;
  }

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

- (void)setEffectStyle:(NSString *)effectStyle
{
  if (effectStyle && ![self.effectStyle isEqual:effectStyle]) {
    _effectStyle = effectStyle;
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

- (void)setReducedTransparencyFallbackColor:(NSString *)reducedTransparencyFallbackColor
{
  if (reducedTransparencyFallbackColor && ![self.reducedTransparencyFallbackColor isEqual:reducedTransparencyFallbackColor]) {
    _reducedTransparencyFallbackColor = reducedTransparencyFallbackColor;
    [self updateFallbackView];
  }
}

@end
