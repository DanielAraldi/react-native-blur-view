import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  content: {
    zIndex: -1,
    position: 'relative',
    flexGrow: 1,
  },

  contentContainer: {
    gap: 32,
  },

  wrapper: {
    zIndex: 999,
    position: 'absolute',
    width: '100%',
  },

  titleWrapper: {
    paddingVertical: 96,
  },

  title: {
    fontSize: 24,
    zIndex: 99,
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  text: {
    width: '100%',
    fontSize: 18,
  },
});
