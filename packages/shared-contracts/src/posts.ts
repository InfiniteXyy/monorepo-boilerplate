import { oc } from '@orpc/contract';
import { z } from 'zod';

export const posts = oc.router({
  listPosts: oc.output(z.array(z.object({ id: z.string(), title: z.string() }))),

  getPost: oc
    .input(z.object({ id: z.string() }))
    .output(z.object({ id: z.string(), title: z.string(), description: z.string() })),

  createPost: oc
    .input(z.object({ title: z.string(), description: z.string() }))
    .output(z.object({ id: z.string(), title: z.string(), description: z.string() }))
    .errors({ EXCEED_DAILY_LIMIT: { data: z.object({ resumeAt: z.date(), maxPostPerDay: z.number() }) } }),

  updatePost: oc
    .input(z.object({ id: z.string(), title: z.string(), description: z.string() }))
    .output(z.object({ id: z.string(), title: z.string(), description: z.string() })),

  deletePost: oc.input(z.object({ id: z.string() })).output(z.object({ id: z.string() })),
});
