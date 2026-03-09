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
  else return UIVibrancyEffectStyleLabel;
}

+ (NSNumber *)clipRadius:(NSNumber *)radius
{
  if (radius == nil) {
    return @0.0;
  }

  if ([radius doubleValue] <= 0.0) {
    return @0.0;
  } else if ([radius doubleValue] >= 100.0) {
    return @100.0;
  }

  return radius;
}

+ (UIColor *)colorFromString:(NSString *)colorString {
  if (!colorString || [colorString isEqualToString:@""] || colorString.length == 0) {
    return [UIColor clearColor];
  }

  if (colorString.length > 50) {
    return [UIColor clearColor];
  }

  NSDictionary *colorMap = @{
    @"black": [UIColor blackColor],
    @"blue": [UIColor blueColor],
    @"brown": [UIColor brownColor],
    @"clear": [UIColor clearColor],
    @"cyan": [UIColor cyanColor],
    @"magenta": [UIColor magentaColor],
    @"gray": [UIColor grayColor],
    @"green": [UIColor greenColor],
    @"orange": [UIColor orangeColor],
    @"purple": [UIColor purpleColor],
    @"red": [UIColor redColor],
    @"transparent": [UIColor clearColor],
    @"white": [UIColor whiteColor],
    @"yellow": [UIColor yellowColor],
  };

  UIColor *namedColor = colorMap[colorString.lowercaseString];
  if (namedColor) {
    return namedColor;
  }

  NSString *hexString = colorString;
  if ([hexString hasPrefix:@"#"]) {
    if (hexString.length < 2) {
      return [UIColor clearColor];
    }
    hexString = [hexString substringFromIndex:1];
  }

  NSCharacterSet *hexCharacterSet = [NSCharacterSet characterSetWithCharactersInString:@"0123456789ABCDEFabcdef"];
  NSCharacterSet *invalidCharacters = [hexCharacterSet invertedSet];
  if ([hexString rangeOfCharacterFromSet:invalidCharacters].location != NSNotFound) {
    return [UIColor clearColor];
  }

  if (hexString.length == 6) {
    unsigned int hexValue;
    NSScanner *scanner = [NSScanner scannerWithString:hexString];
    if ([scanner scanHexInt:&hexValue] && [scanner isAtEnd]) {
      return [UIColor colorWithRed:((hexValue & 0xFF0000) >> 16) / 255.0 green:((hexValue & 0x00FF00) >> 8) / 255.0 blue:(hexValue & 0x0000FF) / 255.0 alpha:1.0];
    }
  } else if (hexString.length == 8) {
    unsigned long long hexValue;
    NSScanner *scanner = [NSScanner scannerWithString:hexString];
    if ([scanner scanHexLongLong:&hexValue] && [scanner isAtEnd]) {
      return [UIColor colorWithRed:((hexValue & 0xFF000000) >> 24) / 255.0 green:((hexValue & 0x00FF0000) >> 16) / 255.0 blue:((hexValue & 0x0000FF00) >> 8) / 255.0 alpha:(hexValue & 0x000000FF) / 255.0];
    }
  } else if (hexString.length == 4) {
    unsigned int hexValue;
    NSScanner *scanner = [NSScanner scannerWithString:hexString];
    if ([scanner scanHexInt:&hexValue] && [scanner isAtEnd]) {
      // Expand 4-digit hex to 8-digit (e.g., "FFF0" -> "FFFFFFFF00")
      unsigned int r = (hexValue & 0xF000) >> 12;
      unsigned int g = (hexValue & 0x0F00) >> 8;
      unsigned int b = (hexValue & 0x00F0) >> 4;
      unsigned int a = (hexValue & 0x000F);

      return [UIColor colorWithRed:(r | (r << 4)) / 255.0 green:(g | (g << 4)) / 255.0 blue:(b | (b << 4)) / 255.0 alpha:(a | (a << 4)) / 255.0];
    }
  } else if (hexString.length == 3) {
    unsigned int hexValue;
    NSScanner *scanner = [NSScanner scannerWithString:hexString];
    if ([scanner scanHexInt:&hexValue] && [scanner isAtEnd]) {
      // Expand 3-digit hex to 6-digit (e.g., "F0A" -> "FF00AA")
      unsigned int r = (hexValue & 0xF00) >> 8;
      unsigned int g = (hexValue & 0x0F0) >> 4;
      unsigned int b = (hexValue & 0x00F);

      return [UIColor colorWithRed:(r | (r << 4)) / 255.0 green:(g | (g << 4)) / 255.0 blue:(b | (b << 4)) / 255.0 alpha:1.0];
    }
  }

  return [UIColor clearColor];
}

@end
