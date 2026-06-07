import { useCallback, useMemo, useRef, useState } from 'react';
import {
  ImageBackground,
  Text,
  View,
  useColorScheme,
  Pressable,
  ScrollView,
} from 'react-native';
import { CaretLeftIcon, CaretRightIcon } from 'phosphor-react-native';
import { BlurTarget, BlurView } from '@danielsaraldi/react-native-blur-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useBlur } from '../../hooks';
import { HOLIDAY } from '../../assets';
import {
  BLUR_RADIUS_DATA,
  BLUR_TYPES_DATA,
  BLUR_UI_MODES,
} from '../../constants';
import { makeStyles } from './styles';

export function Blurs() {
  const [index, setIndex] = useState<number>(1);
  const targetRef = useRef<View | null>(null);
  const colorScheme = useColorScheme();
  const { top, bottom } = useSafeAreaInsets();
  const { radius, onBlurType, onRadius } = useBlur();

  const onNext = useCallback(() => {
    const nextIndex = (index + 1) % BLUR_TYPES_DATA.length;
    const type = BLUR_TYPES_DATA[nextIndex]!.type;

    onBlurType(type);
    setIndex(nextIndex);
  }, [index, onBlurType]);

  const onPrevious = useCallback(() => {
    const length = BLUR_TYPES_DATA.length;
    const previousIndex = (index - 1 + length) % length;
    const type = BLUR_TYPES_DATA[previousIndex]!.type;

    onBlurType(type);
    setIndex(previousIndex);
  }, [index, onBlurType]);

  const styles = useMemo(() => makeStyles({ top, bottom }), [top, bottom]);

  const renderBlurCard = useMemo(() => {
    const blur = BLUR_TYPES_DATA[index]!;
    const type = blur.type;
    const colorByType = type.includes('dark') ? 'white' : 'black';
    const isDarkMode = colorScheme === 'dark';
    const isUIMode = BLUR_UI_MODES.some((mode) => type === mode);
    const color = isUIMode ? (isDarkMode ? 'white' : 'black') : colorByType;

    return (
      <BlurView
        blurTarget={targetRef}
        radius={radius}
        type={type}
        style={styles.card}
      >
        <Pressable onPress={onPrevious}>
          <CaretLeftIcon size={24} color={color} weight="bold" />
        </Pressable>

        <Text style={[styles.text, { color }]}>{blur.label}</Text>

        <Pressable onPress={onNext}>
          <CaretRightIcon size={24} color={color} weight="bold" />
        </Pressable>
      </BlurView>
    );
  }, [styles, colorScheme, radius, index, onPrevious, onNext]);

  const renderRadiusCard = useMemo(
    () =>
      BLUR_RADIUS_DATA.map(({ label, radius: currentBlurRadius }) => {
        const blur = BLUR_TYPES_DATA[index]!;
        const type = blur.type;
        const colorByType = type.includes('dark') ? 'white' : 'black';
        const isDarkMode = colorScheme === 'dark';
        const isUIMode = BLUR_UI_MODES.some((mode) => type === mode);
        const color = isUIMode ? (isDarkMode ? 'white' : 'black') : colorByType;

        return (
          <Pressable
            key={currentBlurRadius}
            onPress={() => onRadius(currentBlurRadius)}
          >
            <BlurView
              radius={currentBlurRadius}
              blurTarget={targetRef}
              type={type}
              style={styles.radius}
            >
              <Text style={[styles.text, { color }]}>{label}</Text>
            </BlurView>
          </Pressable>
        );
      }),
    [styles, colorScheme, index, onRadius]
  );

  return (
    <View style={[styles.expand, styles.absoluteFill]}>
      <View style={styles.expand}>
        <BlurTarget ref={targetRef} style={styles.absoluteFill}>
          <ImageBackground
            style={styles.absoluteFill}
            source={HOLIDAY}
            resizeMode="cover"
          />
        </BlurTarget>

        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Blur Types</Text>

            <Text style={styles.headerHint}>
              Blur effects are available on iOS and Android
            </Text>
          </View>

          {renderBlurCard}

          <View style={styles.header}>
            <Text style={styles.headerText}>Blur Radius</Text>

            <Text style={styles.headerHint}>
              Adjusting the blur radius will increase or decrease the blur
              intensity
            </Text>
          </View>

          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.scrollContent}
            showsHorizontalScrollIndicator={false}
            horizontal
          >
            {renderRadiusCard}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
