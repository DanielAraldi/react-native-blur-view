#import "BlurUtils.h"

@implementation BlurUtils

+ (UIBlurEffectStyle)blurEffectStyle:(NSString *)style
{
  if ([style isEqualToString: @"x-light"]) return UIBlurEffectStyleExtraLight;
  else if ([style isEqualToString: @"light"]) return UIBlurEffectStyleLight;
  else if ([style isEqualToString: @"dark"]) return UIBlurEffectStyleDark;

  if (@available(iOS 10.0, *)) {
    if ([style isEqualToString: @"regular"]) return UIBlurEffectStyleRegular;
    else if ([style isEqualToString: @"prominent"]) return UIBlurEffectStyleProminent;
  }

  #if !TARGET_OS_TV
    if (@available(iOS 13.0, *)) {
      if ([style isEqualToString: @"chrome-material"]) return UIBlurEffectStyleSystemChromeMaterial;
      else if ([style isEqualToString: @"material"]) return UIBlurEffectStyleSystemMaterial;
      else if ([style isEqualToString: @"thick-material"]) return UIBlurEffectStyleSystemThickMaterial;
      else if ([style isEqualToString: @"thin-material"]) return UIBlurEffectStyleSystemThinMaterial;
      else if ([style isEqualToString: @"ultra-thin-material"]) return UIBlurEffectStyleSystemUltraThinMaterial;
      else if ([style isEqualToString: @"chrome-material-dark"]) return UIBlurEffectStyleSystemChromeMaterialDark;
      else if ([style isEqualToString: @"material-dark"]) return UIBlurEffectStyleSystemMaterialDark;
      else if ([style isEqualToString: @"thick-material-dark"]) return UIBlurEffectStyleSystemThickMaterialDark;
      else if ([style isEqualToString: @"thin-material-dark"]) return UIBlurEffectStyleSystemThinMaterialDark;
      else if ([style isEqualToString: @"ultra-thin-material-dark"]) return UIBlurEffectStyleSystemUltraThinMaterialDark;
      else if ([style isEqualToString: @"chrome-material-light"]) return UIBlurEffectStyleSystemChromeMaterialLight;
      else if ([style isEqualToString: @"material-light"]) return UIBlurEffectStyleSystemMaterialLight;
      else if ([style isEqualToString: @"thick-material-light"]) return UIBlurEffectStyleSystemThickMaterialLight;
      else if ([style isEqualToString: @"thin-material-light"]) return UIBlurEffectStyleSystemThinMaterialLight;
      else if ([style isEqualToString: @"ultra-thin-material-light"]) return UIBlurEffectStyleSystemUltraThinMaterialLight;
    }
  #endif

  return UIBlurEffectStyleLight;
}

+ (UIVibrancyEffectStyle)vibrancyEffectStyle:(NSString *)style
{
  if ([style isEqualToString: @"label"]) return UIVibrancyEffectStyleLabel;
  else if ([style isEqualToString: @"secondary-label"]) return UIVibrancyEffectStyleSecondaryLabel;
  else if ([style isEqualToString: @"tertiary-label"]) return UIVibrancyEffectStyleTertiaryLabel;
  else if ([style isEqualToString: @"quaternary-label"]) return UIVibrancyEffectStyleQuaternaryLabel;
  else if ([style isEqualToString: @"fill"]) return UIVibrancyEffectStyleFill;
  else if ([style isEqualToString: @"secondary-fill"]) return UIVibrancyEffectStyleSecondaryFill;
  else if ([style isEqualToString: @"tertiary-fill"]) return UIVibrancyEffectStyleTertiaryFill;
  else if ([style isEqualToString: @"separator"]) return UIVibrancyEffectStyleSeparator;
  else return UIVibrancyEffectStyleLabel;
}

+ (NSNumber *)clipRadius:(NSNumber *)radius
{
  if (radius == nil) {
    return @0.0;
  }

  return @(MAX(0.0, MIN(100.0, radius.doubleValue)));
}

@end
