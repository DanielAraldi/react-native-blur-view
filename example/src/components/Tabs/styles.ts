import { Dimensions, StyleSheet } from 'react-native';
import { isAndroid } from '../../utils';

export const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',

    position: 'absolute',

    bottom: 16,

    width: Dimensions.get('window').width - 40,

    alignSelf: 'center',

    backgroundColor: isAndroid ? '#878686' : 'transparent',

    borderRadius: 9999,
  },

  containerDark: {
    backgroundColor: isAndroid ? '#262323' : 'transparent',
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

    textAlign: 'center',

    color: '#00000080',
  },

  textTextDark: {
    color: '#CCCCCCBF',
  },

  tabTextSelected: {
    color: 'black',
  },

  tabTextDarkSelected: {
    color: 'white',
  },
});
