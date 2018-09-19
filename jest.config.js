module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/components/**/*.js', 'src/components/**/*.jsx'],
  setupTestFrameworkScriptFile: '<rootDir>/jest/setup.js',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^(?!.*\\.(js|jsx|json)$)': '<rootDir>/jest/fileTransform.js'
  },
  moduleNameMapper: {},
  coverageReporters: ['json', 'text', 'html'],
  testURL: 'http://localhost/'
};
