import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Blurs, Settings, Vibrancies } from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from '../components';
import { isIos } from '../utils';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BlursStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BlursStack" component={Blurs} />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SettingsStack" component={Settings} />
    </Stack.Navigator>
  );
}

function VibranciesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="VibranciesStack" component={Vibrancies} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <Tabs {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Blurs" component={BlursStack} />
      {isIos && <Tab.Screen name="Vibrancies" component={VibranciesStack} />}
      <Tab.Screen name="Settings" component={SettingsStack} />
    </Tab.Navigator>
  );
}

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
