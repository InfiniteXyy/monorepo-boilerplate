import { useQuery } from '@tanstack/react-query';
import { orpc } from '../lib/orpc';

export function useGetPost(postId: string) {
  return useQuery(orpc.posts.getPost.queryOptions({ input: { id: postId } }));
}
