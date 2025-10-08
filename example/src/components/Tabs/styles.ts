import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',

    position: 'absolute',

    bottom: 0,

    width: '100%',
  },

  blurView: {
    width: '100%',
    height: 80,
  },

  content: {
    width: '100%',
    height: '100%',

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

    color: '#202020',
  },

  textTextDark: {
    color: '#F1F1F1',
  },

  tabTextSelected: {
    color: '#3a57b7',
  },

  tabTextDarkSelected: {
    color: '#819bf1',
  },
});
