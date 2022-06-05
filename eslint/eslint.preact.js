module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'simple-import-sort'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/indent': ['warn', 2],
    '@typescript-eslint/no-unused-vars': 'error',
    'comma-dangle': ['error', 'only-multiline'],
    'import/extensions': [0, 'never'],
    'import/no-unresolved': 0,
    'import/prefer-default-export': 'off',
    indent: 'off',
    'linebreak-style': ['error'],
    'no-duplicate-imports': 'warn',
    'no-unused-vars': 'off',
    'no-useless-escape': 'off',
    quotes: ['warn', 'single', { avoidEscape: true }],
    semi: ['error', 'never'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error'],
  },
  settings: {
    react: {
      pragma: 'h',
      version: '999.999.999',
    },
  },
}
