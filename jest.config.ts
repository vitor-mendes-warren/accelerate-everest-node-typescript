export default {
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  preset: 'ts-jest',
  automock: false,
  rootDir: '.',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleDirectories: ['node_modules', 'src','supertest'],
  moduleNameMapper: {
    "@controller/*": [
      "./src/presentation/controllers/*"
    ],
    "@middleware/*": [
      "./src/presentation/middleware/*"
    ],
    "@entity/*": [
      "src/domain/customer/entity/*"
    ],
    "@services/*": [
      "./src/domain/services/*"
    ],
    "@routes/*": [
      "./src/presentation/routes/*"
    ],
    "@interfaces/*": [
      "./src/interfaces/*"
    ],
  },
  testMatch: [
    '<rootDir>/**/*.test.ts',
  ],
  modulePaths: ["./"],
};
