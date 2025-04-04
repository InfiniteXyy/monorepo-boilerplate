import type { ContractRouterClient } from '@orpc/contract';
import type { contracts } from '@repo/shared-contracts';
import { createORPCClient } from '@orpc/client';
import { RPCLink } from '@orpc/client/fetch';
import { createORPCReactQueryUtils } from '@orpc/react-query';

const rpcLink = new RPCLink({ url: `${location.origin}/rpc` });

const orpcClient: ContractRouterClient<typeof contracts> = createORPCClient(rpcLink);

export const orpc = createORPCReactQueryUtils(orpcClient);
