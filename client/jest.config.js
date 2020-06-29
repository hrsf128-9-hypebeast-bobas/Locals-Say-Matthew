module.exports = {
  roots: ["<rootDir>/src"],
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  setupFiles: ["<rootDir>src/test-setup.ts"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  verbose: true,
  testEnvironment: 'node',
  coverageReporters: ["json", "lcov", "text", "clover"],
  // testResultsProcessor: "<rootDir>/node_modules/ts-jest/coverageprocessor.js",
  // collectCoverage: true
};

/* 
  
  @testing-library/jest-dom": "^5.11.0
  @testing-library/react": "^10.4.3

  setupFilesAfterEnv: [
      "@testing-library/react/cleanup-after-each",
      "@testing-library/jest-dom/extend-expect"
    ],

*/

// testRegex: "(**/.*|(\\.|/)(test|spec))\\.tsx?$",

// testRegex: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
