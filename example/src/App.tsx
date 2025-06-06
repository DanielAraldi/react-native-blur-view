import { View, Text, ScrollView, type TextStyle } from 'react-native';
import { BlurView } from 'react-native-blur-view';

import { styles } from './styles';
import { useMemo } from 'react';

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
    <>
      <View style={styles.wrapper}>
        <BlurView
          type="light"
          radius={10}
          style={styles.blurView}
          blurStyle={styles.blurView}
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
