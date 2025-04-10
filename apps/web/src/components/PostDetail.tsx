import { Card, CardTitle, LoadingState } from '@repo/ui-components';
import { useGetPost } from '../api/useGetPost';

export function PostDetail({ postId }: { postId: string }) {
  const { data: post } = useGetPost(postId);

  if (!post) {
    return <LoadingState />;
  }

  return (
    <Card>
      <CardTitle>{post.title}</CardTitle>
      <p className="text-gray-600">{post.description}</p>
    </Card>
  );
}
