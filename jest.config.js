module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.js$': 'babel-jest',
      '^.+\\.jsx$': 'babel-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!axios)/',
      "\\.pnp\\.[^\\\/]+$",
      "<rootDir>/LogoBranco\\.png"
    ],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js']
  };