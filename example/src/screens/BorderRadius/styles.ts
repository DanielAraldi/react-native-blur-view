import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',

    padding: 20,
  },

  box: {
    overflow: 'hidden',

    width: 240,
    height: 240,

    justifyContent: 'center',
    alignItems: 'center',
  },

  boxText: {
    fontSize: 20,
    fontWeight: 'bold',

    color: 'white',
  },

  absoluteFill: {
    position: 'absolute',

    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
