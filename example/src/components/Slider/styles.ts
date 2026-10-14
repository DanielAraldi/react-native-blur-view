import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',

    left: 0,
    right: 0,
    bottom: 0,

    width: '100%',
    height: 96,

    paddingTop: 20,
    paddingHorizontal: 20,

    gap: 8,

    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',

    color: 'black',
  },

  labelDark: {
    color: 'white',
  },

  slider: {
    width: '100%',
    height: 40,
  },
});
