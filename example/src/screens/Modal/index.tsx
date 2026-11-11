import { useRef, useState } from 'react';
import {
  Button,
  Image,
  Modal as RNModal,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { BlurTarget, BlurView } from '@danielsaraldi/react-native-blur-view';
import { INGLORIOUS_BASTERDS } from '../../assets';
import { styles } from './styles';

export function Modal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const targetRef = useRef<View | null>(null);

  return (
    <View style={styles.container}>
      <BlurTarget ref={targetRef} style={StyleSheet.absoluteFill}>
        <View style={StyleSheet.absoluteFill}>
          <Image
            style={styles.image}
            source={INGLORIOUS_BASTERDS}
            resizeMode="cover"
          />
        </View>

        <View style={styles.content}>
          <View style={styles.button}>
            <Button title="Open Modal" onPress={() => setIsOpen(true)} />
          </View>
        </View>
      </BlurTarget>

      <RNModal
        transparent
        statusBarTranslucent
        navigationBarTranslucent
        hardwareAccelerated
        animationType="fade"
        visible={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        <BlurView
          blurTarget={targetRef}
          type="light"
          radius={20}
          style={StyleSheet.absoluteFill}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                The modal backdrop is blurred by the BlurView 🌫️
              </Text>

              <Button title="Close" onPress={() => setIsOpen(false)} />
            </View>
          </View>
        </BlurView>
      </RNModal>
    </View>
  );
}
