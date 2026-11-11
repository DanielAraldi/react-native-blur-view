import { useRef } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { BlurTarget, BlurView } from '@danielsaraldi/react-native-blur-view';
import { GestureDetector, usePanGesture } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { INTERSTELLAR } from '../../assets';
import { styles } from './styles';

export function Gesture() {
  const targetRef = useRef<View | null>(null);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGesture = usePanGesture({
    onUpdate: (event) => {
      translateX.set(event.translationX);
      translateY.set(event.translationY);
    },
    onFinalize: () => {
      translateX.set(() => withSpring(0));
      translateY.set(() => withSpring(0));
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.get() },
      { translateY: translateY.get() },
    ],
  }));

  return (
    <View style={styles.container}>
      <BlurTarget ref={targetRef} style={StyleSheet.absoluteFill}>
        <View style={StyleSheet.absoluteFill}>
          <Image
            style={styles.image}
            source={INTERSTELLAR}
            resizeMode="cover"
          />
        </View>
      </BlurTarget>

      <View style={styles.content}>
        <GestureDetector gesture={panGesture}>
          <Animated.View style={animatedStyle}>
            <BlurView
              blurTarget={targetRef}
              radius={20}
              type="light"
              style={styles.box}
            >
              <Text style={styles.boxText}>Drag me</Text>
            </BlurView>
          </Animated.View>
        </GestureDetector>
      </View>
    </View>
  );
}
