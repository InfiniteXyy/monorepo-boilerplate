import { useState } from 'react';
import { useDeletePost } from './api/useDeletePost';
import { useListPosts } from './api/useListPosts';
import { CreatePost } from './components/CreatePost';
import { PostDetail } from './components/PostDetail';

export function App() {
  const [currentPostId, setCurrentPostId] = useState<string>();
  const { data: posts } = useListPosts();
  const { mutateAsync: deletePost } = useDeletePost();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <CreatePost />
            <div className="mt-8">
              <h2 className="mb-4 text-xl font-semibold">Posts</h2>
              <ul className="space-y-2">
                {posts?.map((post) => (
                  <li
                    key={post.id}
                    onClick={() => setCurrentPostId(post.id)}
                    className={`flex items-center cursor-pointer rounded-lg border p-3 shadow-sm transition-colors ${post.id === currentPostId ? 'bg-blue-100' : 'bg-white hover:bg-blue-50'}`}
                  >
                    {post.title}
                    <button
                      className="h-7 w-7 text-sm rounded-full hover:bg-gray-200 cursor-pointer ml-auto"
                      type="button"
                      aria-label={`Delete ${post.title}`}
                      onClick={async (e) => {
                        e.stopPropagation();
                        await deletePost({ id: post.id });
                        if (currentPostId === post.id) setCurrentPostId(undefined);
                      }}
                    >
                      ❌
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {currentPostId && <PostDetail postId={currentPostId} />}
        </div>
      </div>
    </div>
  );
}
