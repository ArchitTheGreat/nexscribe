export interface Post {
    slug: string;
    title: string;
    date: string;
    formattedDate: string;
    description?: string;
    content: string;
    readingTime?: string;
    tags?: string[];
    author?: {
      name: string;
      image?: string;
    };
  }