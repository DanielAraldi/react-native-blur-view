import { useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { BlurView, VibrancyView } from '@danielsaraldi/react-native-blur-view';

import { useBlur } from '../../hooks';
import { isAndroid } from '../../utils';
import { styles } from './styles';

export function Tabs(props: BottomTabBarProps) {
  const { state } = props;

  const { mode, radius, isDark } = useBlur();

  const pageIndex = state.index;
  const id = state.routeNames[pageIndex] || 'Home';

  const renderTabs = useMemo(
    () =>
      props.state.routes.map((route, index) => {
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
      }),
    [props, isDark]
  );

  return (
    <View style={styles.container}>
      {isAndroid ? (
        <BlurView
          targetId={id}
          style={styles.blurView}
          type={mode}
          radius={radius}
        >
          <View style={styles.content}>{renderTabs}</View>
        </BlurView>
      ) : (
        <VibrancyView style={styles.blurView} type={mode} radius={radius}>
          <View style={styles.content}>{renderTabs}</View>
        </VibrancyView>
      )}
    </View>
  );
}
