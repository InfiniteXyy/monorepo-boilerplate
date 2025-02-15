import { useCreatePost } from '../api/useCreatePost';

export function CreatePost() {
  const { mutateAsync } = useCreatePost();

  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <h1 className="mb-6 text-2xl font-bold">Create Post</h1>
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
          <input
            name="title"
            placeholder="Title"
            className="w-full rounded-lg border p-2 outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <textarea
            name="description"
            placeholder="Description"
            rows={4}
            className="w-full rounded-lg border p-2 outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}
