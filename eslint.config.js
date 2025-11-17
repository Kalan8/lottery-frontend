import js from '@eslint/js'; // Recommended JavaScript rules
import globals from 'globals';
import tsEslint from 'typescript-eslint'; // Renamed to avoid conflict
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

// The defineConfig array holds all configuration objects (the 'flat' configuration)
export default defineConfig([
  // 1. Ignore files (like the build output)
  globalIgnores(['dist']),

  // 2. Base JavaScript and TypeScript Recommended Rules
  js.configs.recommended,
  ...tsEslint.configs.recommended, // Spread the recommended configurations

  // 3. React Specific Configuration
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      parser: tsEslint.parser, // Use the parser from typescript-eslint
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser, // Standard browser globals
    },
    plugins: {
      react: pluginReact,
      'jsx-a11y': pluginJsxA11y,
    },
    rules: {
      // Apply React Recommended rules
      ...pluginReact.configs.recommended.rules,
      // Apply Accessibility Recommended rules
      ...pluginJsxA11y.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // Modern React (React 17+) doesn't require importing React
      'react/prop-types': 'off', // Prefer TypeScript for prop validation

      // Custom rules
      'no-unused-vars': 'warn',
      "semi": ["error", "always"],
      indent: ['error', 2],
    },
  },

  reactHooks.configs.flat.recommended,
  reactRefresh.configs.vite,
]);