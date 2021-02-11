module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ["<rootDir>/src", "<rootDir>/tests"],
    testMatch: ["**/?(*.)+(spec|test).[t]s?(x)"]
};