import { StatusBar } from 'react-native';

import { Routes } from './routes';
import { useBlur } from './hooks';

export default function App() {
  const { isDark } = useBlur();

  return (
    <>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />

      <Routes />
    </>
  );
}
