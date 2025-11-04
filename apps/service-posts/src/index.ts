import { startServer } from '@repo/service-core';
import { postsRouter } from './router';

export const { app } = startServer({
  listen: !['test', 'development'].includes(String(process.env.NODE_ENV)) && { port: 3000 },
  router: postsRouter,
  prefix: '/rpc/posts',
});
