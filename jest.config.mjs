/** @type {import('jest').Config} */
const config = {
  moduleDirectories: ["node_modules"],
  modulePaths: ["./src"],
  roots: ["./"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};

export default config;
