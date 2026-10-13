import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    padding: 20,

    gap: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',

    color: 'white',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',

    gap: 12,
  },

  box: {
    overflow: 'hidden',

    width: '47%',
    height: 120,

    justifyContent: 'center',
    alignItems: 'center',

    padding: 8,

    borderRadius: 16,
  },

  boxText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',

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
