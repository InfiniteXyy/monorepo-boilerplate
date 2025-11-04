import type { IncomingMessage, ServerResponse } from 'node:http';
import { createServer } from 'node:http';
import { os } from '@orpc/server';
import { describe, expect, it, vi } from 'vitest';
import { startServer } from './server';

vi.mock('node:http', () => ({
  createServer: vi.fn(() => ({
    listen: vi.fn((_, callback) => callback()),
  })),
}));

describe('startServer', () => {
  const mockRes = {
    statusCode: 200,
    end: vi.fn(),
    on: vi.fn(),
  } as unknown as ServerResponse;

  it('should create and start the server', () => {
    const consoleSpy = vi.spyOn(console, 'log');

    startServer({ router: os.router({}), port: 3000, prefix: '/api' });

    expect(createServer).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith('Server is available at http://localhost:3000');
  });

  it('should handle 404 for non-matching routes', async () => {
    startServer({ router: os.router({}), port: 3000, prefix: '/api' });
    const handler = vi.mocked(createServer).mock.calls[0]![0] as (
      req: IncomingMessage,
      res: ServerResponse,
    ) => Promise<void>;
    await handler({ url: '/non-matching' } as IncomingMessage, mockRes);

    expect(mockRes.statusCode).toBe(404);
    expect(mockRes.end).toHaveBeenCalledWith('Not found');
  });
});
