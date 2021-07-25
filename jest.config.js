module.exports = {
  testEnvironment: 'jsdom', // 默认JSdom
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  transform: {
    '^.+\\.(t|j)sx?$': [
      'babel-jest', {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: true,
              },
            },
          ],
        ],
      },
    ],
  },
  testMatch: ['**/_tests_/**/*.spec.js'],
  // roots: ['<rootDir>'],
 }