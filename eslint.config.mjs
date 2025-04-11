import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        test: 'readonly',
        expect: 'readonly',
        describe: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        process: 'readonly',
      },
    },
    plugins: {
      react: pluginReact,
      prettier: pluginPrettier,
    },
    extends: [
      js.configs.recommended,
      pluginReact.configs.flat.recommended,
      prettierConfig,
    ],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': 'error',
      'react/prop-types': 'off',
    },
  },
]);
