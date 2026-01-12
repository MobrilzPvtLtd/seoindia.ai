import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
  category: string;
  tags: string[];
  featured: boolean;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        author: data.author,
        excerpt: data.excerpt,
        image: data.image,
        category: data.category,
        tags: data.tags || [],
        featured: data.featured || false,
        content,
      } as BlogPost;
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      author: data.author,
      excerpt: data.excerpt,
      image: data.image,
      category: data.category,
      tags: data.tags || [],
      featured: data.featured || false,
      content,
    } as BlogPost;
  } catch (error) {
    return null;
  }
}

export function getFeaturedPosts(): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.category === category);
}

export function getAllCategories(): string[] {
  const allPosts = getAllPosts();
  const categories = new Set(allPosts.map((post) => post.category));
  return Array.from(categories).sort();
}

export function getAllTags(): string[] {
  const allPosts = getAllPosts();
  const tags = new Set(allPosts.flatMap((post) => post.tags));
  return Array.from(tags).sort();
}
