import type { BlurRadiusData, BlurTypeData, EffectStyleData } from '../@types';

export const NAVIGATION_ICONS = {
  Blurs: '🌫️',
  Vibrancies: '🎨',
  Settings: '⚙️',
} as const;

export const BLUR_TYPES_DATA: BlurTypeData[] = [
  {
    type: 'x-light',
    label: 'X-Light ☀️',
  },
  {
    type: 'light',
    label: 'Light 🌤️',
  },
  {
    type: 'dark',
    label: 'Dark 🌑',
  },
  {
    type: 'regular',
    label: 'Regular ⚪',
  },
  {
    type: 'prominent',
    label: 'Prominent 💎',
  },
  {
    type: 'material',
    label: 'Material 🪟',
  },
  {
    type: 'material-light',
    label: 'Material Light 🔆',
  },
  {
    type: 'material-dark',
    label: 'Material Dark 🌃',
  },
  {
    type: 'thin-material',
    label: 'Thin Material 🧊',
  },
  {
    type: 'thin-material-light',
    label: 'Thin Material Light 💡',
  },
  {
    type: 'thin-material-dark',
    label: 'Thin Material Dark 🌌',
  },
  {
    type: 'chrome-material',
    label: 'Chrome Material ✨',
  },
  {
    type: 'chrome-material-light',
    label: 'Chrome Material Light 🌟',
  },
  {
    type: 'chrome-material-dark',
    label: 'Chrome Material Dark 🌠',
  },
  {
    type: 'thick-material',
    label: 'Thick Material 🧱',
  },
  {
    type: 'thick-material-light',
    label: 'Thick Material Light 🔅',
  },
  {
    type: 'thick-material-dark',
    label: 'Thick Material Dark 🌉',
  },
  {
    type: 'ultra-thin-material',
    label: 'Ultra Thin Material 💨',
  },
  {
    type: 'ultra-thin-material-light',
    label: 'Ultra Thin Material Light 🌙',
  },
  {
    type: 'ultra-thin-material-dark',
    label: 'Ultra Thin Material Dark 🌚',
  },
] as const;

export const EFFECT_STYLES_DATA: EffectStyleData[] = [
  {
    style: 'label',
    label: 'Label 🏷️',
  },
  {
    style: 'secondary-label',
    label: 'Secondary Label 🏷️',
  },
  {
    style: 'tertiary-label',
    label: 'Tertiary Label 🏷️',
  },
  {
    style: 'quaternary-label',
    label: 'Quaternary Label 🏷️',
  },
  {
    style: 'fill',
    label: 'Fill 🎨',
  },
  {
    style: 'secondary-fill',
    label: 'Secondary Fill 🎨',
  },
  {
    style: 'tertiary-fill',
    label: 'Tertiary Fill 🎨',
  },
  {
    style: 'separator',
    label: 'Separator ➗',
  },
];

export const BLUR_RADIUS_DATA: BlurRadiusData[] = [
  {
    radius: 0,
    label: 'Blur radius 0',
  },
  {
    radius: 10,
    label: 'Blur radius 10',
  },
  {
    radius: 20,
    label: 'Blur radius 20',
  },
  {
    radius: 30,
    label: 'Blur radius 30',
  },
  {
    radius: 40,
    label: 'Blur radius 40',
  },
  {
    radius: 50,
    label: 'Blur radius 50',
  },
  {
    radius: 60,
    label: 'Blur radius 60',
  },
  {
    radius: 70,
    label: 'Blur radius 70',
  },
  {
    radius: 80,
    label: 'Blur radius 80',
  },
  {
    radius: 90,
    label: 'Blur radius 90',
  },
  {
    radius: 100,
    label: 'Blur radius 100',
  },
];
