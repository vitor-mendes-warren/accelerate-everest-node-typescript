import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

export default {
  preset: 'ts-jest',
  automock: false,
  rootDir: '.',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleDirectories: ['node_modules', 'src'],
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