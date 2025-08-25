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
    paddingHorizontal: 20,
    paddingVertical: 192,

    gap: 20,
  },

  blurCard: {
    width: '100%',
    height: 64,

    justifyContent: 'center',
    alignItems: 'center',

    padding: 20,

    borderRadius: 4,

    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },

  blurCardText: {
    fontSize: 18,

    fontWeight: 'bold',

    color: 'black',

    textAlign: 'center',
  },

  topBlurView: {
    top: 0,

    position: 'absolute',

    width: '100%',
    height: 144,

    justifyContent: 'flex-end',
    alignItems: 'flex-start',

    padding: 20,
  },

  topBlurViewContainer: {
    flex: 1,

    flexDirection: 'row',

    width: '100%',
    height: '100%',

    justifyContent: 'space-between',
    alignItems: 'flex-end',

    gap: 8,
  },

  bottomBlurView: {
    bottom: 0,

    position: 'absolute',

    width: '100%',
    height: 144,

    padding: 20,
  },

  bottomBlurViewContainer: {
    flexDirection: 'row',

    width: '100%',
    height: '100%',

    justifyContent: 'space-between',
    alignItems: 'flex-start',

    gap: 8,
  },

  buttonContainer: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'flex-end',

    gap: 12,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',

    color: 'white',

    textTransform: 'capitalize',
  },

  text: {
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',

    lineHeight: 24,

    textAlign: 'center',

    color: 'white',
  },
});
