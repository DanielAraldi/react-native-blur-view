# `@danielsaraldi/react-native-blur-view` 🌫️

A simple blur view in react native based in [`@react-native-community/blur`](https://github.com/Kureev/react-native-blur).

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
- [Properties](#properties)
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
cd ios && pod install
```

## Usage

```tsx
import { BlurView } from '@danielsaraldi/react-native-blur-view';

// ...

return (
  <BlurView style={styles.blurView}>
    <Text style={styles.title}>BlurView</Text>
  </BlurView>
);

export const styles = StyleSheet.create({
  blurView: {
    position: 'absolute',

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
});
```

## Properties

The `BlurView` component is an extends the same properties of the a `View` component.

| Property | Description                | Default     | Platform |
| -------- | -------------------------- | ----------- | -------- |
| `type`   | Color type of the overlay. | `light`     | All      |
| `radius` | Blur radius `0` - `100`.   | `10`        | All      |
| `style`  | The View style.            | `undefined` | All      |

An important detail, when a value less than `0` or greater than `100` are provided for `radius` property, the `radius` is clipped.

### Blur Types

| Property                    | Description                                                                                                             | Platform |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------- |
| `x-light`                   | The area of the view is lighter than the underlying view.                                                               | All      |
| `light`                     | The area of the view is the same approximate lightness of the underlying view.                                          | All      |
| `dark`                      | The area of the view is darker than the underlying view.                                                                | All      |
| `regular`                   | A regular blur style that adapts to the user interface style. (**iOS >= 10**)                                           | All      |
| `prominent`                 | A blur style for making content more prominent that adapts to the user interface style. (**iOS >= 10**)                 | All      |
| `chrome-material`           | An adaptable blur effect that creates the appearance of the system chrome. (**iOS >= 13**)                              | All      |
| `material`                  | An adaptable blur effect that creates the appearance of a material with normal thickness. (**iOS >= 13**)               | All      |
| `thick-material`            | An adaptable blur effect that creates the appearance of a material that’s thicker than normal. (**iOS >= 13**)          | All      |
| `thin-material`             | An adaptable blur effect that creates the appearance of a thin material. (**iOS >= 13**)                                | All      |
| `ultra-thin-material`       | An adaptable blur effect that creates the appearance of an ultra-thin material. (**iOS >= 13**)                         | All      |
| `chrome-material-light`     | A blur effect that creates the appearance of the system chrome and is always light. (**iOS >= 13**)                     | All      |
| `material-light`            | A blur effect that creates the appearance of a material with normal thickness and is always light. (**iOS >= 13**)      | All      |
| `thick-material-light`      | A blur effect that creates the appearance of a material that’s thicker than normal and is always light. (**iOS >= 13**) | All      |
| `thin-material-light`       | A blur effect that creates the appearance of a thin material and is always light. (**iOS >= 13**)                       | All      |
| `ultra-thin-material-light` | A blur effect that creates the appearance of an ultra-thin material and is always light. (**iOS >= 13**)                | All      |
| `chrome-material-dark`      | A blur effect that creates the appearance of the system chrome and is always dark. (**iOS >= 13**)                      | All      |
| `material-dark`             | A blur effect that creates the appearance of a material with normal thickness and is always dark. (**iOS >= 13**)       | All      |
| `thick-material-dark`       | A blur effect that creates the appearance of a material that’s thicker than normal and is always dark. (**iOS >= 13**)  | All      |
| `thin-material-dark`        | A blur effect that creates the appearance of a thin material and is always dark. (**iOS >= 13**)                        | All      |
| `ultra-thin-material-dark`  | A blur effect that creates the appearance of an ultra-thin material and is always dark. (**iOS >= 13**)                 | All      |

## Platform Differences

### Android

On Android platforms, the component utilizes the BlurView library to offer native blur effects with hardware-accelerated rendering.

### iOS

On iOS all types are supported by default. However, on Android they are RGBA colors to simulate the same blur color.

## Expo

In Expo, you need to convert to a [custom development build](https://docs.expo.dev/develop/development-builds/introduction/) or use [prebuild](https://docs.expo.dev/workflow/continuous-native-generation/). You can use also React Native without Expo.

## TypeScript Support

Full TypeScript support with proper type definitions!

```ts
import { BlurViewType, BlurViewProps } from '@danielsaraldi/react-native-blur';

export const INITIAL_BLUR_TYPE: BlurViewType = 'x-light';

export interface CustomBlurViewProps extends BlurViewProps {
  // ...
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob) and using the [BlurView](https://github.com/Dimezis/BlurView) library of the [Dimezis](https://github.com/Dimezis) on Android ❤️
