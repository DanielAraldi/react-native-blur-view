#import <UIKit/UIKit.h>

@interface BlurUtils : NSObject

+ (NSNumber *)clipRadius:(NSNumber *)radius;
+ (UIBlurEffectStyle)blurEffectStyle:(NSString *)style;

#if !TARGET_OS_TV
+ (UIVibrancyEffectStyle)vibrancyEffectStyle:(NSString *)style;
#endif

@end
