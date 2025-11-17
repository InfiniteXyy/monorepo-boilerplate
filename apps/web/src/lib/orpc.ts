import type { ContractRouterClient } from '@orpc/contract';
import type { JsonifiedClient } from '@orpc/openapi-client';
import { createORPCClient } from '@orpc/client';
import { OpenAPILink } from '@orpc/openapi-client/fetch';
import { createORPCReactQueryUtils } from '@orpc/react-query';
import { contracts } from '@repo/shared-contracts';

const openApiLink = new OpenAPILink(contracts, { url: () => `${new URL(window.location.href).origin}/rpc` });

export const orpcClient: JsonifiedClient<ContractRouterClient<typeof contracts>> = createORPCClient(openApiLink);
export const orpc = createORPCReactQueryUtils(orpcClient);
