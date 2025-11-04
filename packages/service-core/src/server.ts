import type { AnyContractRouter } from '@orpc/contract';
import type { Router } from '@orpc/server';
import type { RequestListener } from 'node:http';

import type { GlobalContext } from './procedures';
import { createServer } from 'node:http';
import { RPCHandler } from '@orpc/server/node';

export function startServer(props: {
  router: Router<AnyContractRouter, GlobalContext>;
  listen: false | { port: number };
  prefix: `/${string}`;
}) {
  const { router, listen, prefix } = props;
  const rpcHandler = new RPCHandler(router);

  const app: RequestListener = async (req, res) => {
    // add additional global middlewares here
    // e.g. logging, authentication, etc.

    // handle oRPC requests
    if (req.url?.startsWith(prefix)) {
      const { matched } = await rpcHandler.handle(req, res, {
        prefix,
        context: { headers: req.headers },
      });
      if (matched) return;
      // eslint-disable-next-line no-console
      else console.log('No route matched for', req.url);
    }

    res.statusCode = 404;
    res.end('Not found');
  };

  const server = createServer(app);

  if (listen) {
    server.listen(listen.port, () => {
      // eslint-disable-next-line no-console
      console.log('Server is available at http://localhost:3000');
    });
  }

  return { server, app };
}
