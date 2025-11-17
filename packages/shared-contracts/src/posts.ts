import { oc } from '@orpc/contract';
import { z } from 'zod';

export const posts = oc.router({
  listPosts: oc
    .route({ path: '/posts', method: 'GET' })
    .output(z.array(z.object({ id: z.string(), title: z.string() }))),

  getPost: oc
    .route({ path: '/post/{id}', method: 'GET' })
    .input(z.object({ id: z.string() }))
    .output(z.object({ id: z.string(), title: z.string(), description: z.string() })),

  createPost: oc
    .route({ path: '/post', method: 'POST' })
    .input(z.object({ title: z.string(), description: z.string() }))
    .output(z.object({ id: z.string(), title: z.string(), description: z.string() }))
    .errors({ EXCEED_DAILY_LIMIT: { data: z.object({ resumeAt: z.date(), maxPostPerDay: z.number() }) } }),

  updatePost: oc
    .route({ path: '/post/{id}', method: 'PUT' })
    .input(z.object({ id: z.string(), title: z.string(), description: z.string() }))
    .output(z.object({ id: z.string(), title: z.string(), description: z.string() })),

  deletePost: oc
    .route({ path: '/post/{id}', method: 'DELETE' })
    .input(z.object({ id: z.string() }))
    .output(z.object({ id: z.string() })),
});
