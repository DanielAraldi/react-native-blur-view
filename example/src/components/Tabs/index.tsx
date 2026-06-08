import { useMemo } from 'react';
import { Pressable, Text, View } from 'react-native';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { VibrancyView } from '@danielsaraldi/react-native-blur-view';

import { useBlur } from '../../hooks';
import { NAVIGATION_ICONS } from '../../constants';
import { styles } from './styles';

export function Tabs(props: BottomTabBarProps) {
  const { blurType, radius, effectStyle, isDark } = useBlur();

  const renderTabs = useMemo(
    () =>
      props.state.routes.map((route, index) => {
        const isFocused = props.state.index === index;
        const icon =
          NAVIGATION_ICONS[route.name as keyof typeof NAVIGATION_ICONS];

        return (
          <Pressable
            key={route.key}
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
              {route.name} {icon}
            </Text>
          </Pressable>
        );
      }),
    [props, isDark]
  );

  return (
    <View style={[styles.container, isDark && styles.containerDark]}>
      <VibrancyView
        radius={radius}
        type={blurType}
        effectStyle={effectStyle}
        reducedTransparencyFallbackColor="#F1F1F1"
        style={styles.blurView}
      >
        <View style={styles.content}>{renderTabs}</View>
      </VibrancyView>
    </View>
  );
}
