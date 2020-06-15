module.exports = {
  env: {
    browser: true,
    es6: true,
    jasmine: true
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "eslint:recommended",
    "plugin:jasmine/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    "react",
    "jasmine"
  ],
  rules: {
    "quotes": [ 2, "single"],
    "semi": ["error", "never"],
    "quotes": ["error", "double"],
    "no-param-reassign": ["error", {"props": true, "ignorePropertyModificationsFor": ["draft"]}]
  },
};
