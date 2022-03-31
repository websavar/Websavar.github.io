/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  "verbose": true,
  "modulePaths": ["src"],
  "setupFilesAfterEnv": [
    '<rootDir>/src/tests/setupTests.js'
  ],
  "testRegex": '/src/tests/.*test\\.(tsx|js)$',
  "moduleFileExtensions": [
    'ts', 'tsx', 'js', 'jsx', 'json', 'node'
  ],
  "transform": {
    "^.+\\.(t|j)sx?$": "ts-jest",
  },
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  "transformIgnorePatterns": [
    "node_modules/(?!variables/.*)",
    "node_modules/(?!jest-runtime)"
  ],
  "testEnvironment": 'jsdom',
  "globals": {
    "window": {}
  }
};