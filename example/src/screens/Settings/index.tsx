import { Button, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { makeStyles } from './styles';
import {
  BlurTarget,
  BlurView,
  type BlurViewType,
} from '@danielsaraldi/react-native-blur-view';
import { useBlur } from '../../hooks';

const TYPES: BlurViewType[] = [
  'x-light',
  'light',
  'dark',
  'regular',
  'prominent',
  'material',
  'material-light',
  'material-dark',
  'thin-material',
  'thin-material-light',
  'thin-material-dark',
  'chrome-material',
  'chrome-material-light',
  'chrome-material-dark',
  'thick-material',
  'thick-material-light',
  'thick-material-dark',
  'ultra-thin-material',
  'ultra-thin-material-light',
  'ultra-thin-material-dark',
];

export function Settings() {
  const { mode, radius, isDark, onDecrement, onIncrement, onToggle } =
    useBlur();
  const { top, bottom } = useSafeAreaInsets();

  const isChangeable =
    mode === 'x-light' || mode === 'dark' || mode === 'light';

  const styles = useMemo(() => makeStyles({ top, bottom }), [top, bottom]);

  return (
    <View style={styles.container}>
      <BlurView
        targetId="target"
        style={styles.blurView}
        radius={radius}
        type={mode}
      >
        <View style={styles.blurViewContent} />
      </BlurView>

      <BlurTarget id="target" style={styles.blurTarget}>
        <ScrollView
          style={styles.content}
          contentContainerStyle={[
            styles.contentContainer,
            isDark && styles.contentContainerDark,
          ]}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.titleWrapper}>
            <Text style={[styles.title, isDark && styles.titleDark]}>
              Radius
            </Text>
            <View style={[styles.divider, isDark && styles.dividerDark]} />
          </View>

          <View style={styles.listItem}>
            <Text style={[styles.label, isDark && styles.labelDark]}>
              Intensity
            </Text>

            <View style={styles.radiusWrapper}>
              <Button
                title="+"
                onPress={onIncrement}
                disabled={radius >= 100 || !isChangeable}
              />

              <Text style={[styles.label, isDark && styles.labelDark]}>
                {radius}
              </Text>

              <Button
                title="-"
                onPress={onDecrement}
                disabled={radius <= 0 || !isChangeable}
              />
            </View>
          </View>

          <View style={styles.titleWrapper}>
            <Text style={[styles.title, isDark && styles.titleDark]}>Type</Text>
            <View style={[styles.divider, isDark && styles.dividerDark]} />
          </View>

          {TYPES.map((type) => (
            <View key={type} style={styles.listItem}>
              <Text style={[styles.label, isDark && styles.labelDark]}>
                {type}
              </Text>

              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => onToggle(type)}
                style={[
                  styles.radio,
                  isDark && styles.radioDark,
                  mode === type && styles.radioSelected,
                ]}
              />
            </View>
          ))}
        </ScrollView>
      </BlurTarget>
    </View>
  );
}
