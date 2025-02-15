import { useGetPost } from '../api/useGetPost';

export function PostDetail({ postId }: { postId: string }) {
  const { data: post } = useGetPost(postId);

  if (!post) {
    return (
      <div className="flex h-32 items-center justify-center rounded-lg border bg-white">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <h1 className="mb-4 text-2xl font-bold">{post.title}</h1>
      <p className="text-gray-600">{post.description}</p>
    </div>
  );
}
