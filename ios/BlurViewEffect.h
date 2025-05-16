#import <UIKit/UIKit.h>

@interface BlurViewEffect : UIBlurEffect

@property(nonatomic, strong) NSNumber *radius;

+ (instancetype)effectWithStyle:(UIBlurEffectStyle)style andRadius:(NSNumber *)radius;

@end
