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

- (instancetype)initWithFrame:(CGRect)frame
{
  if (self = [super initWithFrame:frame]) {
    static const auto defaultProps = std::make_shared<const BlurViewProps>();
    _props = defaultProps;

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

- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps
{
  const auto &oldViewProps = *std::static_pointer_cast<BlurViewProps const>(_props);
  const auto &newViewProps = *std::static_pointer_cast<BlurViewProps const>(props);

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

- (void)updateBlurEffect
{
  self.blurEffectView.effect = nil;

  UIBlurEffectStyle blurEffectStyle = [BlurUtils blurEffectStyle:self.overlayColor];
  BlurViewEffect *blurEffect = [BlurViewEffect effectWithStyle:blurEffectStyle andRadius:self.blurRadius];

  self.blurEffect = blurEffect;
  self.blurEffectView.effect = blurEffect;
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
  if (radius && ![self.blurRadius isEqualToNumber:radius]) {
    _blurRadius = [BlurUtils clipRadius:radius];
    [self updateBlurEffect];
  }
}

@end
