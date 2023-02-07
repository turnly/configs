module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,ts}', '!**/node_modules/**'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  clearMocks: true,
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
  setupFiles: [
    '<rootDir>/tests/setup/jest.setup.js',
  ],
  passWithNoTests: true,
}
