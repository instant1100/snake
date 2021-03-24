// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');

const webpackConfigPath = './webpack.config.js';

module.exports = {
  extends: ['airbnb'],
  parser: '@typescript-eslint/parser',
  globals: {
    __DEV__: true,
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    'arrow-body-style': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'default-case': 0,
    'import/extensions': 'off',
    'import/prefer-default-export': 0,
    'no-case-declarations': 0,
    'no-plusplus': 0,
    'no-param-reassign': 0,
    'no-unused-vars': 'warn',
    'no-use-before-define': 'off', // https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined/64024916#64024916
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react/no-array-index-key': 0,
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
};
