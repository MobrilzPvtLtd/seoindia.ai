'use client';

import { ProjectCard } from '@/components';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface Portfolio {
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

interface PortfolioGridProps {
  portfolioItems: Portfolio[];
  categories: string[];
}

export default function PortfolioGrid({ portfolioItems, categories }: PortfolioGridProps) {
  const [filter, setFilter] = useState('all');

  const filteredProjects =
    filter === 'all'
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === filter);

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              filter === cat
                ? 'btn-primary'
                : 'bg-gray-200 dark:bg-dark-light text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard
                id={project.slug}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
              />
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </motion.div>
    </>
  );
}
