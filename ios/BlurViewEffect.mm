#import <objc/runtime.h>

#import "BlurViewEffect.h"

@interface UIBlurEffect (Protected)

@property (nonatomic, readonly) id effectSettings;

@end

@implementation BlurViewEffect

+ (instancetype)effectWithStyle:(UIBlurEffectStyle)style
{
  id instance = [super effectWithStyle:style];
  object_setClass(instance, self);

  return instance;
}

+ (instancetype)effectWithStyle:(UIBlurEffectStyle)style andRadius:(NSNumber*)radius
{
  BlurViewEffect *effect = (BlurViewEffect*)[self effectWithStyle:style];
  effect.radius = radius;
  
  return effect;
}

- (NSNumber*)blurRadius {
  return objc_getAssociatedObject(self, @selector(blurRadius));
}

- (void)setBlurRadius:(NSNumber*)blurRadius {
  objc_setAssociatedObject(self, @selector(blurRadius), blurRadius, OBJC_ASSOCIATION_RETAIN_NONATOMIC);
}

- (id)effectSettings
{
  id settings = [super effectSettings];
  NSNumber *radius = self.radius;
  if (radius) {
    [settings setValue:radius forKey:@"blurRadius"];
  }
  return settings;
}

- (id)copyWithZone:(NSZone*)zone
{
  id instance = [super copyWithZone:zone];
  object_setClass(instance, [self class]);
  objc_setAssociatedObject(instance, @selector(blurRadius), self.radius, OBJC_ASSOCIATION_RETAIN_NONATOMIC);
  
  return instance;
}

@end
