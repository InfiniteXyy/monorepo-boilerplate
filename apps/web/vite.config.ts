import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import 'vitest/config';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/rpc/posts': 'http://localhost:3000',
    },
  },
  test: {
    setupFiles: ['./src/setupTest.ts'],
    environment: 'jsdom',
    globals: true, // for testing library auto cleanup https://testing-library.com/docs/react-testing-library/setup#auto-cleanup-in-vitest
  },
});
