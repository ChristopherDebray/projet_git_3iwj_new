module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:import/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off', // Disables warning for extraneous dependencies.
    'react/prop-types': 'warn', // Enables warning for prop types.
    'no-console': 'warn', // Enables warning for console calls.
    'react-hooks/rules-of-hooks': 'error', // Throw error for hook rules.
    'react-hooks/exhaustive-deps': 'off', // Disable exhaustive dependencies.
    'no-nested-ternary': 'error', // Throw error nested ternary operators.
    'no-restricted-globals': 'warn', // Enables warning for global variables.
    camelcase: ['warn', { properties: 'never' }], // Enables warning for camelCase variable names.
    eqeqeq: ['warn', 'always', { null: 'ignore' }], // Enables warning for == and != comparisons.
    'import/prefer-default-export': 'off', // Disables warning for default exports.
    'no-trailing-spaces': 'error', // Throw error for trailing spaces.
    'no-multiple-empty-lines': 'error', // Throw error for multiple empty lines.
    'react/jsx-filename-extension': 'off', // Disables warning for JSX file extensions.
    'import/extensions': [2, { ts: 'never' }], // Allow to omit the file extension within the import source path
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ], // Only arrow functions for named components
    'react/react-in-jsx-scope': 'off', // suppress errors for missing 'import React' in files
  },
};
