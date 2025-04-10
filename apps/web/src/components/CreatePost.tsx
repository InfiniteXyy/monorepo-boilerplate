import { Button, Card, CardTitle, Input, TextArea } from '@repo/ui-components';
import { useCreatePost } from '../api/useCreatePost';

export function CreatePost() {
  const { mutateAsync } = useCreatePost();

  return (
    <Card>
      <CardTitle className="mb-6">Create Post</CardTitle>
      <form
        className="space-y-4"
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const title = formData.get('title') as string;
          const description = formData.get('description') as string;
          await mutateAsync({ title, description });
          (e.target as HTMLFormElement).reset();
        }}
      >
        <div>
          <Input name="title" placeholder="Title" />
        </div>
        <div>
          <TextArea name="description" placeholder="Description" rows={4} />
        </div>
        <Button type="submit">Create Post</Button>
      </form>
    </Card>
  );
}
