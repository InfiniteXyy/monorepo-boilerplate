import { call } from '@orpc/server';
import { afterEach, describe, expect, it } from 'vitest';
import { database, postsRouter } from './router';

describe('postsRouter', () => {
  afterEach(() => {
    // Reset database to initial state
    database.posts = [{ id: '0', title: 'initialPost', description: 'description' }];
  });

  describe('listPosts', () => {
    it('should return all posts', async () => {
      const result = await call(postsRouter.listPosts, {});
      expect(result).toEqual(database.posts.map(({ description, ...basicInfo }) => basicInfo));
    });
  });

  describe('getPost', () => {
    it('should return post by id', async () => {
      const result = await call(postsRouter.getPost, { id: '0' });
      expect(result).toEqual(database.posts[0]);
    });

    it('should throw error when post not found', async () => {
      await expect(call(postsRouter.getPost, { id: 'nonexistent' })).rejects.toThrow('Post not found');
    });
  });

  describe('createPost', () => {
    it('should create new post', async () => {
      const newPost = {
        title: 'newPost',
        description: 'new description',
      };

      const result = await call(postsRouter.createPost, { ...newPost }, { context: { user: { id: '1' } } });

      expect(result.title).toBe(newPost.title);
      expect(result.description).toBe(newPost.description);
      expect(result.id).toBeDefined();

      // Verify post was added to database
      const allPosts = await call(postsRouter.listPosts, {});
      expect(allPosts).toHaveLength(2);
    });
  });
});
