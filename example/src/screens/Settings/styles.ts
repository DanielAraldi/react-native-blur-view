import { StyleSheet } from 'react-native';

interface MakeStylesProps {
  top: number;
  bottom: number;
}

export const makeStyles = ({ top, bottom }: MakeStylesProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },

    content: {
      flexGrow: 1,

      width: '100%',
      height: '100%',

      paddingBottom: bottom,
    },

    contentContainer: {
      paddingHorizontal: 20,
      paddingTop: 20 + top,
      paddingBottom: 72 + bottom,

      gap: 16,

      backgroundColor: '#F2F2F2',
    },

    contentContainerDark: {
      backgroundColor: '#202020',
    },

    blurView: {
      position: 'absolute',

      top: 0,
      right: 0,
      left: 0,

      width: '100%',
      height: top,
    },

    blurViewContent: {
      flex: 1,
    },

    blurTarget: {
      flex: 1,
    },

    titleWrapper: {
      gap: 8,
    },

    title: {
      fontSize: 18,
      fontWeight: 600,

      color: '#202020',
    },

    titleDark: {
      color: '#F1F1F1',
    },

    divider: {
      width: '100%',
      height: 1,

      backgroundColor: '#00000020',
    },

    dividerDark: {
      backgroundColor: '#FFFFFF20',
    },

    listItem: {
      flexDirection: 'row',

      justifyContent: 'space-between',
      alignItems: 'center',
    },

    radiusWrapper: {
      flexDirection: 'row',

      alignItems: 'center',

      gap: 8,
    },

    label: {
      fontSize: 16,

      color: '#202020',
    },

    labelDark: {
      color: '#F1F1F1',
    },

    typeItem: {
      flexDirection: 'row',

      justifyContent: 'space-between',
      alignItems: 'center',

      marginBottom: 8,
    },

    radio: {
      width: 20,
      height: 20,

      borderWidth: 2,
      borderColor: '#000000e6',
      borderRadius: 9999,

      backgroundColor: 'transparent',
    },

    radioDark: {
      borderColor: '#FFFFFFe6',
    },

    radioSelected: {
      borderWidth: 6,
    },
  });
