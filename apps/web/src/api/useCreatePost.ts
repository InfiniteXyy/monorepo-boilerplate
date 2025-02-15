import { useMutation, useQueryClient } from '@tanstack/react-query';
import { orpc } from '../lib/orpc';

export function useCreatePost() {
  const queryClient = useQueryClient();
  return useMutation(
    orpc.posts.createPost.mutationOptions({
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: orpc.posts.listPosts.key() });
      },
    }),
  );
}
