import { getAllPosts } from '@/lib/mdx';
import { PostList } from '@/components/blog/post-list';

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <div className="container-custom py-12">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Blog
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Explore our latest articles and insights
        </p>
      </div>

      {posts.length > 0 ? (
        <PostList posts={posts} />
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-300">No posts found.</p>
        </div>
      )}
    </div>
  );
}