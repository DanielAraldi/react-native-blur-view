import { useRef, useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { BlurTarget, BlurView } from '@danielsaraldi/react-native-blur-view';
import { Slider } from '../../components';
import { THE_SHINING } from '../../assets';
import { styles } from './styles';

export function BorderRadius() {
  const [borderRadius, setBorderRadius] = useState<number>(16);
  const targetRef = useRef<View | null>(null);

  return (
    <View style={styles.container}>
      <BlurTarget ref={targetRef} style={styles.absoluteFill}>
        <ImageBackground
          style={styles.absoluteFill}
          source={THE_SHINING}
          resizeMode="cover"
        />
      </BlurTarget>

      <View style={styles.content}>
        <BlurView
          blurTarget={targetRef}
          radius={20}
          type="light"
          style={[styles.box, { borderRadius }]}
        >
          <Text style={styles.boxText}>Border Radius</Text>
        </BlurView>
      </View>

      <Slider
        blurTarget={targetRef}
        label="Border Radius"
        maximumValue={120}
        value={borderRadius}
        onValueChange={setBorderRadius}
      />
    </View>
  );
}
