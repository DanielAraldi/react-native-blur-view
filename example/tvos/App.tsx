import { useRef } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BlurView, BlurTarget } from '@danielsaraldi/react-native-blur-view';

function App() {
  const blurTarget = useRef<View | null>(null);

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View style={styles.container}>
        <BlurTarget ref={blurTarget as any} style={StyleSheet.absoluteFill}>
          <View style={styles.container}>
            <Text style={styles.text}>Hello, BlurView!</Text>
            <Text style={styles.text}>Hello, BlurView!</Text>
            <Text style={styles.text}>Hello, BlurView!</Text>
            <Text style={styles.text}>Hello, BlurView!</Text>
            <Text style={styles.text}>Hello, BlurView!</Text>
          </View>
        </BlurTarget>

        <View style={StyleSheet.absoluteFill}>
          <BlurView
            blurTarget={blurTarget as any}
            style={StyleSheet.absoluteFill}
          >
            <Text style={styles.text}>Hello, BlurView!</Text>
          </BlurView>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'black',
  },

  text: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default App;
