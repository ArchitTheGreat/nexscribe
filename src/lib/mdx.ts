import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import readingTime from 'reading-time';
import { format } from 'date-fns';
import type { Post } from '@/types';

const CONTENT_DIR = path.join(process.cwd(), 'src/content');

export async function getAllPosts(): Promise<Post[]> {
  const postsDirectory = path.join(CONTENT_DIR, 'blog');
  const filenames = fs.readdirSync(postsDirectory);
  
  const posts = await Promise.all(
    filenames
      .filter((filename) => {
        return filename.endsWith('.mdx');
      })
      .map(async (filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);
        const slug = filename.replace(/\.mdx$/, '');
        
        const readTime = readingTime(content);
        const formattedDate = format(new Date(data.date), 'MMMM dd, yyyy');
        
        return {
          slug,
          title: data.title,
          date: data.date,
          formattedDate,
          description: data.description || '',
          content,
          readingTime: Math.ceil(readTime.minutes).toString(),
          tags: data.tags || [],
          author: data.author || { name: 'Anonymous' },
        };
      })
  );
  
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const postsDirectory = path.join(CONTENT_DIR, 'blog');
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    const readTime = readingTime(content);
    const formattedDate = format(new Date(data.date), 'MMMM dd, yyyy');
    
    return {
      slug,
      title: data.title,
      date: data.date,
      formattedDate,
      description: data.description || '',
      content,
      readingTime: Math.ceil(readTime.minutes).toString(),
      tags: data.tags || [],
      author: data.author || { name: 'Anonymous' },
    };
  } catch (error) {
    return null;
  }
}

export async function compileMdx(source: string) {
  const { content, frontmatter } = await compileMDX({
    source,
    options: { parseFrontmatter: true },
  });
  
  return { content, frontmatter };
}
