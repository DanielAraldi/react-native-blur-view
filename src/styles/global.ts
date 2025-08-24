import { StyleSheet } from 'react-native';

const position = 'relative';
const zIndex = 10;

export const globalStyles = StyleSheet.create({
  container: {
    zIndex,
    position,

    overflow: 'hidden',
  },

  content: {
    zIndex,
    position,
  },
});
