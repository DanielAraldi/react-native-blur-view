import { useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  type TextStyle,
} from 'react-native';
import { BlurView, BlurTarget } from '@danielsaraldi/react-native-blur-view';

import { styles } from './styles';
import { BACKGROUND_IMAGE } from './assets';

export default function App() {
  const renderTexts = useMemo(
    () =>
      Array.from({ length: 50 }).map((_, index) => {
        const textAlignIndex = Math.floor(Math.random() * (2 - 0 + 1) + 0);
        const textAlign = ['left', 'center', 'right'][
          textAlignIndex
        ]! as TextStyle['textAlign'];

        const textStyle: TextStyle = {
          textAlign,
        };

        return (
          <Text key={index} style={[styles.text, textStyle]}>
            BlurView
          </Text>
        );
      }),
    []
  );

  return (
    <ImageBackground
      source={BACKGROUND_IMAGE}
      style={styles.container}
      resizeMethod="resize"
    >
      <BlurView type="dark" radius={10} style={styles.blurView}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>BlurView</Text>
        </View>
      </BlurView>

      <BlurTarget>
        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          {renderTexts}
        </ScrollView>
      </BlurTarget>
    </ImageBackground>
  );
}
