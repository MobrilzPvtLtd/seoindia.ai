import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const portfolioDirectory = path.join(process.cwd(), 'content/portfolio');

export interface Portfolio {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  client: string;
  completedDate: string;
  projectUrl?: string;
  githubUrl?: string;
  featured: boolean;
  content: string;
  technologies: string[];
}

export function getAllPortfolioItems(): Portfolio[] {
  const fileNames = fs.readdirSync(portfolioDirectory);
  const allPortfolioData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(portfolioDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        category: data.category,
        tags: data.tags || [],
        image: data.image,
        client: data.client,
        completedDate: data.completedDate,
        projectUrl: data.projectUrl,
        githubUrl: data.githubUrl,
        featured: data.featured || false,
        content,
        technologies: data.technologies || [],
      } as Portfolio;
    });

  return allPortfolioData.sort((a, b) => {
    return new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime();
  });
}

export function getPortfolioBySlug(slug: string): Portfolio | null {
  try {
    const fullPath = path.join(portfolioDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      category: data.category,
      tags: data.tags || [],
      image: data.image,
      client: data.client,
      completedDate: data.completedDate,
      projectUrl: data.projectUrl,
      githubUrl: data.githubUrl,
      featured: data.featured || false,
      content,
      technologies: data.technologies || [],
    } as Portfolio;
  } catch (error) {
    return null;
  }
}

export function getFeaturedPortfolio(): Portfolio[] {
  const allPortfolio = getAllPortfolioItems();
  return allPortfolio.filter((item) => item.featured);
}

export function getPortfolioByCategory(category: string): Portfolio[] {
  const allPortfolio = getAllPortfolioItems();
  return allPortfolio.filter((item) => item.category === category);
}

export function getAllCategories(): string[] {
  const allPortfolio = getAllPortfolioItems();
  const categories = allPortfolio.map((item) => item.category);
  return Array.from(new Set(categories));
}

export function getAllTechnologies(): string[] {
  const allPortfolio = getAllPortfolioItems();
  const technologies = allPortfolio.flatMap((item) => item.technologies);
  return Array.from(new Set(technologies));
}
