module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,ts}', '!**/node_modules/**'],
  /**
   * @todo add coverage threshold
   *
   * @see https://jestjs.io/docs/configuration#coveragethreshold-object
   */
  verbose: true,
  bail: true,
  testMatch: [
    '<rootDir>/tests/**/?(*.)+(spec|test).[tj]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ],
  moduleDirectories: ['node_modules', 'src'],
  setupFiles: [
    '<rootDir>/node_modules/@turnly/eslint-config/tests/jest.setup.js',
  ],
}
