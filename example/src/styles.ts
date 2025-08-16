import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    width: '100%',
    height: '100%',
  },

  content: {
    position: 'relative',

    flexGrow: 1,
  },

  contentContainer: {
    gap: 32,
  },

  blurView: {
    position: 'absolute',

    width: '100%',
    height: 256,

    justifyContent: 'center',
    alignItems: 'center',
  },

  wrapper: {
    width: '100%',
    height: '100%',

    justifyContent: 'center',
    alignItems: 'center',

    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',

    color: 'white',
  },

  text: {
    width: '100%',
    fontSize: 24,
    fontWeight: 'bold',

    color: 'white',
  },
});
