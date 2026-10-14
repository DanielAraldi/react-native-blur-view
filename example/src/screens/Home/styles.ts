import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  content: {
    padding: 20,

    gap: 12,
  },

  item: {
    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    gap: 12,

    borderRadius: 12,
  },

  itemPressed: {
    opacity: 0.6,
  },

  itemTexts: {
    flex: 1,

    gap: 4,
  },

  label: {
    fontSize: 18,
    fontWeight: '600',
  },

  description: {
    fontSize: 14,

    opacity: 0.6,
  },
});
