import { Text, TouchableOpacity, View } from 'react-native';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { BlurView } from '@danielsaraldi/react-native-blur-view';

import { useBlur } from '../../hooks';
import { styles } from './styles';

export function Tabs(props: BottomTabBarProps) {
  const { state } = props;

  const { mode, radius, isDark } = useBlur();

  const pageIndex = state.index;
  const id = state.routeNames[pageIndex] || 'Home';

  return (
    <View style={styles.container}>
      <BlurView
        targetId={id}
        style={styles.blurView}
        type={mode}
        radius={radius}
      >
        <View style={styles.content}>
          {props.state.routes.map((route, index) => {
            const isFocused = props.state.index === index;

            return (
              <TouchableOpacity
                key={route.key}
                activeOpacity={0.9}
                style={[styles.tab, isFocused && styles.tabSelected]}
                onPress={() => props.navigation.navigate(route.name)}
              >
                <Text
                  style={[
                    styles.tabText,
                    isDark && styles.textTextDark,
                    isFocused && styles.tabTextSelected,
                    isFocused && isDark && styles.tabTextDarkSelected,
                  ]}
                >
                  {route.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </BlurView>
    </View>
  );
}
