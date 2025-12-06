import { StyleSheet } from 'react-native';
import { isIos } from '../../utils';

export const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',

    position: 'absolute',

    bottom: 16,

    width: '75%',

    alignSelf: 'center',

    borderRadius: 9999,
  },

  blurView: {
    width: '100%',
    height: 64,
  },

  content: {
    width: '100%',
    height: 64,

    flexDirection: 'row',
  },

  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  tabSelected: {
    backgroundColor: '#00000020',
  },

  tabText: {
    fontSize: 16,
    fontWeight: '600',

    color: '#202020',
  },

  textTextDark: {
    color: isIos ? 'rgba(241, 241, 241, 0.25)' : '#F1F1F1',
  },

  tabTextSelected: {
    color: '#3a57b7',
  },

  tabTextDarkSelected: {
    color: isIos ? 'rgba(129, 155, 241, 0.75)' : '#819bf1',
  },
});
