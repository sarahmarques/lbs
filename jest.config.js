module.exports = {
  collectCoverageFrom: [
    "**/components/**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/.storybook/**",
    "!**/tests/**",
    "!**/coverage/**",
    "!jest.config.js",
  ],
  setupFilesAfterEnv: ["<rootDir>/config/setup.js"],
  preset: "ts-jest",
  testPathIgnorePatterns: [
    "/.next/",
    "/node_modules/",
    "/tests/",
    "/coverage/",
    "/.storybook/",
    "/cypress/",
  ],
  modulePathIgnorePatterns: [
    "/__stories__/",
    "/__fixtures__/",
    "/pages/",
    "/types/",
    ".d.ts",
  ],
  testRegex: "(/__test__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  testURL: "http://localhost",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "^.+\\.(jpg|jpeg|gif|webp|avif|svg)$": `<rootDir>/__mocks__/fileMock.js`,
    "^.+\\.(png)$": `<rootDir>/__mocks__/pngMock.js`,

    "^@components(.*)$": "<rootDir>/components$1",
    "^@customTypes(.*)$": "<rootDir>/types$1",
    "^@utilities(.*)$": "<rootDir>/utils$1",
    // "@zepp/utils": "zepp/packages/utils/",
  },
  transform: {
    ".(ts|tsx|js|json)": "babel-jest",
  },
  transformIgnorePatterns: [
    "^.+\\.module\\.(css|sass|scss)$",
    "node_modules/(?!(swiper|ssr-window|dom7)/)",
  ],
  coverageReporters: ["cobertura"],
  testEnvironment: "./custom-jsdom-env.js",
  reporters: [
    "default",
    [
      "jest-trx-results-processor",
      {
        outputFile: "./test-results/jestTestresults.trx",
      },
    ],
  ],
  // transformIgnorePatterns: ["<rootDir>/node_modules/(?!zepp/)"],
};
