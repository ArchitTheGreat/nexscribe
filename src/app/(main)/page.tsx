import { getAllPosts } from '@/lib/mdx';
import { Button } from '@/components/ui/button';
import { PostList } from '@/components/blog/post-list';

export default async function Home() {
  const posts = await getAllPosts();
  const featuredPosts = posts.slice(0, 4);

  return (
    <div className="container-custom py-12">
      <section className="mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Modern MDX Blog Template
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A beautifully designed blog template using Next.js, MDX, and Tailwind CSS v4
          </p>
          <div className="mt-6">
            <Button href="/blog" size="lg">
              Explore Blog
            </Button>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Latest Posts
          </h2>
          <Button href="/blog" variant="outline">
            View All
          </Button>
        </div>
        <PostList posts={featuredPosts} />
      </section>

      <section>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Ready to Start Your Own Blog?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            This template is open source and ready for you to customize. Get started today!
          </p>
          <Button 
            href="https://github.com/yourusername/mdx-blog-template" 
            variant="primary"
            size="lg"
          >
            Get Template
          </Button>
        </div>
      </section>
    </div>
  );
}