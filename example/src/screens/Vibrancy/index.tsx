import { useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { VibrancyView } from '@danielsaraldi/react-native-blur-view';
import { Slider } from '../../components';
import { KILL_BILL } from '../../assets';
import { styles } from './styles';

export function Vibrancy() {
  const [radius, setRadius] = useState<number>(20);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.absoluteFill}
        source={KILL_BILL}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <VibrancyView
          radius={radius}
          type="light"
          effectStyle="label"
          style={styles.box}
        >
          <Text style={styles.boxText}>Vibrancy</Text>
        </VibrancyView>
      </View>

      <Slider value={radius} onValueChange={setRadius} />
    </View>
  );
}
