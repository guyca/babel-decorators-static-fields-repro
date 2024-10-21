# babel-decorators-static-fields-repro

This repository is a reproduction of a configuration issue with Babel and TypeScript decorators. Combining decorators with static fields and `metro-react-native-babel-preset` causes a runtime error: `TypeError: _initClass is not a function`

## Steps to reproduce
1. Clone this repository
2. Run `yarn install`
3. Run `yarn build`
4. Run `yarn start`

## Possible related issues
1. https://github.com/babel/babel/issues/16373