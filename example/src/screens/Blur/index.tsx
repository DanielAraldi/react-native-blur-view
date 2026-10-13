import { useRef, useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { BlurTarget, BlurView } from '@danielsaraldi/react-native-blur-view';
import { Slider } from '../../components';
import { FIGHT_CLUB } from '../../assets';
import { styles } from './styles';

export function Blur() {
  const [radius, setRadius] = useState<number>(20);
  const targetRef = useRef<View | null>(null);

  return (
    <View style={styles.container}>
      <BlurTarget ref={targetRef} style={styles.absoluteFill}>
        <ImageBackground
          style={styles.absoluteFill}
          source={FIGHT_CLUB}
          resizeMode="cover"
        />
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

      <Slider value={radius} onValueChange={setRadius} />
    </View>
  );
}
