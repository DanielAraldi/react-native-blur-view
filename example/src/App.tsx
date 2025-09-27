import { useState, type JSX } from 'react';
import {
  Text,
  ImageBackground,
  Button,
  View,
  Switch,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  BlurView,
  type BlurViewType,
} from '@danielsaraldi/react-native-blur-view';

import { styles } from './styles';
import { WOMAN } from './assets';

const BLUR_TYPES: BlurViewType[] = [
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

export default function App() {
  const [radius, setRadius] = useState<number>(10);
  const [mode, setMode] = useState<BlurViewType>('light');

  const isDark = mode.includes('dark');
  const isMax = radius === 100;
  const isMin = radius === 0;

  function onIncrement(): void {
    if (isMax) return;
    setRadius((currentRadius) => currentRadius + 5);
  }

  function onDecrement(): void {
    if (isMin) return;
    setRadius((currentRadius) => currentRadius - 5);
  }

  function onChange(): void {
    setMode(isDark ? 'light' : 'dark');
  }

  function onChangeOthersMode(item: BlurViewType): void {
    setMode(item);
  }

  function renderItem(item: BlurViewType): JSX.Element {
    return (
      <TouchableOpacity
        key={item}
        activeOpacity={0.95}
        style={styles.blurCard}
        onPress={() => onChangeOthersMode(item)}
      >
        <Text style={styles.blurCardText}>{item}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <ImageBackground
      source={WOMAN}
      style={styles.container}
      resizeMethod="resize"
    >
      <BlurView type={mode} radius={radius} style={styles.topBlurView}>
        <View style={styles.topBlurViewContainer}>
          <Text style={styles.title}>{mode}</Text>

          <Switch value={isDark} onChange={onChange} />
        </View>
      </BlurView>

      <FlatList
        data={BLUR_TYPES}
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => renderItem(item)}
        getItemLayout={(_, index) => ({
          length: 64,
          offset: 64 * index,
          index,
        })}
      />

      <BlurView type={mode} radius={radius} style={styles.bottomBlurView}>
        <View style={styles.bottomBlurViewContainer}>
          <Text style={styles.title}>Radius</Text>

          <View style={styles.buttonContainer}>
            <Button title="+" disabled={isMax} onPress={onIncrement} />

            <Text style={styles.title}>{radius}</Text>

            <Button title="-" disabled={isMin} onPress={onDecrement} />
          </View>
        </View>
      </BlurView>
    </ImageBackground>
  );
}
