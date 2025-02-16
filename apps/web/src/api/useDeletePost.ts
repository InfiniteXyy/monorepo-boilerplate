import { useMutation, useQueryClient } from '@tanstack/react-query';
import { orpc } from '../lib/orpc';

export function useDeletePost() {
  const queryClient = useQueryClient();
  return useMutation(
    orpc.posts.deletePost.mutationOptions({
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: orpc.posts.listPosts.key() });
      },
    }),
  );
}
