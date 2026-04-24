import { useCallback, useMemo } from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  VibrancyView,
  type BlurType,
} from '@danielsaraldi/react-native-blur-view';
import Animated, {
  useAnimatedProps,
  useAnimatedRef,
  useScrollOffset,
} from 'react-native-reanimated';
import { useBlur } from '../../hooks';
import { PORSCHE_MOUNTAIN } from '../../assets';
import { BLUR_TYPES_DATA, EFFECT_STYLES_DATA } from '../../constants';
import { makeStyles } from './styles';

const AnimatedVibrancyView = Animated.createAnimatedComponent(VibrancyView);

export function Vibrancies() {
  const { radius, blurType, effectStyle, onBlurType, onEffectStyle } =
    useBlur();
  const { top, bottom } = useSafeAreaInsets();

  const scrollViewRef = useAnimatedRef<ScrollView>();
  const scrollOffset = useScrollOffset(scrollViewRef);

  const getTextColor = useCallback((type: BlurType) => {
    const exceptions = ['x-light', 'light', 'dark', 'regular', 'prominent'];
    const color = type.includes('dark') ? 'white' : 'black';
    return exceptions.some((exception) => exception === type) ? 'white' : color;
  }, []);

  const styles = useMemo(() => makeStyles({ top, bottom }), [top, bottom]);

  const renderVibranciesTypes = useMemo(
    () =>
      BLUR_TYPES_DATA.map(({ type, label }) => (
        <TouchableOpacity
          key={type}
          style={styles.item}
          onPress={() => onBlurType(type)}
          activeOpacity={0.75}
        >
          <VibrancyView
            radius={radius}
            type={type}
            effectStyle={effectStyle}
            style={styles.centralize}
          >
            <Text style={[styles.itemText, { color: getTextColor(type) }]}>
              {label}
            </Text>
          </VibrancyView>
        </TouchableOpacity>
      )),
    [radius, styles, effectStyle, onBlurType, getTextColor]
  );

  const renderVibranciesEffectStyles = useMemo(
    () =>
      EFFECT_STYLES_DATA.map(({ label, style }) => (
        <TouchableOpacity
          key={style}
          style={styles.item}
          onPress={() => onEffectStyle(style)}
          activeOpacity={0.75}
        >
          <VibrancyView
            radius={radius}
            type={blurType}
            effectStyle={effectStyle}
            style={styles.centralize}
          >
            <Text style={[styles.itemText, { color: getTextColor(blurType) }]}>
              {label}
            </Text>
          </VibrancyView>
        </TouchableOpacity>
      )),
    [radius, styles, blurType, effectStyle, onEffectStyle, getTextColor]
  );

  const animatedProps = useAnimatedProps(
    () => ({
      radius: scrollOffset.get() / 100,
    }),
    []
  );

  return (
    <View style={styles.expand}>
      <AnimatedVibrancyView
        type={blurType}
        animatedProps={animatedProps}
        style={styles.animatedHeader}
      />

      <ImageBackground
        style={styles.absoluteFill}
        source={PORSCHE_MOUNTAIN}
        resizeMode="cover"
      >
        <ScrollView
          ref={scrollViewRef}
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

          {renderVibranciesTypes}

          <View style={styles.header}>
            <Text style={styles.headerText}>Vibrancies Effect Styles</Text>

            <Text style={styles.headerHint}>
              Vibrancy effects styles are available on iOS 13+ only
            </Text>
          </View>

          {renderVibranciesEffectStyles}
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
