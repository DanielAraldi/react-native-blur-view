import { create } from 'zustand';
import { faker } from '@faker-js/faker';
import type { UseUserStoreProps } from '../@types';

export const useUser = create<UseUserStoreProps>(() => ({
  name: faker.person.firstName(),
  avatar: faker.image.personPortrait(),
  posts: Array.from({ length: 50 }).map((_, index) => ({
    id: String(index),
    title: faker.lorem.paragraphs({ min: 1, max: 1 }),
    content: faker.lorem.paragraphs({ min: 12, max: 24 }),
  })),
}));
