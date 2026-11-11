#import <React/RCTViewComponentView.h>
#import "ProgressiveMaskView.h"

#import "BlurUtils.h"

#import <react/RCTConversions.h>
#import <react/renderer/components/BlurViewSpec/ComponentDescriptors.h>
#import <react/renderer/components/BlurViewSpec/EventEmitters.h>
#import <react/renderer/components/BlurViewSpec/Props.h>
#import <react/renderer/components/BlurViewSpec/RCTComponentViewHelpers.h>

#import "RCTFabricComponentsPlugins.h"

using namespace facebook::react;

// Number of gradient stops used to approximate an eased falloff. A plain
// two-stop linear gradient produces a visible hard edge where it ends.
static const NSInteger kProgressiveMaskSteps = 16;

@interface ProgressiveMaskView () <RCTProgressiveMaskViewViewProtocol>

@property(nonatomic, strong) UIView *contentView;
@property(nonatomic, strong) CAGradientLayer *gradientLayer;

@end

@implementation ProgressiveMaskView

+ (ComponentDescriptorProvider)componentDescriptorProvider
{
  return concreteComponentDescriptorProvider<ProgressiveMaskViewComponentDescriptor>();
}

- (instancetype)initWithFrame:(CGRect)frame
{
  if (self = [super initWithFrame:frame]) {
    static const auto defaultProps = std::make_shared<const ProgressiveMaskViewProps>();
    _props = defaultProps;

    self.direction = @"top";
    self.offset = @1.0;

    self.contentView = [[UIView alloc] initWithFrame:self.bounds];
    self.contentView.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
    self.contentView.backgroundColor = [UIColor clearColor];

    self.gradientLayer = [CAGradientLayer layer];
    self.gradientLayer.frame = self.contentView.bounds;
    self.contentView.layer.mask = self.gradientLayer;

    [self addSubview:self.contentView];

    [self updateGradient];
  }

  return self;
}

- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps
{
  const auto &oldViewProps = *std::static_pointer_cast<ProgressiveMaskViewProps const>(_props);
  const auto &newViewProps = *std::static_pointer_cast<ProgressiveMaskViewProps const>(props);

  if (oldViewProps.direction != newViewProps.direction) {
    NSString *direction = [NSString stringWithUTF8String:newViewProps.direction.c_str()];
    [self setDirection:direction];
  }

  if (oldViewProps.offset != newViewProps.offset) {
    NSNumber *offset = [NSNumber numberWithDouble:newViewProps.offset];
    [self setOffset:offset];
  }

  [super updateProps:props oldProps:oldProps];
}

- (void)updateGradient
{
  CGPoint startPoint = CGPointMake(0.5, 0.0);
  CGPoint endPoint = CGPointMake(0.5, 1.0);

  if ([self.direction isEqualToString:@"bottom"]) {
    startPoint = CGPointMake(0.5, 1.0);
    endPoint = CGPointMake(0.5, 0.0);
  } else if ([self.direction isEqualToString:@"left"]) {
    startPoint = CGPointMake(0.0, 0.5);
    endPoint = CGPointMake(1.0, 0.5);
  } else if ([self.direction isEqualToString:@"right"]) {
    startPoint = CGPointMake(1.0, 0.5);
    endPoint = CGPointMake(0.0, 0.5);
  }

  CGFloat offset = self.offset.doubleValue;
  NSMutableArray *colors = [NSMutableArray array];
  NSMutableArray<NSNumber *> *locations = [NSMutableArray array];

  if (offset <= 0.0) {
    CGColorRef clear = [UIColor clearColor].CGColor;
    [colors addObjectsFromArray:@[(__bridge id)clear, (__bridge id)clear]];
    [locations addObjectsFromArray:@[@0.0, @1.0]];
  } else {
    for (NSInteger step = 0; step <= kProgressiveMaskSteps; step++) {
      CGFloat progress = (CGFloat)step / (CGFloat)kProgressiveMaskSteps;
      CGFloat eased = progress * progress * (3.0 - 2.0 * progress);
      CGFloat alpha = 1.0 - eased;

      [colors addObject:(__bridge id)[UIColor colorWithWhite:0.0 alpha:alpha].CGColor];
      [locations addObject:@(progress * offset)];
    }

    if (offset < 1.0) {
      [colors addObject:(__bridge id)[UIColor clearColor].CGColor];
      [locations addObject:@1.0];
    }
  }

  [CATransaction begin];
  [CATransaction setDisableActions:YES];
  self.gradientLayer.startPoint = startPoint;
  self.gradientLayer.endPoint = endPoint;
  self.gradientLayer.colors = colors;
  self.gradientLayer.locations = locations;
  [CATransaction commit];
}

- (void)mountChildComponentView:(UIView<RCTComponentViewProtocol> *)childComponentView index:(NSInteger)index
{
  [self.contentView insertSubview:childComponentView atIndex:index];
}

- (void)unmountChildComponentView:(UIView<RCTComponentViewProtocol> *)childComponentView index:(NSInteger)index
{
  [childComponentView removeFromSuperview];
}

- (void)layoutSubviews
{
  [super layoutSubviews];

  self.contentView.frame = self.bounds;

  // The mask layer is not part of the layer tree, so it is not resized
  // automatically. Disable implicit animations to keep it in sync.
  [CATransaction begin];
  [CATransaction setDisableActions:YES];
  self.gradientLayer.frame = self.contentView.bounds;
  [CATransaction commit];
}

- (void)dealloc
{
  if (self.contentView) {
    self.contentView.layer.mask = nil;
    [self.contentView removeFromSuperview];
    self.contentView = nil;
  }

  self.gradientLayer = nil;
}

Class<RCTComponentViewProtocol> ProgressiveMaskViewCls(void)
{
  return ProgressiveMaskView.class;
}

- (void)setDirection:(NSString *)direction
{
  NSString *normalized = [BlurUtils progressiveDirection:direction];
  if (![self.direction isEqualToString:normalized]) {
    _direction = normalized;
    [self updateGradient];
  }
}

- (void)setOffset:(NSNumber *)offset
{
  NSNumber *clipped = [BlurUtils clipOffset:offset];
  if (![self.offset isEqualToNumber:clipped]) {
    _offset = clipped;
    [self updateGradient];
  }
}

@end
