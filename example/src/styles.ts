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

  wrapper: {
    position: 'absolute',
    width: '100%',
    height: 256,
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
    textAlignVertical: 'center',
    color: 'white',
  },

  text: {
    width: '100%',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
