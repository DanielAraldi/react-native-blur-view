# `@danielsaraldi/react-native-blur-view` 🌫️

A simple blur view in react native based in [`@react-native-community/blur`](https://github.com/Kureev/react-native-blur).

Support the animation transitions with [react-native-screens](https://github.com/software-mansion/react-native-screens), [react-native-navigation](https://wix.github.io/react-native-navigation) and Modals 😁.

<div align="center">
  <p>
    <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/DanielAraldi/react-native-blur-view?style=flat&color=brightgreen" />
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/%40danielsaraldi%2Freact-native-blur-view?style=flat" />
  </p>
</div>

> [!WARNING]
> This package supports **only** [new architecture](https://reactnative.dev/blog/2024/10/23/the-new-architecture-is-here).

<p align="center">
  <img
    height="756px"
    hspace="8"
    src="./.github/previews/ios.gif"
    alt="React Native Blur View on iOS"
  />
  <img
    height="756px"
    hspace="8"
    src="./.github/previews/android.gif"
    alt="React Native Blur View on Android"
  />
</p>

## Summary

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [`BlurView`](#blurview)
    - [Properties](#properties)
  - [`BlurTarget`](#blurtarget)
    - [Properties](#properties-1)
  - [`VibrancyView`](#vibrancyview)
    - [Properties](#properties-2)
- [Types](#types)
  - [Blur Types](#blur-types)
- [Platform Differences](#platform-differences)
  - [Android](#android)
  - [iOS](#ios)
- [Expo](#expo)
- [TypeScript Support](#typescript-support)
- [Contributing](#contributing)
- [License](#license)

## Installation

```sh
npm install @danielsaraldi/react-native-blur-view
# or
yarn add @danielsaraldi/react-native-blur-view
```

Install native dependencies (**iOS only**):

```sh
cd ios && pod install && cd ..
```

## Usage

```tsx
import {
  BlurView,
  BlurTarget,
  VibrancyView,
} from '@danielsaraldi/react-native-blur-view';

export default function App() {
  // ...

  return (
    <>
      <BlurView targetId="target" style={styles.blurView}>
        <Text style={styles.title}>BlurView</Text>
      </BlurView>

      <VibrancyView style={styles.vibrancyView}>
        <Text style={styles.title}>VibrancyView</Text>
      </VibrancyView>

      <BlurTarget id="target" style={styles.main}>
        <ScrollView
          style={styles.main}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {/* ... */}
        </ScrollView>
      </BlurTarget>
    </>
  );
}

export const styles = StyleSheet.create({
  blurView: {
    position: 'absolute',
    top: 0,

    width: '100%',
    height: 256,

    justifyContent: 'center',
    alignItems: 'center',
  },

  vibrancyView: {
    position: 'absolute',
    top: 256,

    width: '100%',
    height: 256,

    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',

    color: 'white',
  },

  main: {
    flex: 1,
  },

  content: {
    padding: 20,

    gap: 8,
  },
});
```

If you are using [@react-navigation/bottom-tabs](https://reactnavigation.org/docs/bottom-tab-navigator/) with blur, all screens that the bottom tabs will navigate must contain a `BlurTarget` as a parent component on them. An example below:

```tsx
// screens/MyScreen.tsx
import { useNavigation } from '@react-navigation/native';
import { BlurTarget } from '@danielsaraldi/react-native-blur-view';

export function MyScreen() {
  const { getState } = useNavigation();

  const pageIndex = getState()?.index || 0;
  const id = getState()?.routeNames[pageIndex] || 'MyScreen';

  // ...

  return (
    <BlurTarget id={id} style={styles.container}>
      {/* ... */}
    </BlurTarget>
  );
}
```

```tsx
// components/MyCustomTabs.tsx
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { BlurView } from '@danielsaraldi/react-native-blur-view';

export function MyCustomTabs(props: BottomTabBarProps) {
  const { state } = props;

  const pageIndex = getState()?.index || 0;
  const targetId = getState()?.routeNames[pageIndex] || 'MyScreen';

  // ...

  return (
    <View style={styles.container}>
      <BlurView targetId={targetId} style={styles.content}>
        {/* ... */}
      </BlurView>
    </View>
  );
}
```

The `MyCustomTabs` component must be used in the `tabBar` property of the `Navigator`'s bottom tabs. Notice that the `targetId` of the `MyScreen` screen **references** the `id` in the custom bottom tab component.

The target value **must be updated every time** a new screen is rendered, so we've used the route name in this example. However, you can explore other approaches, so feel free to do so.

**Note**: We **don't yet** have full support for nested tabs.

## Components

### `BlurView`

The `BlurView` component is an extends the same properties of the a `View` component.

#### Properties

| Property                           | Description                                   | Default     | Platform |
| ---------------------------------- | --------------------------------------------- | ----------- | -------- |
| `targetId`                         | Id of the target that will be blurred.        | `undefined` | Android  |
| `type`                             | [Blur type](#blur-types) of the overlay.      | `light`     | All      |
| `radius`                           | Blur radius `0` - `100`.                      | `10`        | All      |
| `reducedTransparencyFallbackColor` | Fallback color to reduced transparency color. | `undefined` | All      |

An important detail, when a value less than `0` or greater than `100` are provided for `radius` property, the `radius` is clipped.

### `BlurTarget`

The `BlurTarget` component is an extends the same properties of the a `View` component.

This component is exclusive and mandatory for **Android**. It's useful because we use [Dimezis's 3v library](https://github.com/Dimezis/BlurView) to apply the blur effect, so its implementation is slightly different than on iOS. On iOS the `BlurTarget` component is a common `View`.

The `BlurTarget` may not contain a `BlurView` that targets the same `BlurTarget`. The `BlurTarget` may contain other `BlurTargets` and `BlurViews` though.

#### Properties

| Property | Description                                       | Platform |
| -------- | ------------------------------------------------- | -------- |
| `id`     | Id of this target to be identified by `BlurView`. | Android  |

### `VibrancyView`

The `VibrancyView` component is an extends the same properties of the a `View` component.

This component is available for **iOS only**. It apply a vibrancy effect in children content. On Android the `VibrancyView` component is a common `View`. It's available for **iOS >= 13**.

#### Properties

| Property                           | Description                                   | Default     | Platform |
| ---------------------------------- | --------------------------------------------- | ----------- | -------- |
| `type`                             | [Blur type](#blur-types) of the overlay.      | `light`     | All      |
| `radius`                           | Blur radius `0` - `100`.                      | `10`        | All      |
| `reducedTransparencyFallbackColor` | Fallback color to reduced transparency color. | `undefined` | All      |

An important detail, when a value less than `0` or greater than `100` are provided for `radius` property, the `radius` is clipped.

## Types

These are all types of available.

### Blur Types

On iOS all types are supported, but, on Android is simulated the types using RGBA colors.

| Property                    | Description                                                                                                                                               | Platform |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `x-light`                   | The area of the view is lighter than the underlying view.                                                                                                 | All      |
| `light`                     | The area of the view is the same approximate lightness of the underlying view.                                                                            | All      |
| `dark`                      | The area of the view is darker than the underlying view.                                                                                                  | All      |
| `regular`                   | A regular blur style that adapts to the user interface style. Radius **doesn't apply** to this. (**iOS >= 10**)                                           | All      |
| `prominent`                 | A blur style for making content more prominent that adapts to the user interface style. Radius **doesn't apply** to this. (**iOS >= 10**)                 | All      |
| `chrome-material`           | An adaptable blur effect that creates the appearance of the system chrome. Radius **doesn't apply** to this. (**iOS >= 13**)                              | All      |
| `material`                  | An adaptable blur effect that creates the appearance of a material with normal thickness. Radius **doesn't apply** to this. (**iOS >= 13**)               | All      |
| `thick-material`            | An adaptable blur effect that creates the appearance of a material that’s thicker than normal. Radius **doesn't apply** to this. (**iOS >= 13**)          | All      |
| `thin-material`             | An adaptable blur effect that creates the appearance of a thin material. Radius **doesn't apply** to this. (**iOS >= 13**)                                | All      |
| `ultra-thin-material`       | An adaptable blur effect that creates the appearance of an ultra-thin material. Radius **doesn't apply** to this. (**iOS >= 13**)                         | All      |
| `chrome-material-light`     | A blur effect that creates the appearance of the system chrome and is always light. Radius **doesn't apply** to this. (**iOS >= 13**)                     | All      |
| `material-light`            | A blur effect that creates the appearance of a material with normal thickness and is always light. Radius **doesn't apply** to this. (**iOS >= 13**)      | All      |
| `thick-material-light`      | A blur effect that creates the appearance of a material that’s thicker than normal and is always light. Radius **doesn't apply** to this. (**iOS >= 13**) | All      |
| `thin-material-light`       | A blur effect that creates the appearance of a thin material and is always light. Radius **doesn't apply** to this. (**iOS >= 13**)                       | All      |
| `ultra-thin-material-light` | A blur effect that creates the appearance of an ultra-thin material and is always light. Radius **doesn't apply** to this. (**iOS >= 13**)                | All      |
| `chrome-material-dark`      | A blur effect that creates the appearance of the system chrome and is always dark. Radius **doesn't apply** to this. (**iOS >= 13**)                      | All      |
| `material-dark`             | A blur effect that creates the appearance of a material with normal thickness and is always dark. Radius **doesn't apply** to this. (**iOS >= 13**)       | All      |
| `thick-material-dark`       | A blur effect that creates the appearance of a material that’s thicker than normal and is always dark. Radius **doesn't apply** to this. (**iOS >= 13**)  | All      |
| `thin-material-dark`        | A blur effect that creates the appearance of a thin material and is always dark. Radius **doesn't apply** to this. (**iOS >= 13**)                        | All      |
| `ultra-thin-material-dark`  | A blur effect that creates the appearance of an ultra-thin material and is always dark. Radius **doesn't apply** to this. (**iOS >= 13**)                 | All      |

## Platform Differences

### Android

On Android platforms, the component utilizes the [BlurView](https://github.com/Dimezis/BlurView) library to offer native blur effects with hardware-accelerated rendering.

On Android isn't supported blurring items of a list, it's occurs because in Android is necessary first a target (`BlurTarget`) to apply the blur effect. Like blur target of item list is the list itself, applying blur to the blur isn't possible.

### iOS

On iOS all types are supported by default. However, on Android they are RGBA colors to simulate the same blur color.

## Expo

In Expo, you need to convert to a [custom development build](https://docs.expo.dev/develop/development-builds/introduction/) or use [prebuild](https://docs.expo.dev/workflow/continuous-native-generation/). You can use also React Native without Expo.

## TypeScript Support

Full TypeScript support with proper type definitions!

```ts
import {
  BlurViewType,
  VibrancyViewType,
  BlurViewProps,
  BlurTargetProps,
  VibrancyProps,
} from '@danielsaraldi/react-native-blur-view';

export const INITIAL_BLUR_TYPE: BlurViewType = 'light';
export const INITIAL_VIBRANCY_TYPE: VibrancyViewType = 'light';

export interface CustomBlurViewProps extends BlurViewProps {
  // ...
}

export interface CustomBlurTargetProps extends BlurTargetProps {
  // ...
}

export interface CustomVibrancyViewProps extends VibrancyProps {
  // ...
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob) and using the [BlurView](https://github.com/Dimezis/BlurView) library of the [Dimezis](https://github.com/Dimezis) on Android ❤️
