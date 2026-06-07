import { StyleSheet } from 'react-native';
import { isAndroidSDK31OrLower } from '../../utils';

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

      paddingTop: isAndroidSDK31OrLower ? top + 20 : top,
      paddingHorizontal: 20,
      paddingBottom: bottom + (isAndroidSDK31OrLower ? 96 : 64),

      gap: 16,
    },

    expand: {
      flex: 1,
    },

    card: {
      width: '100%',
      height: 256,

      flexDirection: 'row',

      justifyContent: 'space-between',
      alignItems: 'center',

      padding: 12,

      borderRadius: 16,
    },

    text: {
      fontSize: 20,
    },

    scroll: {
      flex: 1,

      width: '100%',
      height: 64,
    },

    scrollContent: {
      flexGrow: 1,

      gap: 16,
    },

    radius: {
      width: 64,
      height: 64,

      justifyContent: 'center',
      alignItems: 'center',

      borderRadius: 16,
    },

    header: {
      width: '100%',

      alignItems: 'center',

      marginBottom: 8,

      gap: 16,
    },

    headerText: {
      fontSize: 24,
      fontWeight: 'bold',

      color: 'white',
    },

    headerHint: {
      fontSize: 16,
      fontWeight: 'bold',

      textAlign: 'center',

      color: 'white',
    },

    absoluteFill: {
      position: 'absolute',

      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });
