module.exports = {
    // Automatically clear mock calls and instances between every test
    clearMocks: true,
  
    coverageDirectory: "coverage",
  
    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: [
      "<rootDir>/node_modules/(?!@foo)"
    ],
  
    // "preset": 'ts-jest',
  
    // globals: {
    //   "ts-jest": {
    //     "tsConfig": "tsconfig.json",
    //     "diagnostics": true
    //   }
    // },
  
    moduleFileExtensions: [
      "ts",
      "tsx",
      "js"
    ],
  
    // A map from regular expressions to module names that allow to stub out resources with a single module
    moduleNameMapper: {
      "@/(.*)": "<rootDir>/dist/$1",
      // "database": "<rootDir>/src/lib/database"
    },
  
    testEnvironment: "node",
  
    testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?|js?)$",
  
    // transform: {
    //   "^.+\\.(ts|tsx)$": "ts-jest"
    // },
  
    transformIgnorePatterns: [
      "<rootDir>/node_modules/(?!@foo)"
    ]
  };