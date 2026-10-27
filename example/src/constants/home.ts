import type { HomeOptionData } from '../@types';
import { isIos } from '../utils';

const OPTIONS: HomeOptionData[] = [
  {
    route: 'Blur',
    label: 'Blur',
    description: 'Control the blur radius with a slider',
  },
  {
    route: 'BorderRadius',
    label: 'Border Radius',
    description: 'Control the border radius with a slider',
  },
  {
    route: 'Vibrancy',
    label: 'Vibrancy',
    description: 'Control the vibrancy radius with a slider (iOS only)',
  },
  {
    route: 'Modal',
    label: 'Modal',
    description: 'Modal with a blurred backdrop',
  },
  {
    route: 'Reanimated',
    label: 'Reanimated',
    description: 'Blur radius animated from 1 to 100',
  },
  {
    route: 'Gesture',
    label: 'Gesture',
    description: 'Drag the blur view with a pan gesture',
  },
  {
    route: 'Types',
    label: 'Types',
    description: isIos ? 'All blur types and effect styles' : 'All blur types',
  },
];

export const HOME_OPTIONS: HomeOptionData[] = OPTIONS.filter(
  ({ route }) => isIos || route !== 'Vibrancy'
);
