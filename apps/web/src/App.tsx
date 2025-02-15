import { useState } from 'react';
import { useListPosts } from './api/useListPosts';
import { CreatePost } from './components/CreatePost';
import { PostDetail } from './components/PostDetail';

export function App() {
  const [currentPostId, setCurrentPostId] = useState<string>();
  const { data: posts } = useListPosts();

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
                    className={`cursor-pointer rounded-lg border p-3 shadow-sm transition-colors ${post.id === currentPostId ? 'bg-blue-100' : 'bg-white hover:bg-blue-50'}`}
                  >
                    {post.title}
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
