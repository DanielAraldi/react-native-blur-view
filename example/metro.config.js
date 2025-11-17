const path = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const root = path.resolve(__dirname, '..');
const pak = require('../package.json');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  projectRoot: __dirname,
  watchFolders: [root],

  // We need to make sure that only one version is loaded for peerDependencies
  // So we block them at the root, and alias them to the versions in example's node_modules
  resolver: {
    blacklistRE: new RegExp(
      `^${escape(path.join(root, 'node_modules'))}\\/.*$`
    ),

    extraNodeModules: {
      // Redirect the library package to the parent source
      [pak.name]: path.join(root, 'src'),
      // Redirect react-native from parent to example
      'react-native': path.resolve(__dirname, 'node_modules/react-native'),
      'react': path.resolve(__dirname, 'node_modules/react'),
    },

    // Tell Metro to resolve the library package from the parent directory
    nodeModulesPaths: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(root, 'node_modules'),
    ],

    // Resolve source files instead of built files
    resolveRequest: (context, moduleName, platform) => {
      if (moduleName === pak.name) {
        return {
          filePath: path.join(root, 'src', 'index.ts'),
          type: 'sourceFile',
        };
      }
      // Fallback to default resolution
      return context.resolveRequest(context, moduleName, platform);
    },
  },

  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};

function escape(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
