# [1.2.0](https://github.com/DanielAraldi/react-native-blur-view/compare/v1.1.1...v1.2.0) (2025-12-06)


### Features

* add JSDoc for all component ([428f76d](https://github.com/DanielAraldi/react-native-blur-view/commit/428f76dd2809a90754ae6bb97e3ae7c2e1aeb1dd))
* **ios:** add the new `VibrancyView` component ([ccf9181](https://github.com/DanielAraldi/react-native-blur-view/commit/ccf91812b4f169774accdeb71fbc125d09008111))
* **ios:** and constraint effect in child ([868e0aa](https://github.com/DanielAraldi/react-native-blur-view/commit/868e0aaca7f53615a8dc94083763879fec53b4a4))
* **ios:** remove `BlurView` as parent class of `VibrancyView` component ([daaea71](https://github.com/DanielAraldi/react-native-blur-view/commit/daaea713e50dc8f4bf647379a724475fabc51e69))
* **ios:** update `overlayColor` and `blurRadius` property in `VibrancyView` component ([0010706](https://github.com/DanielAraldi/react-native-blur-view/commit/00107060fd01ebd7927f6222d0ac45dbf8513ea4))
* update app example ([7681fc7](https://github.com/DanielAraldi/react-native-blur-view/commit/7681fc769242f549369774cb9a94173dfe22fdc4))

## [1.1.1](https://github.com/DanielAraldi/react-native-blur-view/compare/v1.1.0...v1.1.1) (2025-12-05)


### Bug Fixes

* **android:** adjust `BlurView` with absolute positioning on hot reload and keyboard events ([53e1a08](https://github.com/DanielAraldi/react-native-blur-view/commit/53e1a08da92100447fbdb144234ec0ea1d225e5f))

# [1.1.0](https://github.com/DanielAraldi/react-native-blur-view/compare/v1.0.0...v1.1.0) (2025-11-20)


### Features

* add `reducedTransparencyFallbackColor` property to the `BlurView` component ([075de41](https://github.com/DanielAraldi/react-native-blur-view/commit/075de417897aaac6abf2bbdc7c472b9ad6a28d0e))

# [1.0.0](https://github.com/DanielAraldi/react-native-blur-view/compare/v0.8.2...v1.0.0) (2025-10-30)


### Bug Fixes

* add `targetId` in `BlurView` component in example app ([7821e37](https://github.com/DanielAraldi/react-native-blur-view/commit/7821e37c4df293188f3380b3c87a5ff2810be65c))
* **android:** add momently hank to radius value ([905ff4f](https://github.com/DanielAraldi/react-native-blur-view/commit/905ff4f2a08f2291061ad98b5c11dfca060786c2))
* **android:** adjust scale factor to be default value ([f15c5f7](https://github.com/DanielAraldi/react-native-blur-view/commit/f15c5f71407fb045aa4d7b79a55e33a26c474efb))
* **android:** change target via page index in bottom tabs transaction ([4eef388](https://github.com/DanielAraldi/react-native-blur-view/commit/4eef3884302c14bf2ff7604a468b397fc232c714))
* **android:** fix `RenderScript` crash when `radius` > `25` ([19199fa](https://github.com/DanielAraldi/react-native-blur-view/commit/19199fa3aa58395cc0b3f0bb5876e0db57769b4c))
* **android:** force `isInitialized` as `false` on `setRadius` method ([c25ec85](https://github.com/DanielAraldi/react-native-blur-view/commit/c25ec85896b8b1b6c430bc505cabb2ca80087206))
* **android:** remove old overlay color enum ([d36854c](https://github.com/DanielAraldi/react-native-blur-view/commit/d36854cd9174b2b445bf31ca2b0ad4c49d176a26))
* **android:** revert blur radius intensity for SDK <= 31 ([df2890e](https://github.com/DanielAraldi/react-native-blur-view/commit/df2890ed9f2bc4e1ee734a824045330c4987ee7f))
* **android:** revert blur radius intensity for SDK <= 31 again 🤣 ([b0951d6](https://github.com/DanielAraldi/react-native-blur-view/commit/b0951d67342a912c5a133cf10d8ef8c670cea26d))
* **ios:** small adjust in dark mode in the example app ([01a9cbd](https://github.com/DanielAraldi/react-native-blur-view/commit/01a9cbdf11a76690ca815608470ba41a839095b1))
* remove unnecessary configuration in release CI ([e9f7203](https://github.com/DanielAraldi/react-native-blur-view/commit/e9f7203ccd0628d11d0d86a9f56f086cd955f466))


### Features

* add the new `BlurTarget` component to the used by Android as target of the blur effect ([7d96588](https://github.com/DanielAraldi/react-native-blur-view/commit/7d9658812275da3900fe3d95c20d9ec7d8f6a1a8))
* **android:** add native `TargetView` ([d0fc3b2](https://github.com/DanielAraldi/react-native-blur-view/commit/d0fc3b2a8f876111c83577b2473a915a277d55be))
* **android:** integrate new native target component completely ([c0201d9](https://github.com/DanielAraldi/react-native-blur-view/commit/c0201d9e7b6338e06e2ce312334241fc99aa29f8))


### BREAKING CHANGES

* **android:** Update Dimezis `BlurView` library version for `3v` in Android

## [0.8.2](https://github.com/DanielAraldi/react-native-blur-view/compare/v0.8.1...v0.8.2) (2025-10-25)


### Bug Fixes

* **android:** revert blur radius intensity for SDK <= `31` ([1f0474d](https://github.com/DanielAraldi/react-native-blur-view/commit/1f0474de95fd845fc5bc0c1f6e6d45f96efb408f))

## [0.8.1](https://github.com/DanielAraldi/react-native-blur-view/compare/v0.8.0...v0.8.1) (2025-10-24)


### Bug Fixes

* **android:** adjust `RenderScript` crash when `radius` > `25` ([fee3079](https://github.com/DanielAraldi/react-native-blur-view/commit/fee3079dba166555922048ac472cc0f87a24ab1c))
* **android:** adjust example app to android SDK 31 or lower ([4a1dd4c](https://github.com/DanielAraldi/react-native-blur-view/commit/4a1dd4ca9df5160741792f85176d4b0ce9d9e3aa))

# [0.8.0](https://github.com/DanielAraldi/react-native-blur-view/compare/v0.7.2...v0.8.0) (2025-10-08)

### Bug Fixes

- add empty `View` to the `BlurView` component to it expand when children aren't provided ([c5c254d](https://github.com/DanielAraldi/react-native-blur-view/commit/c5c254df6729a575096879c2dce46693556ecb31))
- **android:** add support compatibility and support between blur views and modals ([9543a1c](https://github.com/DanielAraldi/react-native-blur-view/commit/9543a1caec4a7add33f5b1e20650e9024c917cae))

### Features

- update example app ([4e97323](https://github.com/DanielAraldi/react-native-blur-view/commit/4e97323379104793587a5a3e0818b52776b9a6a3))

## [0.7.2](https://github.com/DanielAraldi/react-native-blur-view/compare/v0.7.1...v0.7.2) (2025-09-29)

### Bug Fixes

- adjust light, thin group, material group and trick group variant colors ([e5256ac](https://github.com/DanielAraldi/react-native-blur-view/commit/e5256ac9414ba06f5277ce36320613d42cf1ce44))
- adjust ulta thin group variant colors ([6a8da13](https://github.com/DanielAraldi/react-native-blur-view/commit/6a8da13ff39a06780a89e0b740c6d82b704aabf3))
- **android:** adjust chrome material group variant colors ([b4609ef](https://github.com/DanielAraldi/react-native-blur-view/commit/b4609efc480eb9959bd363ffeb6a4563a70770d8))
- **android:** adjust in `x-light`, `dark` and `regular` inconsistent overlay colors ([1c62a5b](https://github.com/DanielAraldi/react-native-blur-view/commit/1c62a5b15adc2fff536af147846c601d5afee652))
- **android:** adjust the intensity of the radius ([a060a40](https://github.com/DanielAraldi/react-native-blur-view/commit/a060a40aaa4257375dda5b680ecf2048a2e4031c))
- **android:** force fixed radius value when it's different of the x-light, light and dark color ([3fabf56](https://github.com/DanielAraldi/react-native-blur-view/commit/3fabf560de6b2b37ed8bd8c3a1b28f74900208c7))
- force radius to be `35` when it isn't `x-light` or `light` or `dark` ([fa10a47](https://github.com/DanielAraldi/react-native-blur-view/commit/fa10a47be5a08d6c6e57afe076fee4e0a78d2728))
- small adjust in alpha value of the `light` variant ([a2cd0b4](https://github.com/DanielAraldi/react-native-blur-view/commit/a2cd0b4d833c30854cfbc2e4b058a95dd04dba04))

### Performance Improvements

- **android:** remove unnecessary react hook in the `BlurView` component ([d00f514](https://github.com/DanielAraldi/react-native-blur-view/commit/d00f5143a8f005b6a96e522276dd00fc524bce0a))

## [0.7.1](https://github.com/DanielAraldi/react-native-blur-view/compare/v0.7.0...v0.7.1) (2025-08-31)

### Bug Fixes

- **android:** transition issue with RNScreens ([9148ff6](https://github.com/DanielAraldi/react-native-blur-view/commit/9148ff61cf5f6882d4f505289b584d302a3d9386))

# [0.7.0](https://github.com/DanielAraldi/react-native-blur-view/compare/v0.6.7...v0.7.0) (2025-08-26)

### Bug Fixes

- **ios:** update XCode version ([3fb6af1](https://github.com/DanielAraldi/react-native-blur-view/commit/3fb6af1f5fd4aacea978d6660f5e64d2ae9fd54c))

### Features

- **android:** rename `BlurViewView` to `BlurView` and add new overlay colors with background active ([f11aa5f](https://github.com/DanielAraldi/react-native-blur-view/commit/f11aa5fab7753cdbafffaeb2bf96d62485c8c52b))
- force node version to `20.x` and remove pull request to main in release action ([7509624](https://github.com/DanielAraldi/react-native-blur-view/commit/7509624c441855a3a9763284da5922c705c6b5f0))
- **ios:** rename `BlurViewIos` to `BlurView` and add dealloc memory with clipped ([9e3e5dc](https://github.com/DanielAraldi/react-native-blur-view/commit/9e3e5dcd58ae05ae0b672a48efa3e4f392f555e0))
- redesign of fabric types and components for each OS ([3dc2bba](https://github.com/DanielAraldi/react-native-blur-view/commit/3dc2bba397906b3f4e566bc012b5329e7a43211d))

## <small>0.6.7 (2025-08-13)</small>

- docs: update documentation ([2284d74](https://github.com/DanielAraldi/react-native-blur-view/commit/2284d74))
- fix(android): add new property called `blurStyle` to the manager children ([41f864c](https://github.com/DanielAraldi/react-native-blur-view/commit/41f864c))
- fix(ios): force `StyleSheet.absoluteFill` to the `contentStyle` ([2f63a1d](https://github.com/DanielAraldi/react-native-blur-view/commit/2f63a1d))

## <small>0.6.6 (2025-08-13)</small>

- docs: add specific comportment for Android devices ([fcb32f6](https://github.com/DanielAraldi/react-native-blur-view/commit/fcb32f6))
- fix: force version of the release-it in 17.10.x ([5f1e895](https://github.com/DanielAraldi/react-native-blur-view/commit/5f1e895))

## <small>0.6.5 (2025-08-12)</small>

- fix: add `permissions` contents write in release action ([5e6f9e3](https://github.com/DanielAraldi/react-native-blur-view/commit/5e6f9e3))
- docs: add new topic in summary ([9bbfce3](https://github.com/DanielAraldi/react-native-blur-view/commit/9bbfce3))

## <small>0.6.4 (2025-08-12)</small>

- docs: add documentation about "How BlurView works with and without children?" ([295e2c3](https://github.com/DanielAraldi/react-native-blur-view/commit/295e2c3))
- fix: small adjust in default values of the `blurStyle` ([390dcd9](https://github.com/DanielAraldi/react-native-blur-view/commit/390dcd9))
- fix: small adjust in release action ([95b009e](https://github.com/DanielAraldi/react-native-blur-view/commit/95b009e))

## <small>0.6.3 (2025-08-12)</small>

- fix: improve example ([8d61354](https://github.com/DanielAraldi/react-native-blur-view/commit/8d61354))
- fix(ios): add `StyleSheet.absoluteFill` as default value when `blurStyle` doesn't provided ([ad29504](https://github.com/DanielAraldi/react-native-blur-view/commit/ad29504))
- docs: add new value as default in `blurStyle` ([a23d76b](https://github.com/DanielAraldi/react-native-blur-view/commit/a23d76b))

## <small>0.6.2 (2025-08-12)</small>

- fix(android): force `clipToOutline` and `clipChildren` as `true` to remove blur color outside view ([fd3de66](https://github.com/DanielAraldi/react-native-blur-view/commit/fd3de66))

## <small>0.6.1 (2025-08-11)</small>

- fix: resolve not find `BlurView` component config for native component ([6eaecd4](https://github.com/DanielAraldi/react-native-blur-view/commit/6eaecd4))
- fix(ios): resolve invalid `Cls` name in ios class protocol ([20a9e18](https://github.com/DanielAraldi/react-native-blur-view/commit/20a9e18))
- refactor(android): simplify get currency activity ([6af28da](https://github.com/DanielAraldi/react-native-blur-view/commit/6af28da))

## 0.6.0 (2025-08-11)

- feat: fix issue when changing blur type and add new type color (x-light) for Android ([10096fa](https://github.com/DanielAraldi/react-native-blur-view/commit/10096fa))

## <small>0.5.4 (2025-08-11)</small>

- fix: add issue templates ([412beef](https://github.com/DanielAraldi/react-native-blur-view/commit/412beef))

## <small>0.5.3 (2025-08-10)</small>

- fix(ios): remove undeclared `toString` function in `overlayColor` to build release work ([08d674f](https://github.com/DanielAraldi/react-native-blur-view/commit/08d674f))

## <small>0.5.2 (2025-06-18)</small>

- fix(ios): remove `pointerEvents` none in main `View` and content `View` ([6259c76](https://github.com/DanielAraldi/react-native-blur-view/commit/6259c76))

## <small>0.5.1 (2025-06-18)</small>

- fix: add autolinking ([60fec22](https://github.com/DanielAraldi/react-native-blur-view/commit/60fec22))
- fix: adjust in import not found in example ([8352cd1](https://github.com/DanielAraldi/react-native-blur-view/commit/8352cd1))
- fix: small adjusts in example ([3505757](https://github.com/DanielAraldi/react-native-blur-view/commit/3505757))
- fix(ios): add `blurStyle` and `contentStyle` default values in JSDoc ([b671570](https://github.com/DanielAraldi/react-native-blur-view/commit/b671570))
- fix(ios): add dependencies and targets in `.podspec` file ([4b35c40](https://github.com/DanielAraldi/react-native-blur-view/commit/4b35c40))
- docs: add expo support documentation ([5611ea1](https://github.com/DanielAraldi/react-native-blur-view/commit/5611ea1))
- docs: add github version badge in documentation ([d49592a](https://github.com/DanielAraldi/react-native-blur-view/commit/d49592a))

## 0.5.0 (2025-06-17)

- chore: bump version ([a66b179](https://github.com/DanielAraldi/react-native-blur-view/commit/a66b179))
- chore: bump version ([136fbc7](https://github.com/DanielAraldi/react-native-blur-view/commit/136fbc7))
- ci: add again NPM configuration ([6b0c93e](https://github.com/DanielAraldi/react-native-blur-view/commit/6b0c93e))
- ci: add git configuration ([0cb3433](https://github.com/DanielAraldi/react-native-blur-view/commit/0cb3433))
- ci: add git configuration again ([f104457](https://github.com/DanielAraldi/react-native-blur-view/commit/f104457))
- ci: bump version ([e713c98](https://github.com/DanielAraldi/react-native-blur-view/commit/e713c98))
- ci: change git credentials ([9dfed6c](https://github.com/DanielAraldi/react-native-blur-view/commit/9dfed6c))
- ci: move `release-it` configuration to the package ([bc68ea8](https://github.com/DanielAraldi/react-native-blur-view/commit/bc68ea8))
- ci: remove git configuration ([039ebb3](https://github.com/DanielAraldi/react-native-blur-view/commit/039ebb3))
- ci: remove node configuration in `release` file ([783916c](https://github.com/DanielAraldi/react-native-blur-view/commit/783916c))
- feat: bump version ([70cdcd7](https://github.com/DanielAraldi/react-native-blur-view/commit/70cdcd7))

## <small>0.1.6 (2025-06-16)</small>

- chore: add `src` folder in `.npmignore` file ([bec1c15](https://github.com/DanielAraldi/react-native-blur-view/commit/bec1c15))

## <small>0.1.5 (2025-06-16)</small>

- docs: small changes in `CHANGELOG.md` ([11e2f03](https://github.com/DanielAraldi/react-native-blur-view/commit/11e2f03))
- docs: update main documentation ([b592afe](https://github.com/DanielAraldi/react-native-blur-view/commit/b592afe))
- chore: add `.vscode` folder to the `.npmignore` file ([2978726](https://github.com/DanielAraldi/react-native-blur-view/commit/2978726))

## <small>0.1.4 (2025-06-16)</small>

- fix: change name in `package` ([48c95ff](https://github.com/DanielAraldi/react-native-blur-view/commit/48c95ff))
- chore: change access to the public in `publishConfig` ([33a19e5](https://github.com/DanielAraldi/react-native-blur-view/commit/33a19e5))

## <small>0.1.3 (2025-06-16)</small>

- ci: go back to `--immutable` command before install in `yarn` ([03232ec](https://github.com/DanielAraldi/react-native-blur-view/commit/03232ec))

## <small>0.1.2 (2025-06-16)</small>

- ci: remove `conventional-changelog` resolutions ([4fb83ff](https://github.com/DanielAraldi/react-native-blur-view/commit/4fb83ff))

## <small>0.1.1 (2025-06-16)</small>

- ci: force clean cache and frozen lockfile in setup action ([e940cdc](https://github.com/DanielAraldi/react-native-blur-view/commit/e940cdc))

## <small>0.1.0 (2025-06-16)</small>

- chore: add `.npmignore` file ([aa95ea5](https://github.com/DanielAraldi/react-native-blur-view/commit/aa95ea5))
- chore: add `release-it` configuration ([e558bb5](https://github.com/DanielAraldi/react-native-blur-view/commit/e558bb5))
- chore: add prepack command ([f189f86](https://github.com/DanielAraldi/react-native-blur-view/commit/f189f86))
- chore: change version to the `0.0.0` ([47c9197](https://github.com/DanielAraldi/react-native-blur-view/commit/47c9197))
- chore: remove unnecessary `.tgz` ([d8361b3](https://github.com/DanielAraldi/react-native-blur-view/commit/d8361b3))
- chore: update `pbxproj` ([a8e2ce5](https://github.com/DanielAraldi/react-native-blur-view/commit/a8e2ce5))
- chore: update `react-native` version to the latest ([7cf70c9](https://github.com/DanielAraldi/react-native-blur-view/commit/7cf70c9))
- chore(ios): add `podspec` command ([c4a3868](https://github.com/DanielAraldi/react-native-blur-view/commit/c4a3868))
- fix: add correct property and instance of the `BlurView` ([7fd420f](https://github.com/DanielAraldi/react-native-blur-view/commit/7fd420f))
- fix: add possibility in `BlurView` on iOS has children ([3acfd7a](https://github.com/DanielAraldi/react-native-blur-view/commit/3acfd7a))
- fix: adjust `ref` types and default `radius` values ([a46bec0](https://github.com/DanielAraldi/react-native-blur-view/commit/a46bec0))
- fix: change light overlay color ([93cc2bd](https://github.com/DanielAraldi/react-native-blur-view/commit/93cc2bd))
- fix: remove `3.3f` radius in `createViewInstance` ([96bfb6f](https://github.com/DanielAraldi/react-native-blur-view/commit/96bfb6f))
- fix: remove unnecessary `isEnabled` property ([99cab75](https://github.com/DanielAraldi/react-native-blur-view/commit/99cab75))
- fix: remove unnecessary conditional ([e865ad3](https://github.com/DanielAraldi/react-native-blur-view/commit/e865ad3))
- fix: resolver invalid package configuration in `exports` ([3255731](https://github.com/DanielAraldi/react-native-blur-view/commit/3255731))
- fix(android): initialize default blur radius as `10f` in Android ([80f6627](https://github.com/DanielAraldi/react-native-blur-view/commit/80f6627))
- fix(android): remove incorrect clip radius in Android ([d4cfc27](https://github.com/DanielAraldi/react-native-blur-view/commit/d4cfc27))
- fix(android): remove unnecessary `autoUpdate` property in native android ([d1dab3b](https://github.com/DanielAraldi/react-native-blur-view/commit/d1dab3b))
- fix(android): resolve `react-android` not found implementation ([7498d4e](https://github.com/DanielAraldi/react-native-blur-view/commit/7498d4e))
- fix(android): start `BlurView` in Android as enabled ([8d8ad7b](https://github.com/DanielAraldi/react-native-blur-view/commit/8d8ad7b))
- fix(ios): remove unnecessary `VibrancyView` and go back to the `BlurView` effect only ([8ac7e4e](https://github.com/DanielAraldi/react-native-blur-view/commit/8ac7e4e))
- fix(ios): resolve `podspec` installation dependencies ([652ffd5](https://github.com/DanielAraldi/react-native-blur-view/commit/652ffd5))
- fix(ios): resolve ios build problem ([583691e](https://github.com/DanielAraldi/react-native-blur-view/commit/583691e))
- docs: add more information about installation and properties of the `BlurView` component ([15d94be](https://github.com/DanielAraldi/react-native-blur-view/commit/15d94be))
- docs: add new usage example and summary in the main documentation ([7441eee](https://github.com/DanielAraldi/react-native-blur-view/commit/7441eee))
- docs: add previews `.gif` ([6758f72](https://github.com/DanielAraldi/react-native-blur-view/commit/6758f72))
- docs: add some mentions in the documentation ([b0e3abc](https://github.com/DanielAraldi/react-native-blur-view/commit/b0e3abc))
- docs: add warning to the new architecture in documentation ([6d269a2](https://github.com/DanielAraldi/react-native-blur-view/commit/6d269a2))
- docs: small adjust in blur types name in iOS 13 ([927d83a](https://github.com/DanielAraldi/react-native-blur-view/commit/927d83a))
- docs: small adjust mentions ([f4e8a5f](https://github.com/DanielAraldi/react-native-blur-view/commit/f4e8a5f))
- docs: update documentation ([86ceca5](https://github.com/DanielAraldi/react-native-blur-view/commit/86ceca5))
- docs: update radius value by default and add previews gif ([660b6ce](https://github.com/DanielAraldi/react-native-blur-view/commit/660b6ce))
- docs: update usage example ([ee28afe](https://github.com/DanielAraldi/react-native-blur-view/commit/ee28afe))
- refactor: lint adjust ([ce44fb7](https://github.com/DanielAraldi/react-native-blur-view/commit/ce44fb7))
- refactor: lint adjust ([c13c1d0](https://github.com/DanielAraldi/react-native-blur-view/commit/c13c1d0))
- refactor: move `BlurViewProps` to the `.native` ([37cf963](https://github.com/DanielAraldi/react-native-blur-view/commit/37cf963))
- refactor: move `overlayColors` to the global styles ([99f2b67](https://github.com/DanielAraldi/react-native-blur-view/commit/99f2b67))
- refactor(android): swap by `chip` function inside of `handleClipRadius` ([ad47ad2](https://github.com/DanielAraldi/react-native-blur-view/commit/ad47ad2))
- feat: add `BlurViewType` available to each device engine ([fa4965d](https://github.com/DanielAraldi/react-native-blur-view/commit/fa4965d))
- feat: add `clip` function for handle blur radius ([8318109](https://github.com/DanielAraldi/react-native-blur-view/commit/8318109))
- feat: init iOS configuration ([57e0b07](https://github.com/DanielAraldi/react-native-blur-view/commit/57e0b07))
- feat: initial commit ([331e957](https://github.com/DanielAraldi/react-native-blur-view/commit/331e957))
- feat: initialize `BlurView` component with `radius` property by default `10` ([c366922](https://github.com/DanielAraldi/react-native-blur-view/commit/c366922))
- feat: move `ref` to the main `View` on iOS and change styles props names ([c5abe1a](https://github.com/DanielAraldi/react-native-blur-view/commit/c5abe1a))
- feat: remove unnecessary `autoUpdate` property ([855db93](https://github.com/DanielAraldi/react-native-blur-view/commit/855db93))
- feat(ios): add `radius`, `autoUpdate` and `isEnabled` properties for iOS `BlurView` ([24ffbe5](https://github.com/DanielAraldi/react-native-blur-view/commit/24ffbe5))
- feat(ios): add `VibrancyView` with blur effect to mount component with children ([0a05385](https://github.com/DanielAraldi/react-native-blur-view/commit/0a05385))
- feat(ios): add blur effect to the iOS ([e695321](https://github.com/DanielAraldi/react-native-blur-view/commit/e695321))
- feat(ios): create a new `codegen` component to get `VibrancyView` only ([c82345f](https://github.com/DanielAraldi/react-native-blur-view/commit/c82345f))
- ci: add another setup ruby, update bundler, and remove `Gemfile.lock` before bundle install ([ee0bc71](https://github.com/DanielAraldi/react-native-blur-view/commit/ee0bc71))
- ci: add setup ruby and update bundler ([10a7772](https://github.com/DanielAraldi/react-native-blur-view/commit/10a7772))
- ci: add update bundler in install cocoapods step ([0e36c5f](https://github.com/DanielAraldi/react-native-blur-view/commit/0e36c5f))
- ci: remove job tests ([d033ac6](https://github.com/DanielAraldi/react-native-blur-view/commit/d033ac6))
- ci(ios): add manually cocoapods installation ([63880cc](https://github.com/DanielAraldi/react-native-blur-view/commit/63880cc))
- ci(ios): change ruby version and update bundler ([9440c34](https://github.com/DanielAraldi/react-native-blur-view/commit/9440c34))
- ci(ios): change setup and bundler version ([fdcf516](https://github.com/DanielAraldi/react-native-blur-view/commit/fdcf516))
- ci(ios): remove `bundle install` command in install cocoapods step ([ddcb32c](https://github.com/DanielAraldi/react-native-blur-view/commit/ddcb32c))
- perf: change `useCallback` in clip radius by `useMemo` ([422c8a1](https://github.com/DanielAraldi/react-native-blur-view/commit/422c8a1))
- perf: remove unnecessary `Array.from` inside `useMemo` ([197e0d8](https://github.com/DanielAraldi/react-native-blur-view/commit/197e0d8))
- perf(android): add equivalent radius for android radius property: ([6b01283](https://github.com/DanielAraldi/react-native-blur-view/commit/6b01283))
- style: add `zIndex` 9999 to always it shows blur effect ([1ff550c](https://github.com/DanielAraldi/react-native-blur-view/commit/1ff550c))
- style: small change in the `fontSize` of the example App ([2c32f89](https://github.com/DanielAraldi/react-native-blur-view/commit/2c32f89))
- test(example): add default properties ([6aed1a2](https://github.com/DanielAraldi/react-native-blur-view/commit/6aed1a2))
- build: add infer types in `BlurView` component ([aee7f5b](https://github.com/DanielAraldi/react-native-blur-view/commit/aee7f5b))
- build: add some rules for `tsconfig.json` ([6f48d5d](https://github.com/DanielAraldi/react-native-blur-view/commit/6f48d5d))
