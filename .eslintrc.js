module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb', 'plugin:react/recommended'],
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};
