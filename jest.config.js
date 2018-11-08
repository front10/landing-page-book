module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/components/**/*.jsx'],
  testPathIgnorePatterns: ['<rootDir>/dist/'],
  roots: ['<rootDir>/src/components/'],
  setupTestFrameworkScriptFile: '<rootDir>/jest/setup.js',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^(?!.*\\.(js|jsx|json)$)': '<rootDir>/jest/fileTransform.js'
  },
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 50,
      lines: 50,
      statements: 50
    }
  },
  moduleNameMapper: {},
  coverageReporters: ['lcov', 'json-summary', 'text'],
  testURL: 'http://localhost/'
};
