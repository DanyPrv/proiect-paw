module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'linebreak-style': ['error', 'windows'],
    'react/jsx-props-no-spreading': 'off',
    'no-nested-ternary': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
  },
};
