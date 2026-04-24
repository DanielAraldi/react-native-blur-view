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

  expand: {
    flex: 1,
  },

  absoluteFill: {
    position: 'absolute',

    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
