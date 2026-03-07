import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useBlur } from '../../hooks';
import { makeStyles } from './styles';
import { useMemo, useRef, useState } from 'react';
import {
  Button,
  ImageBackground,
  Modal,
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
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const targetRef = useRef<View | null>(null);
  const scrollTargetRef = useRef<View | null>(null);
  const { top, bottom } = useSafeAreaInsets();
  const { mode, radius, isDark, onRadius } = useBlur();

  const color = mode.includes('dark') ? 'white' : 'black';

  const styles = useMemo(() => makeStyles({ top, bottom }), [top, bottom]);

  const renderBlurRadius = useMemo(
    () =>
      BLUR_RADIUS_DATA.map(({ radius: blurRadius, label }, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={() => onRadius(blurRadius)}
            activeOpacity={0.75}
          >
            <BlurView
              blurTarget={scrollTargetRef}
              radius={blurRadius}
              type={mode}
              style={styles.centralize}
              reducedTransparencyFallbackColor="#F1F1F1"
            >
              <Text style={[styles.itemText, { color }]}>{label}</Text>
            </BlurView>
          </TouchableOpacity>
        );
      }),
    [mode, styles, color, onRadius]
  );

  return (
    <BlurTarget
      ref={targetRef}
      style={[styles.expand, StyleSheet.absoluteFillObject]}
    >
      <View style={styles.expand}>
        <BlurTarget ref={scrollTargetRef} style={StyleSheet.absoluteFillObject}>
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
              blurTarget={scrollTargetRef}
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
              Explore radius and type configurations to customize the blur
              effect. Adjust the settings to see how they impact the appearance
              of the blur on both Android and iOS platforms.
            </Text>
          </View>

          <View style={styles.header}>
            <Text style={styles.headerText}>Blur Radius</Text>
          </View>

          {renderBlurRadius}

          <View style={[styles.header, styles.modalMarginTop]}>
            <Text style={styles.headerText}>Modal</Text>
          </View>

          <TouchableOpacity
            style={styles.item}
            onPress={() => setIsOpenModal(true)}
            activeOpacity={0.75}
          >
            <BlurView
              blurTarget={scrollTargetRef}
              radius={radius}
              type={mode}
              style={styles.centralize}
              reducedTransparencyFallbackColor="#F1F1F1"
            >
              <Text style={[styles.itemText, { color }]}>Open Modal</Text>
            </BlurView>
          </TouchableOpacity>
        </ScrollView>

        <Modal
          transparent
          statusBarTranslucent
          navigationBarTranslucent
          hardwareAccelerated
          visible={isOpenModal}
          onRequestClose={() => setIsOpenModal(false)}
          onDismiss={() => setIsOpenModal(false)}
          style={StyleSheet.absoluteFillObject}
        >
          <BlurView
            blurTarget={targetRef}
            type={mode}
            radius={radius}
            style={StyleSheet.absoluteFillObject}
          />

          <View style={[styles.modalContainer, StyleSheet.absoluteFillObject]}>
            <View
              style={[styles.modalContent, isDark && styles.modalContentDark]}
            >
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

              <Button title="Close" onPress={() => setIsOpenModal(false)} />
            </View>
          </View>
        </Modal>
      </View>
    </BlurTarget>
  );
}
