#import "BlurView.h"
#import "BlurViewEffect.h"
#import "BlurUtils.h"

#import <react/renderer/components/BlurViewSpec/ComponentDescriptors.h>
#import <react/renderer/components/BlurViewSpec/EventEmitters.h>
#import <react/renderer/components/BlurViewSpec/Props.h>
#import <react/renderer/components/BlurViewSpec/RCTComponentViewHelpers.h>

#import "RCTFabricComponentsPlugins.h"

using namespace facebook::react;

@interface BlurView () <RCTBlurViewViewProtocol>

@end

@implementation BlurView {
  UIView * _view;
}

+ (ComponentDescriptorProvider)componentDescriptorProvider
{
  return concreteComponentDescriptorProvider<BlurViewComponentDescriptor>();
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
    static const auto defaultProps = std::make_shared<const BlurViewProps>();
    _props = defaultProps;

    self.clipsToBounds = YES;
    self.overlayColor = @"light";
    self.reducedTransparencyFallbackColor = @"white";
    self.radius = @10;

    self.blurEffectView = [[UIVisualEffectView alloc] init];
    self.blurEffectView.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
    self.blurEffectView.frame = self.bounds;

    self.reducedTransparencyFallbackView = [[UIView alloc] init];
    self.reducedTransparencyFallbackView.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
    self.reducedTransparencyFallbackView.frame = frame;
    self.reducedTransparencyFallbackView.userInteractionEnabled = NO;

    [self updateBlurEffect];
    [self updateFallbackView];

    [self addSubview:self.blurEffectView];
  }

  return self;
}

- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps
{
  const auto &oldViewProps = *std::static_pointer_cast<BlurViewProps const>(_props);
  const auto &newViewProps = *std::static_pointer_cast<BlurViewProps const>(props);

  if (oldViewProps.radius != newViewProps.radius) {
    NSNumber *radius = [NSNumber numberWithDouble:newViewProps.radius];
    [self setRadius:radius];
  }

  if (oldViewProps.overlayColor != newViewProps.overlayColor) {
    NSString *overlayColor = [NSString stringWithUTF8String:newViewProps.overlayColor.c_str()];
    [self setOverlayColor:overlayColor];
  }

  if (oldViewProps.reducedTransparencyFallbackColor != newViewProps.reducedTransparencyFallbackColor) {
    NSString *reducedTransparencyFallbackColor = [NSString stringWithUTF8String:newViewProps.reducedTransparencyFallbackColor.c_str()];
    [self setReducedTransparencyFallbackColor:reducedTransparencyFallbackColor];
  }

  [super updateProps:props oldProps:oldProps];
}

- (void)updateBlurEffect
{
  self.blurEffectView.effect = nil;

  UIBlurEffectStyle blurEffectStyle = [BlurUtils blurEffectStyle:self.overlayColor];
  BlurViewEffect *blurEffect = [BlurViewEffect effectWithStyle:blurEffectStyle andRadius:self.radius];

  self.blurEffect = blurEffect;
  self.blurEffectView.effect = blurEffect;
}

- (BOOL)isReduceTransparencyEnabled
{
  return UIAccessibilityIsReduceTransparencyEnabled() == YES && self.reducedTransparencyFallbackColor != NULL;
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

  self.reducedTransparencyFallbackView.backgroundColor = [BlurUtils colorFromString:self.reducedTransparencyFallbackColor];
}

- (void)reduceTransparencyStatusDidChange:(__unused NSNotification *)notification
{
  [self updateFallbackView];
}

- (void)mountChildComponentView:(UIView<RCTComponentViewProtocol> *)childComponentView index:(NSInteger)index
{
  [self insertSubview:childComponentView atIndex:index];
}

- (void)unmountChildComponentView:(UIView<RCTComponentViewProtocol> *)childComponentView index:(NSInteger)index
{
  [childComponentView removeFromSuperview];
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
  [[NSNotificationCenter defaultCenter] removeObserver:self];

  if (self.reducedTransparencyFallbackView) {
    [self.reducedTransparencyFallbackView removeFromSuperview];
    self.reducedTransparencyFallbackView = nil;
  }

  if (self.blurEffectView) {
    [self.blurEffectView removeFromSuperview];
    self.blurEffectView = nil;
  }

  if (self.blurEffect) {
    self.blurEffect = nil;
  }
}

Class<RCTComponentViewProtocol> BlurViewCls(void)
{
  return BlurView.class;
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
  if (radius && ![self.radius isEqualToNumber:radius]) {
    _radius = [BlurUtils clipRadius:radius];
    [self updateBlurEffect];
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
