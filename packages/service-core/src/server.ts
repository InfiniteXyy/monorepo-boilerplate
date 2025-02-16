import type { Context, Router } from '@orpc/server';
import { createServer } from 'node:http';
import { RPCHandler } from '@orpc/server/node';

export function startServer(props: { router: Router<Context, any>; port: number; prefix: `/${string}` }) {
  const { router, port, prefix } = props;
  const rpcHandler = new RPCHandler(router);

  const server = createServer(async (req, res) => {
    // add additional global middlewares here
    // e.g. logging, authentication, etc.

    // handle oRPC requests
    if (req.url?.startsWith(prefix)) {
      const { matched } = await rpcHandler.handle(req, res, { prefix });
      if (matched) return;
      // eslint-disable-next-line no-console
      else console.log('No route matched for', req.url);
    }

    res.statusCode = 404;
    res.end('Not found');
  });

  server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log('Server is available at http://localhost:3000');
  });
}
