import { startServer } from '@repo/service-core';
import { postsRouter } from './router';

startServer({ port: 3000, router: postsRouter, prefix: '/rpc/posts' });
