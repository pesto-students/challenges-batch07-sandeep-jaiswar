export default {
  verbose: true,
  transform: {
    '^.+\\.(js|ts)$': 'babel-jest',
  },
  testEnvironment: 'node',
};
