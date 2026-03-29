import { Platform } from 'react-native';

export const isIos = Platform.OS === 'ios';

export const isAndroid = Platform.OS === 'android';

export const isAndroidSDK31OrLower =
  isAndroid && Number.parseInt(Platform.Version.toString(), 10) <= 31;
