export default {
  preset: 'ts-jest',
  automock: false,
  rootDir: 'src',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testMatch: [
    '<rootDir>/src/**/*.test.js'
  ]
}
