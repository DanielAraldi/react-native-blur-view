import { useCallback, useMemo, useState } from 'react';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  VibrancyView,
  type BlurType,
} from '@danielsaraldi/react-native-blur-view';
import { useBlur } from '../../hooks';
import { EVENING } from '../../assets';
import {
  BLUR_RADIUS_DATA,
  BLUR_TYPES_DATA,
  BLUR_UI_MODES,
  EFFECT_STYLES_DATA,
} from '../../constants';
import { makeStyles } from './styles';
import { CaretLeftIcon, CaretRightIcon } from 'phosphor-react-native';

export function Vibrancies() {
  const [vibrancyIndex, setVibrancyIndex] = useState<number>(1);
  const [effectIndex, setEffectIndex] = useState<number>(1);
  const colorScheme = useColorScheme();
  const { blurType, effectStyle, radius, onBlurType, onEffectStyle, onRadius } =
    useBlur();
  const { top, bottom } = useSafeAreaInsets();

  const getTextColor = useCallback(
    (type: BlurType) => {
      const isLight = ['extra-light', 'light', 'regular', 'prominent'].some(
        (light) => light === type
      );
      if (isLight) return 'white';
      const isDark = ['extra-dark', 'dark'].some((dark) => dark === type);
      if (isDark) return 'gray';

      const isDarkMode = colorScheme === 'dark';
      const isUIMode = BLUR_UI_MODES.some((mode) => type === mode);
      const colorByType = type.includes('dark') ? 'white' : 'black';
      return isUIMode ? (isDarkMode ? 'white' : 'black') : colorByType;
    },
    [colorScheme]
  );

  const onNextVibrancy = useCallback(() => {
    const nextIndex = (vibrancyIndex + 1) % BLUR_TYPES_DATA.length;
    const type = BLUR_TYPES_DATA[nextIndex]!.type;

    onBlurType(type);
    setVibrancyIndex(nextIndex);
  }, [vibrancyIndex, onBlurType]);

  const onPreviousVibrancy = useCallback(() => {
    const length = BLUR_TYPES_DATA.length;
    const previousIndex = (vibrancyIndex - 1 + length) % length;
    const type = BLUR_TYPES_DATA[previousIndex]!.type;

    onBlurType(type);
    setVibrancyIndex(previousIndex);
  }, [vibrancyIndex, onBlurType]);

  const onNextEffect = useCallback(() => {
    const nextIndex = (effectIndex + 1) % EFFECT_STYLES_DATA.length;
    const effect = EFFECT_STYLES_DATA[nextIndex]!;

    onEffectStyle(effect.style);
    setEffectIndex(nextIndex);
  }, [effectIndex, onEffectStyle]);

  const onPreviousEffect = useCallback(() => {
    const length = EFFECT_STYLES_DATA.length;
    const previousIndex = (effectIndex - 1 + length) % length;
    const effect = EFFECT_STYLES_DATA[previousIndex]!;

    onEffectStyle(effect.style);
    setEffectIndex(previousIndex);
  }, [effectIndex, onEffectStyle]);

  const styles = useMemo(() => makeStyles({ top, bottom }), [top, bottom]);

  const renderVibrancyTypeCard = useMemo(() => {
    const blur = BLUR_TYPES_DATA[vibrancyIndex]!;
    const type = blur.type;
    const color = getTextColor(type);

    return (
      <VibrancyView
        radius={radius}
        type={type}
        effectStyle={effectStyle}
        style={styles.card}
      >
        <Pressable onPress={onPreviousVibrancy}>
          <CaretLeftIcon size={24} color={color} weight="bold" />
        </Pressable>

        <Text style={[styles.text, { color }]}>{blur.label}</Text>

        <Pressable onPress={onNextVibrancy}>
          <CaretRightIcon size={24} color={color} weight="bold" />
        </Pressable>
      </VibrancyView>
    );
  }, [
    styles,
    effectStyle,
    radius,
    vibrancyIndex,
    onPreviousVibrancy,
    onNextVibrancy,
    getTextColor,
  ]);

  const renderVibrancyEffectCard = useMemo(() => {
    const blur = EFFECT_STYLES_DATA[effectIndex]!;
    const color = getTextColor(blurType);

    return (
      <VibrancyView
        radius={radius}
        type={blurType}
        effectStyle={blur.style}
        style={styles.card}
      >
        <Pressable onPress={onPreviousEffect}>
          <CaretLeftIcon size={24} color={color} weight="bold" />
        </Pressable>

        <Text style={[styles.text, { color }]}>{blur.label}</Text>

        <Pressable onPress={onNextEffect}>
          <CaretRightIcon size={24} color={color} weight="bold" />
        </Pressable>
      </VibrancyView>
    );
  }, [
    styles,
    blurType,
    radius,
    effectIndex,
    onPreviousEffect,
    onNextEffect,
    getTextColor,
  ]);

  const renderVibrancyRadiusCard = useMemo(
    () =>
      BLUR_RADIUS_DATA.map(({ label, radius: currentBlurRadius }) => {
        const color = getTextColor(blurType);

        return (
          <Pressable
            key={currentBlurRadius}
            onPress={() => onRadius(currentBlurRadius)}
          >
            <VibrancyView
              radius={currentBlurRadius}
              type={blurType}
              style={styles.radius}
            >
              <Text style={[styles.text, { color }]}>{label}</Text>
            </VibrancyView>
          </Pressable>
        );
      }),
    [styles, blurType, getTextColor, onRadius]
  );

  return (
    <View style={styles.expand}>
      <ImageBackground
        style={styles.absoluteFill}
        source={EVENING}
        resizeMode="cover"
      >
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <Text style={styles.headerText}>Vibrancies Types</Text>

            <Text style={styles.headerHint}>
              Vibrancy effects are available on iOS only
            </Text>
          </View>

          {renderVibrancyTypeCard}

          <View style={styles.header}>
            <Text style={styles.headerText}>Vibrancies Effect Styles</Text>

            <Text style={styles.headerHint}>
              Vibrancy effects styles are available on iOS 13+ only
            </Text>
          </View>

          {renderVibrancyEffectCard}

          <View style={styles.header}>
            <Text style={styles.headerText}>Vibrancy Radius</Text>

            <Text style={styles.headerHint}>
              Adjusting the vibrancy radius will increase or decrease the
              vibrancy intensity
            </Text>
          </View>

          <ScrollView
            style={styles.horizontal}
            contentContainerStyle={styles.horizontalContent}
            showsHorizontalScrollIndicator={false}
            horizontal
          >
            {renderVibrancyRadiusCard}
          </ScrollView>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
