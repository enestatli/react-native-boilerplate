module.exports = {
  root: true,
  extends: ['@react-native-community'],
  rules: {
    semi: ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'react-native/no-inline-styles': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
}
