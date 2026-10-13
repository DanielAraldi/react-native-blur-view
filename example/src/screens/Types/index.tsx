import { useRef } from 'react';
import { ImageBackground, ScrollView, Text, View } from 'react-native';
import {
  BlurTarget,
  BlurView,
  VibrancyView,
} from '@danielsaraldi/react-native-blur-view';
import { BLUR_TYPES, EFFECT_STYLES } from '../../constants';
import { AMERICAN_PSYCHO } from '../../assets';
import { isIos } from '../../utils';
import { styles } from './styles';

export function Types() {
  const targetRef = useRef<View | null>(null);

  return (
    <View style={styles.container}>
      <BlurTarget ref={targetRef} style={styles.absoluteFill}>
        <ImageBackground
          style={styles.absoluteFill}
          source={AMERICAN_PSYCHO}
          resizeMode="cover"
        />
      </BlurTarget>

      <ScrollView
        contentContainerStyle={styles.content}
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        decelerationRate="normal"
      >
        <Text style={styles.title}>Blur Types</Text>

        <View style={styles.grid}>
          {BLUR_TYPES.map((type) => (
            <BlurView
              key={type}
              blurTarget={targetRef}
              type={type}
              style={styles.box}
            >
              <Text style={styles.boxText}>{type}</Text>
            </BlurView>
          ))}
        </View>

        {isIos && (
          <>
            <Text style={styles.title}>Effect Styles</Text>

            <View style={styles.grid}>
              {EFFECT_STYLES.map((effectStyle) => (
                <VibrancyView
                  key={effectStyle}
                  effectStyle={effectStyle}
                  style={styles.box}
                >
                  <Text style={styles.boxText}>{effectStyle}</Text>
                </VibrancyView>
              ))}
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
}
