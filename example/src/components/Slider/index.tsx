import { Text, useColorScheme } from 'react-native';
import { BlurView } from '@danielsaraldi/react-native-blur-view';
import RNSlider from '@react-native-community/slider';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';
import type { SliderProps } from '../../@types';

export function Slider(props: SliderProps) {
  const {
    label = 'Radius',
    maximumValue = 100,
    blurTarget,
    value,
    onValueChange,
  } = props;

  const { bottom } = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <BlurView
      blurTarget={blurTarget}
      type="material"
      radius={50}
      style={[styles.container, { paddingBottom: bottom + 20 }]}
    >
      <Text style={[styles.label, isDark && styles.labelDark]}>
        {label}: {value}
      </Text>

      <RNSlider
        style={styles.slider}
        minimumValue={0}
        maximumValue={maximumValue}
        value={value}
        onValueChange={(sliderValue) => {
          onValueChange(Math.round(sliderValue));
        }}
        thumbTintColor="#007AFF"
        minimumTrackTintColor="#007AFF"
        maximumTrackTintColor="#00000040"
      />
    </BlurView>
  );
}
