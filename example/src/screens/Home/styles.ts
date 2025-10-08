import { Dimensions, StyleSheet } from 'react-native';

const windowHeight = Dimensions.get('window').height;

interface MakeStylesProps {
  top: number;
  bottom: number;
}

export const makeStyles = ({ top, bottom }: MakeStylesProps) =>
  StyleSheet.create({
    container: {
      flex: 1,

      width: '100%',
      height: '100%',
    },

    blurView: {
      position: 'absolute',

      top: 0,

      width: '100%',
      height: 96 + top,
    },

    blurViewContent: {
      flexDirection: 'row',

      width: '100%',
      height: '100%',

      alignItems: 'center',

      marginTop: 8,

      paddingHorizontal: 20,

      gap: 12,
    },

    avatarWrapper: {
      overflow: 'hidden',

      width: 48,
      height: 48,

      borderRadius: 9999,
    },

    avatar: {
      width: '100%',
      height: '100%',
    },

    avatarName: {
      fontSize: 18,

      color: '#202020',
    },

    avatarNameDark: {
      color: '#F1F1F1',
    },

    list: {
      position: 'relative',

      flexGrow: 1,

      paddingHorizontal: 20,

      backgroundColor: '#F2F2F2',
    },

    listDark: {
      backgroundColor: '#202020',
    },

    listContent: {
      paddingTop: 112 + top,
      paddingBottom: 64 + bottom,

      gap: 16,
    },

    listItem: {
      padding: 12,

      backgroundColor: '#FFFFFF',

      borderWidth: 1,
      borderColor: '#00000020',
      borderRadius: 8,
    },

    listItemDark: {
      backgroundColor: '#00000020',
      borderColor: '#FFFFFF20',
    },

    listItemText: {
      fontSize: 14,

      lineHeight: 18,

      color: '#202020',
    },

    listItemTextDark: {
      color: '#F1F1F1',
    },

    modal: {
      flex: 1,
    },

    backdrop: {
      zIndex: 10,

      position: 'absolute',

      top: 0,
      left: 0,
      right: 0,
      bottom: 0,

      backgroundColor: 'rgba(9, 9, 12, 0.3)',
    },

    wrapper: {
      zIndex: 20,

      position: 'absolute',

      top: windowHeight * 0.2,
      left: 0,
      right: 0,
      bottom: 0,
    },

    content: {
      width: '100%',
      height: windowHeight * 0.8,

      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,

      justifyContent: 'center',
      alignItems: 'center',

      marginTop: 'auto',

      backgroundColor: '#F2F2F2',
    },

    contentDark: {
      backgroundColor: '#202020',
    },

    modalScroll: {
      flex: 1,
    },

    modalScrollContainer: {
      flexGrow: 1,

      paddingHorizontal: 20,
      paddingTop: 28,
      paddingBottom: 64 + bottom,

      gap: 8,
    },

    modalScrollText: {
      fontSize: 16,
      lineHeight: 18,

      color: '#202020',

      textAlign: 'justify',
    },

    modalScrollTextDark: {
      color: '#F1F1F1',
    },

    modalBlurFooter: {
      position: 'absolute',

      bottom: 0,
      left: 0,
      right: 0,

      width: '100%',
      height: 48 + bottom,
    },
  });
