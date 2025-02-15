import type { contracts } from '@repo/shared-contracts';
import { implement } from '@orpc/server';

export function createProcedures<T extends (typeof contracts)[keyof typeof contracts]>(subContracts: T) {
  const base = implement(subContracts);

  const authed = base.use<{ userId: string }>(({ next }) => {
    /** put auth logic here */
    return next({ context: { userId: 'example' } });
  });

  return { base, authed };
}
