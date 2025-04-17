import Link from 'next/link';
import { Card } from '@/components/ui/card';
import type { Post } from '@/types';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card variant="bordered" hoverEffect className="h-full flex flex-col">
      <Link href={`/blog/${post.slug}`} className="flex-grow">
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center mb-2 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={post.date}>{post.formattedDate}</time>
            {post.readingTime && (
              <>
                <span className="mx-2">•</span>
                <span>{post.readingTime} min read</span>
              </>
            )}
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
            {post.title}
          </h3>
          {post.description && (
            <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
              {post.description}
            </p>
          )}
          <div className="flex flex-wrap gap-2 mt-auto">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </Card>
  );
}
