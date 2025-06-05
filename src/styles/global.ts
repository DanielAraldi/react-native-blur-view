import { StyleSheet } from 'react-native';

const zIndex = 9999;
const backgroundColor = 'transparent';

export const globalStyles = StyleSheet.create({
  container: {
    zIndex,
    backgroundColor,
  },

  vibrancy: {
    zIndex,
    backgroundColor,
  },

  content: {
    zIndex,
    position: 'absolute',
  },
});
