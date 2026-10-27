import { useColorScheme } from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Blur,
  BorderRadius,
  Gesture,
  Home,
  Modal,
  Reanimated,
  Types,
  Vibrancy,
} from '../screens';
import type { RootStackParamList } from '../@types';
import { isIos } from '../utils';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        screenOptions={{
          headerBackButtonDisplayMode: 'minimal',
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'React Native Blur View' }}
        />
        <Stack.Screen name="Blur" component={Blur} />
        <Stack.Screen
          name="BorderRadius"
          component={BorderRadius}
          options={{ title: 'Border Radius' }}
        />
        {isIos && <Stack.Screen name="Vibrancy" component={Vibrancy} />}
        <Stack.Screen name="Modal" component={Modal} />
        <Stack.Screen name="Reanimated" component={Reanimated} />
        <Stack.Screen name="Gesture" component={Gesture} />
        <Stack.Screen name="Types" component={Types} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
