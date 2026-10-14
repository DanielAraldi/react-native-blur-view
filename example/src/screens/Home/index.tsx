import { FlatList, Pressable, Text, View } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../@types';
import { CaretRightIcon } from 'phosphor-react-native';
import { HOME_OPTIONS } from '../../constants';
import { styles } from './styles';

export function Home() {
  const { colors } = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();

  return (
    <FlatList
      data={HOME_OPTIONS}
      keyExtractor={({ route }) => route}
      contentContainerStyle={styles.content}
      contentInsetAdjustmentBehavior="automatic"
      renderItem={({ item }) => (
        <Pressable
          style={({ pressed }) => [
            styles.item,
            { backgroundColor: colors.card },
            pressed && styles.itemPressed,
          ]}
          onPress={() => navigation.navigate(item.route)}
        >
          <View style={styles.itemTexts}>
            <Text style={[styles.label, { color: colors.text }]}>
              {item.label}
            </Text>

            <Text style={[styles.description, { color: colors.text }]}>
              {item.description}
            </Text>
          </View>

          <CaretRightIcon size={20} color={colors.text} weight="bold" />
        </Pressable>
      )}
    />
  );
}
