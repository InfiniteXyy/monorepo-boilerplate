import type { contracts } from '@repo/shared-contracts';
import type { IncomingHttpHeaders } from 'node:http';
import { implement } from '@orpc/server';

export interface GlobalContext {
  headers: IncomingHttpHeaders;
}

export function createProcedures<T extends (typeof contracts)[keyof typeof contracts]>(subContracts: T) {
  const base = implement(subContracts).$context<GlobalContext>();

  const authed = base.use<{ userId: string }>(({ next }) => {
    /** put auth logic here */
    return next({ context: { userId: 'example' } });
  });

  return { base, authed };
}
