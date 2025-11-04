import type { Plugin } from 'vite';

export const service = ({ appPath, exportName = 'app' }: { appPath: string; exportName?: string }): Plugin => ({
  name: 'bis-node',
  config: () => ({
    server: { hmr: false },
    build: {
      ssr: appPath,
      target: 'esnext',
      rollupOptions: { input: appPath, output: { preserveModules: false }, external: /node_modules/ },
    },
  }),
  async configureServer(server) {
    if (server.config.mode === 'test') return;
    server.httpServer?.once('listening', () => server.ssrLoadModule(appPath));
    server.middlewares.use(async (req, res) => {
      const appModule = await server.ssrLoadModule(appPath);
      const app = appModule[exportName];
      app(req, res);
    });
  },
});
