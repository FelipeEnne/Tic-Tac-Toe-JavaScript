const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'script',
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'no-shadow': 'off',
      'no-param-reassign': 'off',
      'eol-last': 'off',
      'arrow-parens': 'off',
      'no-unused-vars': 'off',
      'no-undef': 'off',
    },
  },
];
