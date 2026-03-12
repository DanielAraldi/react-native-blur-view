#import <UIKit/UIKit.h>

@interface BlurUtils : NSObject

+ (NSNumber *)clipRadius:(NSNumber *)radius;
+ (UIBlurEffectStyle)blurEffectStyle:(NSString *)style;
+ (UIVibrancyEffectStyle)vibrancyEffectStyle:(NSString *)style;
+ (UIColor *)colorFromString:(NSString *)colorString;

@end
