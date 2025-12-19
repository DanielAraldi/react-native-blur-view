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
    },

    contentContainer: {
      flexGrow: 1,

      paddingTop: isAndroidSDK31OrLower ? top + 20 : top,
      paddingHorizontal: 20,
      paddingBottom: bottom + (isAndroidSDK31OrLower ? 96 : 64),

      gap: 16,
    },

    expand: {
      flex: 1,
    },

    item: {
      width: '100%',
      height: 80,
    },

    centralize: {
      flex: 1,

      borderRadius: 16,

      justifyContent: 'center',
      alignItems: 'center',
    },

    itemText: {
      fontSize: 20,
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
  });
