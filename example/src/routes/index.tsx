import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Blurs, Settings, Vibrancies } from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from '../components';
import { isIos } from '../utils';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={(props) => <Tabs {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Blurs" component={Blurs} />
      {isIos && <Tab.Screen name="Vibrancies" component={Vibrancies} />}
      <Tab.Screen name="Settings" component={Settings} />
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
