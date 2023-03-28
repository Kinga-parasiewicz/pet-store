// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "./src"],
  moduleFileExtensions: ["ts", "tsx"],
  moduleNameMapper: {
    "@/*": ["./src/*"]
  },
  modulePaths: [
    "@/*" 
  ],
  testEnvironment: "jest-environment-jsdom",
};
module.exports = createJestConfig(customJestConfig)