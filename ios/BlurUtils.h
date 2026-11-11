#import <UIKit/UIKit.h>

@interface BlurUtils : NSObject

+ (NSNumber *)clipRadius:(NSNumber *)radius;
+ (NSNumber *)clipOffset:(NSNumber *)offset;
+ (NSString *)progressiveDirection:(NSString *)direction;
+ (UIBlurEffectStyle)blurEffectStyle:(NSString *)style;

#if !TARGET_OS_TV
+ (UIVibrancyEffectStyle)vibrancyEffectStyle:(NSString *)style;
#endif

@end
