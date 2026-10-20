// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["/node_modules/", "<rootDir>/cypress/"],
  moduleNameMapper: {
    // jsdom tests should use Sanity's browser client, not its Node fetch transport.
    "^@sanity/client$": "<rootDir>/node_modules/@sanity/client/dist/index.js",
    "^swiper/css(?:/.*)?$": "<rootDir>/__mocks__/styleMock.js",
    "^@/styles/(.*)$": "<rootDir>/styles/$1",
    // "^(.*)$": "<rootDir>/$1",
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
