import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,

    backgroundColor: '#FFFFFF',

    borderRadius: 12,
  },

  modalContainer: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    width: '80%',

    padding: 16,

    gap: 12,

    backgroundColor: '#F1F1F1',

    borderRadius: 16,
  },

  modalText: {
    fontSize: 16,
    fontWeight: '600',

    textAlign: 'center',

    color: 'black',
  },

  absoluteFill: {
    position: 'absolute',

    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
