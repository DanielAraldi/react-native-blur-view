import { Pressable, Text, View } from 'react-native';
import { PROGRESSIVE_DIRECTIONS } from '../../constants';
import type { DirectionPickerProps } from '../../@types';
import { styles } from './styles';
import { BlurView } from '@danielsaraldi/react-native-blur-view';

export function DirectionPicker(props: DirectionPickerProps) {
  const { blurTarget, value, onValueChange } = props;

  return (
    <View style={styles.container}>
      {PROGRESSIVE_DIRECTIONS.map((direction) => {
        const isSelected = direction === value;

        return (
          <Pressable
            key={direction}
            style={styles.option}
            onPress={() => onValueChange(direction)}
          >
            <BlurView
              blurTarget={blurTarget}
              type="material"
              radius={50}
              style={styles.optionContent}
              overlayColor={isSelected ? '#0009' : 'transparent'}
            >
              <Text style={styles.optionText}>{direction}</Text>
            </BlurView>
          </Pressable>
        );
      })}
    </View>
  );
}
