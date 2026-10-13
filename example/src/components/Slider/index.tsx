import { Text, useColorScheme } from 'react-native';
import { BlurView } from '@danielsaraldi/react-native-blur-view';
import RNSlider from '@react-native-community/slider';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';
import type { SliderProps } from '../../@types';

export function Slider(props: SliderProps) {
  const { value, onValueChange } = props;

  const { bottom } = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <BlurView
      type="material"
      radius={50}
      style={[styles.container, { paddingBottom: bottom + 20 }]}
    >
      <Text style={[styles.label, isDark && styles.labelDark]}>
        Radius: {value}
      </Text>

      <RNSlider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        value={value}
        onValueChange={(sliderValue) => {
          onValueChange(Math.round(sliderValue));
        }}
        minimumTrackTintColor="#007AFF"
        maximumTrackTintColor="#00000040"
      />
    </BlurView>
  );
}
