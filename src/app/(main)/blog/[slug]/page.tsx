import { notFound } from 'next/navigation';
import { getPostBySlug, compileMdx, getAllPosts } from '@/lib/mdx';
import { Metadata } from 'next';

interface BlogPostParams {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: BlogPostParams): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist.',
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: BlogPostParams) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { content } = await compileMdx(post.content);

  return (
    <article className="container-custom py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          {post.title}
        </h1>
        <div className="flex justify-center items-center text-gray-500 dark:text-gray-400 text-sm">
          <time dateTime={post.date}>{post.formattedDate}</time>
          {post.readingTime && (
            <>
              <span className="mx-2">•</span>
              <span>{post.readingTime} min read</span>
            </>
          )}
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="prose dark:prose-invert prose-lg max-w-none">
        {content}
      </div>
    </article>
  );
}