import { Button, Card, CardTitle, LoadingState } from '@repo/ui-components';
import { useState } from 'react';
import { useGetPost } from '../api/useGetPost';
import { EditPost } from './EditPost';

export function PostDetail({ postId }: { postId: string }) {
  const { data: post } = useGetPost(postId);
  const [isEditing, setIsEditing] = useState(false);

  if (!post) {
    return <LoadingState />;
  }

  if (isEditing) {
    return <EditPost post={post} onCancel={() => setIsEditing(false)} onSuccess={() => setIsEditing(false)} />;
  }

  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <CardTitle className="mb-0">{post.title}</CardTitle>
        <Button variant="secondary" onClick={() => setIsEditing(true)} className="text-sm px-3 py-1">
          Edit
        </Button>
      </div>
      <p className="text-gray-600">{post.description}</p>
    </Card>
  );
}
