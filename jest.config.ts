export default {
  preset: 'ts-jest',
  automock: false,
  rootDir: '.',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testMatch: [
    'C:/desenvolvimento/accelerate-everest-node-typescript/jest.config.ts']
}