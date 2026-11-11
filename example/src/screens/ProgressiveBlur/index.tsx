import { useRef, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {
  BlurTarget,
  ProgressiveBlurView,
  type Direction,
} from '@danielsaraldi/react-native-blur-view';
import { DirectionPicker, Slider } from '../../components';
import { BREAKING_BAD } from '../../assets';
import { styles } from './styles';

export function ProgressiveBlur() {
  const [direction, setDirection] = useState<Direction>('top');
  const [offset, setOffset] = useState<number>(60);
  const targetRef = useRef<View | null>(null);

  return (
    <View style={styles.container}>
      <BlurTarget ref={targetRef} style={StyleSheet.absoluteFill}>
        <View style={StyleSheet.absoluteFill}>
          <Image
            style={styles.image}
            source={BREAKING_BAD}
            resizeMode="cover"
          />
        </View>
      </BlurTarget>

      <ProgressiveBlurView
        blurTarget={targetRef}
        direction={direction}
        offset={offset / 100}
        radius={50}
        type="regular"
        style={StyleSheet.absoluteFill}
        pointerEvents="none"
      >
        <View style={styles.content}>
          <DirectionPicker
            blurTarget={targetRef}
            value={direction}
            onValueChange={setDirection}
          />

          <Text style={styles.text}>Progressive Blur</Text>
        </View>
      </ProgressiveBlurView>

      <Slider
        blurTarget={targetRef}
        label="Offset"
        value={offset}
        suffix="%"
        onValueChange={setOffset}
      />
    </View>
  );
}
