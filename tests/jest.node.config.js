module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>'],
  collectCoverageFrom: ['<rootDir>/**/*.{js,ts}'],
  verbose: true,
  bail: true,
  testMatch: [
    '<rootDir>/tests/**/?(*.)+(spec|test).[tj]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ],
  moduleDirectories: ['node_modules', 'src'],
  setupFiles: [
    '<rootDir>/node_modules/@turnly/eslint-config/tests/jest.setup.js'
  ],
}
