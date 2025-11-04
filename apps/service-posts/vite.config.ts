import { service } from '@repo/config-build-tools/vite-plugins/service';

import { defineConfig } from 'vite';

const appPath = './src/index.ts';

export default defineConfig({
  plugins: [service({ appPath })],
  server: { port: 3000 },
});
