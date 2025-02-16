import { defineConfig } from 'tsup';

export default defineConfig({
  target: 'esnext',
  clean: true,
  format: 'esm',
  outExtension: () => ({ js: '.mjs' }),
  entry: ['src/index.ts'],
  noExternal: [/.*/],
});
