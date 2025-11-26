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

- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps
{
  const auto &oldViewProps = *std::static_pointer_cast<VibrancyViewProps const>(_props);
  const auto &newViewProps = *std::static_pointer_cast<VibrancyViewProps const>(props);

  if (oldViewProps.blurRadius != newViewProps.blurRadius) {
    NSNumber *blurRadius = [NSNumber numberWithInt:newViewProps.blurRadius];
    [super setRadius:blurRadius];
    [self updateBlurEffect];
  }

  if (oldViewProps.overlayColor != newViewProps.overlayColor) {
    NSString *overlayColor = [NSString stringWithUTF8String:newViewProps.overlayColor.c_str()];
    [super setOverlayColor:overlayColor];
    [self updateBlurEffect];
  }

  [super updateProps:props oldProps:oldProps];
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
