import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useBlur } from '../../hooks';
import { makeStyles } from './styles';
import { useMemo } from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { BlurTarget, BlurView } from '@danielsaraldi/react-native-blur-view';
import { PORSCHE_ARCHITECTURE } from '../../assets';
import { BLUR_RADIUS_DATA } from '../../constants';

export function Settings() {
  const { mode, radius, isDark, onRadius } = useBlur();
  const { top, bottom } = useSafeAreaInsets();

  const styles = useMemo(() => makeStyles({ top, bottom }), [top, bottom]);

  const renderBlurRadius = useMemo(
    () =>
      BLUR_RADIUS_DATA.map(({ radius: blurRadius, label }, index) => {
        const color = mode.includes('dark') ? 'white' : 'black';

        return (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={() => onRadius(blurRadius)}
            activeOpacity={0.75}
          >
            <BlurView
              targetId="radius"
              radius={blurRadius}
              type={mode}
              style={styles.centralize}
            >
              <Text style={[styles.itemText, { color }]}>{label}</Text>
            </BlurView>
          </TouchableOpacity>
        );
      }),
    [mode, styles, onRadius]
  );

  return (
    <BlurTarget
      id="Settings"
      style={[styles.expand, StyleSheet.absoluteFillObject]}
    >
      <View style={styles.expand}>
        <BlurTarget id="radius" style={StyleSheet.absoluteFillObject}>
          <ImageBackground
            style={StyleSheet.absoluteFillObject}
            source={PORSCHE_ARCHITECTURE}
            resizeMode="cover"
          />
        </BlurTarget>

        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <Text style={styles.headerText}>Settings</Text>
          </View>

          <View style={styles.configurationItem}>
            <BlurView
              targetId="radius"
              type={mode}
              radius={radius}
              style={StyleSheet.absoluteFillObject}
            />

            <Text
              style={[
                styles.configurationText,
                isDark && styles.configurationTextDark,
              ]}
            >
              On Android platforms, the component utilizes the Dimezis's
              BlurView library to offer native blur effects with
              hardware-accelerated rendering.
            </Text>

            <Text
              style={[
                styles.configurationText,
                isDark && styles.configurationTextDark,
              ]}
            >
              On iOS all types are supported by default. However, on Android
              they are RGBA colors to simulate the same blur color.
            </Text>

            <Text
              style={[
                styles.configurationText,
                isDark && styles.configurationTextDark,
              ]}
            >
              Default type is light and default radius is 10.
            </Text>

            <Text
              style={[
                styles.configurationText,
                isDark && styles.configurationTextDark,
              ]}
            >
              Current type: {mode}.
            </Text>

            <Text
              style={[
                styles.configurationText,
                isDark && styles.configurationTextDark,
              ]}
            >
              Current radius: {radius}.
            </Text>
          </View>

          <View style={styles.header}>
            <Text style={styles.headerText}>Blur Radius</Text>
          </View>

          {renderBlurRadius}
        </ScrollView>
      </View>
    </BlurTarget>
  );
}
