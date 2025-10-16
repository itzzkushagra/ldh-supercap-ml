import { defineConfig } from 'vitest/config';
import path from 'node:path';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['**/*.test.ts'],
    globals: true
  },
  resolve: {
    alias: [
      {
        find: /^@workspace\/(.*)$/,
        replacement: path.resolve(__dirname, 'packages/$1/src')
      }
    ]
  }
});
