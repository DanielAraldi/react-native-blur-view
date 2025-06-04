import { View, Text, ScrollView, type TextStyle } from 'react-native';
import { BlurView } from 'react-native-blur-view';

import { styles } from './styles';
import { useMemo } from 'react';

const texts = Array.from({ length: 50 });

export default function App() {
  const renderTexts = useMemo(
    () =>
      texts.map((_, index) => {
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
    <>
      <View style={styles.wrapper}>
        <BlurView
          type="light"
          radius={25}
          style={styles.blurView}
          contentContainerStyle={styles.blurView}
        >
          <View>
            <Text style={styles.title}>BlurView</Text>
          </View>
        </BlurView>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {renderTexts}
      </ScrollView>
    </>
  );
}
