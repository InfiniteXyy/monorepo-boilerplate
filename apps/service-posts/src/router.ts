import { createProcedures } from '@repo/service-core';
import { contracts } from '@repo/shared-contracts';

const { base, authed } = createProcedures(contracts.posts);

export const database = {
  posts: [{ id: '0', title: 'initialPost', description: 'description' }] as {
    id: string;
    title: string;
    description: string;
  }[],
};

export const postsRouter = base.router({
  listPosts: base.listPosts.handler(async () => {
    return database.posts;
  }),
  getPost: base.getPost.handler(async ({ input }) => {
    const result = database.posts.find((post) => post.id === input.id);
    if (!result) {
      throw new Error('Post not found');
    }
    return result;
  }),
  createPost: authed.createPost.handler(async ({ input }) => {
    const id = Math.random().toString(36).substring(7);
    const newPost = { id, ...input };
    database.posts.push(newPost);
    return newPost;
  }),
  updatePost: authed.updatePost.handler(async ({ input }) => {
    const index = database.posts.findIndex((post) => post.id === input.id);
    if (index === -1) {
      throw new Error('Post not found');
    }
    const updatedPost = { ...database.posts[index], ...input };
    database.posts[index] = updatedPost;
    return updatedPost;
  }),
  deletePost: authed.deletePost.handler(async ({ input }) => {
    const index = database.posts.findIndex((post) => post.id === input.id);
    if (index === -1) {
      throw new Error('Post not found');
    }
    const deletedPost = database.posts.splice(index, 1)[0];
    return { id: deletedPost!.id };
  }),
});
