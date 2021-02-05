/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = function (wallaby) {
  let path = require('path');

  return {
    files: [
      'packages/**',
      '!packages/**/node_modules/**',
      '!packages/**/test/**',
      '!packages/**/dist/**',
    ],
    tests: ['packages/**/test/**/*spec.ts', '!packages/**/node_modules/**'],
    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({ isolatedModules: true }),
    },
    env: {
      type: 'node',
      runner: 'node',
      params: {
        runner: '-r ' + path.join(__dirname, './wallaby-paths.js'),
      },
    },
    testFramework: 'jest',
    debug: true,
  };
};
