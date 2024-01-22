import { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  moduleDirectories: ["utils"],
  collectCoverage: false,
  coverageProvider: "v8",
  collectCoverageFrom: ["**/*.{ts, tsx}", "!<rootDir>/src/constants/*.ts"],
  coveragePathIgnorePatterns: ["/src/constants/", "types.ts"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};

export default config;
