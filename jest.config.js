module.exports = {
    testPathIgnorePatterns: ["/node_modules/"],
    setupFilesAfterEnv: [
        "<rootDir>/src/tests/setupTests.js"
    ],
    transform: {
        "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest"
    },
    testEnvironment: 'jsdom',
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.jsx",
        "!src/**/*.spec.jsx",
        "!src/**/_app.jsx",
    ],
    coverageReporters: ["lcov", "json"]
};