import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    gap: 8,
  },

  option: {
    flex: 1,

    alignItems: 'center',
  },

  optionSelected: {
    backgroundColor: '#00000060',
  },

  optionContent: {
    width: '100%',
    height: 48,

    justifyContent: 'center',
    alignItems: 'center',

    padding: 12,

    borderRadius: 12,
  },

  optionText: {
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'capitalize',

    color: 'white',
  },
});
