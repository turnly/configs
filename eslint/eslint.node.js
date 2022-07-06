module.exports = {
  env: {
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:sonarjs/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: ['./tsconfig.json'],
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'simple-import-sort',
    'security-node',
    'sonarjs',
    'notice'
  ],
  rules: {
    '@typescript-eslint/ban-types': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['PascalCase', 'UPPER_CASE'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
        selector: 'variable',
        types: ['boolean'],
      },
      {
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        selector: 'parameter',
      },
      {
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
        modifiers: ['private'],
        selector: 'memberLike',
      },
      {
        format: ['PascalCase'],
        selector: 'typeLike',
      },
      {
        format: ['UPPER_CASE'],
        selector: 'enumMember',
      },
    ],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-throw-literal': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'comma-dangle': ['error', 'only-multiline'],
    'import/extensions': [0, 'never'],
    'import/no-unresolved': 0,
    'import/prefer-default-export': 'off',
    'linebreak-style': ['error'],
    'no-unused-vars': 'off',
    'no-useless-escape': 'off',
    quotes: [
      'warn',
      'single',
      {
        avoidEscape: true,
      },
    ],
    'security-node/detect-crlf': 'off',
    semi: ['error', 'never'],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'notice/notice': [
      'error',
      {
        'mustMatch': 'Licensed under MIT License',
        'templateFile': 'node_modules/@turnly/eslint-config/COPYRIGHT',
        'messages': {
           'whenFailedToMatch': "The copyright disclaimer (MIT License) couldn’t find, are you sure you added it?"
        }
      }
    ],
  },
}
