import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { makeStyles } from './styles';
import { VibrancyView } from '@danielsaraldi/react-native-blur-view';
import { useBlur } from '../../hooks';
import { PORSCHE_MOUNTAIN } from '../../assets';
import { BLUR_TYPES_DATA } from '../../constants';

export function Vibrancies() {
  const { radius, onToggle } = useBlur();
  const { top, bottom } = useSafeAreaInsets();

  const styles = useMemo(() => makeStyles({ top, bottom }), [top, bottom]);

  const renderVibrancies = useMemo(
    () =>
      BLUR_TYPES_DATA.map(({ type, label }, index) => {
        const exceptions = ['x-light', 'light', 'dark', 'regular', 'prominent'];
        const color = type.includes('dark') ? 'white' : 'black';
        const finalColor = exceptions.some((exception) => exception === type)
          ? 'white'
          : color;

        return (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={() => onToggle(type)}
            activeOpacity={0.75}
          >
            <VibrancyView radius={radius} type={type} style={styles.centralize}>
              <Text style={[styles.itemText, { color: finalColor }]}>
                {label}
              </Text>
            </VibrancyView>
          </TouchableOpacity>
        );
      }),
    [radius, styles, onToggle]
  );

  return (
    <View style={styles.expand}>
      <ImageBackground
        style={StyleSheet.absoluteFillObject}
        source={PORSCHE_MOUNTAIN}
        resizeMode="cover"
      >
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <Text style={styles.headerText}>Vibrancies Types</Text>

            <Text style={styles.headerHint}>
              Vibrancy effects are available on iOS only
            </Text>
          </View>

          {renderVibrancies}
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
