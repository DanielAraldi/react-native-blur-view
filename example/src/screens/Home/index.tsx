import { BlurTarget, BlurView } from '@danielsaraldi/react-native-blur-view';
import {
  FlatList,
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMemo, useState } from 'react';
import { makeStyles } from './styles';
import { useBlur, useUser } from '../../hooks';

export function Home() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [content, setContent] = useState<string>('');

  const { name, avatar, posts } = useUser();
  const { mode, radius, isDark } = useBlur();
  const { top, bottom } = useSafeAreaInsets();

  function onOpenModal(newContent: string): void {
    setContent(newContent);
    setIsOpenModal(true);
  }

  function onCloseModal(): void {
    setIsOpenModal(false);
    setContent('');
  }

  const styles = useMemo(() => makeStyles({ top, bottom }), [top, bottom]);

  return (
    <View style={styles.container}>
      <BlurView
        targetId="0"
        radius={radius}
        type={mode}
        style={styles.blurView}
      >
        <View style={styles.blurViewContent}>
          <View style={styles.avatarWrapper}>
            <Image style={styles.avatar} source={{ uri: avatar }} />
          </View>

          <Text style={[styles.avatarName, isDark && styles.avatarNameDark]}>
            Hello, {name}!
          </Text>
        </View>
      </BlurView>

      <BlurTarget id="0" style={styles.blurTarget}>
        <FlatList
          data={posts}
          style={[styles.list, isDark && styles.listDark]}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.listItem, isDark && styles.listItemDark]}
              activeOpacity={0.85}
              onPress={() => onOpenModal(item.content)}
            >
              <Text
                style={[styles.listItemText, isDark && styles.listItemTextDark]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </BlurTarget>

      <Modal
        visible={isOpenModal}
        animationType="slide"
        onRequestClose={onCloseModal}
        statusBarTranslucent
        navigationBarTranslucent
        transparent
        hardwareAccelerated
        style={styles.modal}
      >
        <View style={styles.backdrop} onTouchStart={onCloseModal} />

        <View style={styles.wrapper}>
          <View style={styles.content}>
            <BlurTarget id="modal" style={styles.blurTarget}>
              <ScrollView
                style={[styles.modalScroll, isDark && styles.contentDark]}
                contentContainerStyle={styles.modalScrollContainer}
                showsVerticalScrollIndicator={false}
              >
                <Text
                  style={[
                    styles.modalScrollText,
                    isDark && styles.modalScrollTextDark,
                  ]}
                >
                  {content}
                </Text>
              </ScrollView>
            </BlurTarget>

            <BlurView
              targetId="modal"
              type={mode}
              radius={radius}
              style={styles.modalBlurFooter}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
