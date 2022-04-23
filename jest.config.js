/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  modulePathIgnorePatterns: ['<rootDir>/.stryker-tmp'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',
}
