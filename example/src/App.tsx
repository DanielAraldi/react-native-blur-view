import { StatusBar, useColorScheme } from 'react-native';

import { Routes } from './routes';

export default function App() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />

      <Routes />
    </>
  );
}
