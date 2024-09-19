// @ts-nocheck

import eslint from '@eslint/js';
import { fixupPluginRules } from '@eslint/compat';
import tsParser from '@typescript-eslint/parser';
import tsEslint from 'typescript-eslint';

import prettierConfig from 'eslint-config-prettier';
import pluginImport from 'eslint-plugin-import';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';

export default [
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  prettierConfig,
  {
    ignores: [
      '.git',
      '.github',
      '.next',
      'app/fonts',
      'eslint.config.mjs',
      'next.config.mjs',
      'node_modules',
      'out',
      'postcss.config.mjs',
      'prettier.config.mjs',
      'scripts',
      'src-tauri',
      'tailwind.config.ts',
    ],
  },
  {
    plugins: {
      react: pluginReact,
      'react-hooks': fixupPluginRules(pluginReactHooks),
      import: pluginImport,
    },
    languageOptions: {
      parserOptions: {
        project: 'tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
        },
      ],
      '@typescript-eslint/explicit-function-return-type': [
        'warn',
        {
          allowExpressions: true,
        },
      ],
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/strict-boolean-expressions': [
        'warn',
        {
          allowNullableObject: true,
        },
      ],
      '@typescript-eslint/triple-slash-reference': 'off',
      eqeqeq: [
        'warn',
        'always',
        {
          null: 'ignore',
        },
      ],
      'import/no-absolute-path': ['warn'],
      'import/no-anonymous-default-export': 'error',
      'import/order': [
        'warn',
        {
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'always',
          groups: ['type', ['builtin', 'external'], 'internal'],
          pathGroupsExcludedImportTypes: ['type'],
          pathGroups: [],
        },
      ],
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
];
