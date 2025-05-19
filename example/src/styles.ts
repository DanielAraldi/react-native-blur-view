import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  content: {
    position: 'relative',
    flexGrow: 1,
  },

  contentContainer: {
    gap: 32,
  },

  wrapper: {
    position: 'absolute',
    width: '100%',
  },

  blurView: {
    width: '100%',
    height: 256,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  text: {
    width: '100%',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
