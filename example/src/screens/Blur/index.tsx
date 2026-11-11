import { useRef, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { BlurTarget, BlurView } from '@danielsaraldi/react-native-blur-view';
import { Slider } from '../../components';
import { FIGHT_CLUB } from '../../assets';
import { styles } from './styles';

export function Blur() {
  const [radius, setRadius] = useState<number>(20);
  const targetRef = useRef<View | null>(null);

  return (
    <View style={styles.container}>
      <BlurTarget ref={targetRef} style={StyleSheet.absoluteFill}>
        <View style={StyleSheet.absoluteFill}>
          <Image style={styles.image} source={FIGHT_CLUB} resizeMode="cover" />
        </View>
      </BlurTarget>

      <View style={styles.content}>
        <BlurView
          blurTarget={targetRef}
          radius={radius}
          type="light"
          style={styles.box}
        >
          <Text style={styles.boxText}>Blur</Text>
        </BlurView>
      </View>

      <Slider blurTarget={targetRef} value={radius} onValueChange={setRadius} />
    </View>
  );
}
