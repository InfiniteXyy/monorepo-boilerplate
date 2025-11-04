import { Button, Card, CardTitle, Input, TextArea } from '@repo/ui-components';
import { useEffect, useState } from 'react';
import { useUpdatePost } from '../api/useUpdatePost';

interface EditPostProps {
  post: {
    id: string;
    title: string;
    description: string;
  };
  onCancel: () => void;
  onSuccess?: () => void;
}

export function EditPost({ post, onCancel, onSuccess }: EditPostProps) {
  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);
  const { mutateAsync, isPending } = useUpdatePost();

  // Update local state if post prop changes
  useEffect(() => {
    setTitle(post.title);
    setDescription(post.description);
  }, [post]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await mutateAsync({ id: post.id, title, description });
    onSuccess?.();
  };

  return (
    <Card>
      <CardTitle className="mb-6">Edit Post</CardTitle>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <Input name="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <TextArea
            name="description"
            placeholder="Description"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="flex space-x-2">
          <Button type="submit" disabled={isPending}>
            {isPending ? 'Saving...' : 'Save Changes'}
          </Button>
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  );
}
