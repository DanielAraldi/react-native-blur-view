import { useEffect, useRef } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { BlurTarget, BlurView } from '@danielsaraldi/react-native-blur-view';
import {
  createAnimatedComponent,
  useAnimatedProps,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { PUMP_FICTION } from '../../assets';
import { styles } from './styles';

const AnimatedBlurView = createAnimatedComponent(BlurView, {
  jsProps: ['radius'],
});

export function Reanimated() {
  const targetRef = useRef<View | null>(null);
  const radius = useSharedValue(1);

  const animatedProps = useAnimatedProps(() => ({
    radius: radius.get(),
  }));

  useEffect(() => {
    radius.set(() => withRepeat(withTiming(100, { duration: 2000 }), -1, true));
  }, [radius]);

  return (
    <View style={styles.container}>
      <BlurTarget ref={targetRef} style={StyleSheet.absoluteFill}>
        <View style={StyleSheet.absoluteFill}>
          <Image
            style={styles.image}
            source={PUMP_FICTION}
            resizeMode="cover"
          />
        </View>
      </BlurTarget>

      <View style={styles.content}>
        <AnimatedBlurView
          blurTarget={targetRef}
          type="light"
          style={styles.box}
          animatedProps={animatedProps}
        >
          <Text style={styles.boxText}>Reanimated</Text>
        </AnimatedBlurView>
      </View>
    </View>
  );
}
