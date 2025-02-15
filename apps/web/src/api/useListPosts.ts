import { useQuery } from '@tanstack/react-query';
import { orpc } from '../lib/orpc';

export function useListPosts() {
  return useQuery(orpc.posts.listPosts.queryOptions());
}
