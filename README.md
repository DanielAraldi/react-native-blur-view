# `react-native-blur-view` 🌫️

A simple blur view in react native based in [`@react-native-community/blur`](https://github.com/Kureev/react-native-blur).

## Summary

- [Installation](#installation)
- [Usage](#usage)
  - [Properties](#properties)
    - [Blur Types](#blur-types)
    - [Blur Types (Only iOS >= 10)](#blur-types-only-ios--10)
    - [Blur Types (Only iOS >= 13)](#blur-types-only-ios--13)
- [Contributing](#contributing)
- [License](#license)

## Installation

```sh
npm install react-native-blur-view
```

Install native dependencies (iOS only):

```sh
cd ios && pod install
```

## Usage

```js
import { BlurView } from 'react-native-blur-view';

// ...

return (
  <View style={styles.wrapper}>
    <BlurView style={styles.blurView}>
      <Text style={styles.title}>BlurView</Text>
    </BlurView>
  </View>
);
```

### Properties

The `BlurView` component is an extends the same properties of the a `View` component.

| Property       | Description                                          | Default     | Platform |
| -------------- | ---------------------------------------------------- | ----------- | -------- |
| `type`         | Color type of the overlay.                           | `light`     | All      |
| `radius`       | Blur radius `0` - `100`.                             | `25`        | All      |
| `contentStyle` | Style for the `BlurView` component children content. | `undefined` | iOS      |
| `blurStyle`    | Style for the `BlurView` component.                  | `undefined` | iOS      |

In **Android**, you can use `style` to set blur style content.

#### Blur Types

| Property | Description                                                                    | Platform |
| -------- | ------------------------------------------------------------------------------ | -------- |
| `xlight` | The area of the view is lighter than the underlying view.                      | iOS      |
| `light`  | The area of the view is the same approximate lightness of the underlying view. | All      |
| `dark`   | The area of the view is darker than the underlying view.                       | All      |

#### Blur Types (Only iOS >= 10)

| Property    | Description                                                                             | Platform |
| ----------- | --------------------------------------------------------------------------------------- | -------- |
| `regular`   | A regular blur style that adapts to the user interface style.                           | iOS      |
| `prominent` | A blur style for making content more prominent that adapts to the user interface style. | iOS      |

#### Blur Types (Only iOS >= 13)

| Property                 | Description                                                                                             | Platform |
| ------------------------ | ------------------------------------------------------------------------------------------------------- | -------- |
| `chromeMaterial`         | An adaptable blur effect that creates the appearance of the system chrome.                              | iOS      |
| `material`               | An adaptable blur effect that creates the appearance of a material with normal thickness.               | iOS      |
| `thickMaterial`          | An adaptable blur effect that creates the appearance of a material that’s thicker than normal.          | iOS      |
| `thinMaterial`           | An adaptable blur effect that creates the appearance of a thin material.                                | iOS      |
| `ultraThinMaterial`      | An adaptable blur effect that creates the appearance of an ultra-thin material.                         | iOS      |
| `chromeMaterialLight`    | A blur effect that creates the appearance of the system chrome and is always light.                     | iOS      |
| `materialLight`          | A blur effect that creates the appearance of a material with normal thickness and is always light.      | iOS      |
| `thickMaterialLight`     | A blur effect that creates the appearance of a material that’s thicker than normal and is always light. | iOS      |
| `thinMaterialLight`      | A blur effect that creates the appearance of a thin material and is always light.                       | iOS      |
| `ultraThinMaterialLight` | A blur effect that creates the appearance of an ultra-thin material and is always light.                | iOS      |
| `chromeMaterialDark`     | A blur effect that creates the appearance of the system chrome and is always dark.                      | iOS      |
| `materialDark`           | A blur effect that creates the appearance of a material with normal thickness and is always dark.       | iOS      |
| `thickMaterialDark`      | A blur effect that creates the appearance of a material that’s thicker than normal and is always dark.  | iOS      |
| `thinMaterialDark`       | A blur effect that creates the appearance of a thin material and is always dark.                        | iOS      |
| `ultraThinMaterialDark`  | A blur effect that creates the appearance of an ultra-thin material and is always dark.                 | iOS      |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob) and using the [BlurView](https://github.com/Dimezis/BlurView) library of the [Dimezis](https://github.com/Dimezis) ❤️
