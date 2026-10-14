import type { RootStackParamList } from '../navigation/routes';

export interface HomeOptionData {
  route: Exclude<keyof RootStackParamList, 'Home'>;
  label: string;
  description: string;
}
