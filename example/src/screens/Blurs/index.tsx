import { useMemo, useRef } from 'react';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import { BlurTarget, BlurView } from '@danielsaraldi/react-native-blur-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  useAnimatedProps,
  useAnimatedRef,
  useScrollOffset,
} from 'react-native-reanimated';
import { useBlur } from '../../hooks';
import { MOUNTAIN } from '../../assets';
import { BLUR_TYPES_DATA } from '../../constants';
import { makeStyles } from './styles';

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

export function Blurs() {
  const targetRef = useRef<View | null>(null);
  const scrollTargetRef = useRef<View | null>(null);
  const { top, bottom } = useSafeAreaInsets();
  const { radius, blurType, onBlurType } = useBlur();

  const scrollViewRef = useAnimatedRef<ScrollView>();
  const scrollOffset = useScrollOffset(scrollViewRef);

  const styles = useMemo(() => makeStyles({ top, bottom }), [top, bottom]);

  const renderBlurs = useMemo(
    () =>
      BLUR_TYPES_DATA.map(({ type, label }) => {
        const color = type.includes('dark') ? 'white' : 'black';

        return (
          <TouchableOpacity
            key={type}
            style={styles.item}
            onPress={() => onBlurType(type)}
            activeOpacity={0.75}
          >
            <BlurView
              blurTarget={scrollTargetRef}
              radius={radius}
              type={type}
              style={styles.centralize}
            >
              <Text style={[styles.itemText, { color }]}>{label}</Text>
            </BlurView>
          </TouchableOpacity>
        );
      }),
    [radius, styles, onBlurType]
  );

  const animatedProps = useAnimatedProps(
    () => ({
      radius: scrollOffset.get() / 100,
    }),
    []
  );

  return (
    <>
      <AnimatedBlurView
        blurTarget={targetRef}
        type={blurType}
        animatedProps={animatedProps}
        style={styles.animatedHeader}
      />

      <BlurTarget ref={targetRef} style={[styles.expand, styles.absoluteFill]}>
        <View style={styles.expand}>
          <BlurTarget ref={scrollTargetRef} style={styles.absoluteFill}>
            <ImageBackground
              style={styles.absoluteFill}
              source={MOUNTAIN}
              resizeMode="cover"
            />
          </BlurTarget>

          <ScrollView
            ref={scrollViewRef}
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.header}>
              <Text style={styles.headerText}>Blur Types</Text>

              <Text style={styles.headerHint}>
                Blur effects are available on iOS and Android
              </Text>
            </View>

            {renderBlurs}
          </ScrollView>
        </View>
      </BlurTarget>
    </>
  );
}
