import { useMutation, useQueryClient } from '@tanstack/react-query';
import { orpc } from '../lib/orpc';

export function useUpdatePost() {
  const queryClient = useQueryClient();
  return useMutation(
    orpc.posts.updatePost.mutationOptions({
      onSettled: () => {
        // Also invalidate any specific post queries that might be active
        queryClient.invalidateQueries({ queryKey: orpc.posts.getPost.key() });
      },
    }),
  );
}
