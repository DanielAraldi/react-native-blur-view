#import "VibrancyView.h"
#import "BlurViewEffect.h"

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
    self.vibrancyEffectView = [[UIVisualEffectView alloc] init];
    self.vibrancyEffectView.frame = frame;
    self.vibrancyEffectView.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;

    self.clipsToBounds = YES;
    
    [self updateVibrancyEffect];
    
    if (self.blurEffectView && self.blurEffectView.contentView) {
      [self.blurEffectView.contentView addSubview:self.vibrancyEffectView];
    } else {
      [self addSubview:self.vibrancyEffectView];
    }
  }

  return self;
}

- (void)updateBlurEffect
{
  [super updateBlurEffect];
  [self updateVibrancyEffect];
}

- (void)updateVibrancyEffect
{
  if (self.blurEffect) {
    self.vibrancyEffect = [UIVibrancyEffect effectForBlurEffect:self.blurEffect];
    self.vibrancyEffectView.effect = self.vibrancyEffect;
  }
}

- (void)mountChildComponentView:(UIView<RCTComponentViewProtocol> *)childComponentView index:(NSInteger)index
{
  [self.vibrancyEffectView.contentView addSubview:childComponentView];
}

- (void)unmountChildComponentView:(UIView<RCTComponentViewProtocol> *)childComponentView index:(NSInteger)index
{
  [childComponentView removeFromSuperview];
}

- (void)layoutSubviews
{
  [super layoutSubviews];
  self.vibrancyEffectView.frame = self.bounds;
}

Class<RCTComponentViewProtocol> VibrancyViewCls(void)
{
  return VibrancyView.class;
}

@end
