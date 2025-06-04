/** @type {import('jest').Config} */
module.exports = {
  roots: ['<rootDir>'],
  testMatch: ['**/tests/**/*.test.ts'],
  transform: { '^.+\\.ts$': ['ts-jest', { tsconfig: 'tsconfig.json' }] },
  testEnvironment: 'node',
  clearMocks: true,
};
