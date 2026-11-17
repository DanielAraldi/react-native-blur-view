// swift-tools-version: 6.0

import PackageDescription

let package = Package(
  name: "ReactNativeBlurView",
  platforms: [.iOS("15.1"), .tvOS("15.1")],
  products: [
    .library(name: "ReactNativeBlurView", targets: ["ReactNativeBlurView"])
  ],
  dependencies: [
    .package(name: "ReactNative", path: "../../../../xcframeworks"),
    .package(name: "React-GeneratedCode", path: "../../../ios"),
  ],
  targets: [
    .target(
      name: "ReactNativeBlurView",
      dependencies: [
        .product(name: "ReactHeaders", package: "ReactNative"),
        .product(name: "ReactNativeHeaders", package: "ReactNative"),
        .product(name: "ReactNativeDependenciesHeaders", package: "ReactNative"),
        .product(name: "ReactAppHeaders", package: "React-GeneratedCode"),
      ],
      path: "ios",
      publicHeadersPath: ".",
      cSettings: [
        .define("RCT_NEW_ARCH_ENABLED", to: "1")
      ],
      cxxSettings: [
        .define("RCT_NEW_ARCH_ENABLED", to: "1"),
        .define("DEBUG", .when(configuration: .debug)),
        .define("NDEBUG", .when(configuration: .release)),
      ],
      linkerSettings: [
        .linkedFramework("UIKit"),
        .linkedFramework("Foundation"),
        .linkedFramework("CoreGraphics"),
      ]
    )
  ],
  cxxLanguageStandard: .cxx20
)
