import { BlurTarget, BlurView } from '@danielsaraldi/react-native-blur-view';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMemo } from 'react';
import { makeStyles } from './styles';
import { useBlur } from '../../hooks';
import { BLUR_TYPES_DATA } from '../../constants';
import { MOUNTAIN } from '../../assets';

export function Blurs() {
  const { radius, onToggle } = useBlur();
  const { top, bottom } = useSafeAreaInsets();

  const styles = useMemo(() => makeStyles({ top, bottom }), [top, bottom]);

  const renderBlurs = useMemo(
    () =>
      BLUR_TYPES_DATA.map(({ type, label }, index) => {
        const color = type.includes('dark') ? 'white' : 'black';

        return (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={() => onToggle(type)}
            activeOpacity={0.75}
          >
            <BlurView
              targetId="types"
              radius={radius}
              type={type}
              style={styles.centralize}
            >
              <Text style={[styles.itemText, { color }]}>{label}</Text>
            </BlurView>
          </TouchableOpacity>
        );
      }),
    [radius, styles, onToggle]
  );

  return (
    <BlurTarget
      id="Blurs"
      style={[styles.expand, StyleSheet.absoluteFillObject]}
    >
      <View style={styles.expand}>
        <BlurTarget id="types" style={StyleSheet.absoluteFillObject}>
          <ImageBackground
            style={StyleSheet.absoluteFillObject}
            source={MOUNTAIN}
            resizeMode="cover"
          />
        </BlurTarget>

        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <Text style={styles.headerText}>Blur Types</Text>

            <Text style={styles.headerHint}>
              Blur effects are available on iOS and Android
            </Text>
          </View>

          {renderBlurs}
        </ScrollView>
      </View>
    </BlurTarget>
  );
}
