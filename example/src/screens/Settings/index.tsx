import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Button,
  ImageBackground,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  BlurTarget,
  BlurView,
  VibrancyView,
} from '@danielsaraldi/react-native-blur-view';
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { useBlur } from '../../hooks';
import { PORSCHE_ARCHITECTURE } from '../../assets';
import { BLUR_RADIUS_DATA } from '../../constants';
import { makeStyles } from './styles';
import { isIos } from '../../utils';

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);
const AnimatedVibrancyView = Animated.createAnimatedComponent(VibrancyView);

export function Settings() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const targetRef = useRef<View | null>(null);
  const scrollTargetRef = useRef<View | null>(null);
  const { top, bottom } = useSafeAreaInsets();
  const { blurType, effectStyle, radius, isDark, onRadius } = useBlur();

  const radiusAnimation = useSharedValue(0.01);

  const color = blurType.includes('dark') ? 'white' : 'black';
  const defaultMessage = isIos
    ? 'Default blur type is light, radius is 10 and vibrancy effect style is label.'
    : 'Default blur type is light and default radius is 10.';

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
              type={blurType}
              style={styles.centralize}
              reducedTransparencyFallbackColor="#F1F1F1"
            >
              <Text style={[styles.itemText, { color }]}>{label}</Text>
            </BlurView>
          </TouchableOpacity>
        );
      }),
    [blurType, styles, color, onRadius]
  );

  const animatedProps = useAnimatedProps(() => ({
    radius: radiusAnimation.get() * 100,
  }));

  useEffect(() => {
    radiusAnimation.set(() =>
      withRepeat(withTiming(1, { duration: 2000 }), -1, true)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <BlurTarget ref={targetRef} style={[styles.expand, styles.absoluteFill]}>
        <View style={styles.expand}>
          <BlurTarget ref={scrollTargetRef} style={styles.absoluteFill}>
            <ImageBackground
              style={styles.absoluteFill}
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
                type={blurType}
                radius={radius}
                style={styles.absoluteFill}
              />

              <Text
                style={[
                  styles.configurationText,
                  isDark && styles.configurationTextDark,
                ]}
              >
                Explore radius and type configurations to customize the blur
                effect ✨{'\n'}Adjust the settings to see how they impact the
                appearance of the blur on both Android and iOS platforms 🌫️
              </Text>
            </View>

            <View style={styles.header}>
              <Text style={styles.headerText}>Blur Radius</Text>
            </View>

            {renderBlurRadius}

            <View style={[styles.header, styles.marginTop]}>
              <Text style={styles.headerText}>Blur + Reanimated</Text>
            </View>

            <View style={styles.item}>
              <AnimatedBlurView
                blurTarget={scrollTargetRef}
                type={blurType}
                style={styles.centralize}
                reducedTransparencyFallbackColor="#F1F1F1"
                animatedProps={animatedProps}
              >
                <Text style={[styles.itemText, { color }]}>Blur Animation</Text>
              </AnimatedBlurView>
            </View>

            {isIos && (
              <View style={styles.item}>
                <AnimatedVibrancyView
                  type={blurType}
                  style={styles.centralize}
                  reducedTransparencyFallbackColor="#F1F1F1"
                  animatedProps={animatedProps}
                >
                  <Text style={styles.itemText}>Vibrancy Animation</Text>
                </AnimatedVibrancyView>
              </View>
            )}

            <View style={[styles.header, styles.marginTop]}>
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
                type={blurType}
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
            style={styles.absoluteFill}
          >
            <BlurView
              blurTarget={targetRef}
              type={blurType}
              radius={radius}
              style={styles.absoluteFill}
            />

            <View style={[styles.modalContainer, styles.absoluteFill]}>
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
                  hardware-accelerated rendering ⚡️
                </Text>

                <Text
                  style={[
                    styles.configurationText,
                    isDark && styles.configurationTextDark,
                  ]}
                >
                  On iOS all types are supported by default. However, on Android
                  they are RGBA colors to simulate the same blur color 🎨
                </Text>

                <Text
                  style={[
                    styles.configurationText,
                    isDark && styles.configurationTextDark,
                  ]}
                >
                  {defaultMessage}
                </Text>

                <Text
                  style={[
                    styles.configurationText,
                    isDark && styles.configurationTextDark,
                  ]}
                >
                  Current radius: {radius} 🌫️
                </Text>

                <Text
                  style={[
                    styles.configurationText,
                    isDark && styles.configurationTextDark,
                  ]}
                >
                  Current blur type: {blurType} 🎨
                </Text>

                {isIos && (
                  <Text
                    style={[
                      styles.configurationText,
                      isDark && styles.configurationTextDark,
                    ]}
                  >
                    Current effect style: {effectStyle} 💫
                  </Text>
                )}

                <Button title="Close" onPress={() => setIsOpenModal(false)} />
              </View>
            </View>
          </Modal>
        </View>
      </BlurTarget>
    </>
  );
}
