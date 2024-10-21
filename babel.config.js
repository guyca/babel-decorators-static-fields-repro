module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-typescript', { 'onlyRemoveTypeImports': true, 'allowDeclareFields': true }],
  ],
  plugins: [
    'react-obsidian/dist/transformers/babel-plugin-obsidian',
    ['@babel/plugin-proposal-decorators', { version: '2023-11' }],
    '@babel/plugin-transform-class-static-block',
    ['@babel/plugin-transform-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }  ]
  ],
};
