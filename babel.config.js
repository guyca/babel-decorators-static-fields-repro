module.exports = {
  retainLines: true,
  presets: [
    'module:metro-react-native-babel-preset',
  ],
  plugins: [
    '@babel/plugin-transform-flow-strip-types',
    'react-obsidian/dist/transformers/babel-plugin-obsidian',
    ['@babel/plugin-proposal-decorators', { version: '2023-11' }],
    '@babel/plugin-transform-class-static-block',
    ['@babel/plugin-transform-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }]
  ],
};
