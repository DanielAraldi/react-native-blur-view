#import "BlurViewView.h"
#import "VibrancyView.h"

#import <react/renderer/components/BlurViewViewSpec/ComponentDescriptors.h>
#import <react/renderer/components/BlurViewViewSpec/EventEmitters.h>
#import <react/renderer/components/BlurViewViewSpec/Props.h>
#import <react/renderer/components/BlurViewViewSpec/RCTComponentViewHelpers.h>

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

- (void)mountChildComponentView:(UIView<RCTComponentViewProtocol> *)childComponentView index:(NSInteger)index
{
  [self attachToVisualEffectView:childComponentView];
}

- (void)unmountChildComponentView:(UIView<RCTComponentViewProtocol> *)childComponentView index:(NSInteger)index
{
  [childComponentView removeFromSuperview];
}

- (instancetype)initWithFrame:(CGRect)frame
{
  if (self = [super initWithFrame:frame]) {
    static const auto defaultProps = std::make_shared<const BlurViewViewProps>();
    _props = defaultProps;

    self.vibrancyEffectView = [[UIVisualEffectView alloc] init];
    self.vibrancyEffectView.frame = frame;
    [self updateVibrancyEffect];

    [self.blurEffectView.contentView addSubview:self.vibrancyEffectView];
  }

  return self;
}

Class<RCTComponentViewProtocol> VibrancyViewCls(void)
{
  return VibrancyView.class;
}

- (void)layoutSubviews
{
  [super layoutSubviews];
  self.vibrancyEffectView.frame = self.bounds;
}

- (void)insertReactSubview:(id<RCTComponentViewProtocol>)subview atIndex:(NSInteger)atIndex
{
  [self attachToVisualEffectView:(UIView *)subview];
}

- (void)attachToVisualEffectView:(UIView *)subview
{
  [self.vibrancyEffectView.contentView addSubview:subview];
}

- (void)updateBlurEffect
{
  [super updateBlurEffect];
  [self updateVibrancyEffect];
}

- (void)updateVibrancyEffect
{
  self.vibrancyEffect = [UIVibrancyEffect effectForBlurEffect:self.blurEffect];
  self.vibrancyEffectView.effect = self.vibrancyEffect;
}

- (void)updateFallbackView
{
  for (UIView *subview in self.subviews) {
    if (subview == self.blurEffectView) continue;

    [subview removeFromSuperview];
    [self.blurEffectView.contentView addSubview:subview];
  }
}

@end
