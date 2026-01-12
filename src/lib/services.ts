import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const servicesDirectory = path.join(process.cwd(), 'content/services');

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  content: string;
  image: string;
  benefits: string[];
  technologies: string[];
  pricing?: string;
  deliverables: string[];
}

export function getAllServices(): Service[] {
  const fileNames = fs.readdirSync(servicesDirectory);
  const allServicesData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(servicesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        icon: data.icon,
        features: data.features || [],
        content,
        image: data.image,
        benefits: data.benefits || [],
        technologies: data.technologies || [],
        pricing: data.pricing,
        deliverables: data.deliverables || [],
      } as Service;
    });

  return allServicesData;
}

export function getServiceBySlug(slug: string): Service | null {
  try {
    const fullPath = path.join(servicesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      icon: data.icon,
      features: data.features || [],
      content,
      image: data.image,
      benefits: data.benefits || [],
      technologies: data.technologies || [],
      pricing: data.pricing,
      deliverables: data.deliverables || [],
    } as Service;
  } catch (error) {
    return null;
  }
}
