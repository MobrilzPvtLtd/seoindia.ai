'use client';

import { Hero, Section, ProjectCard, CTASection } from '@/components';
import { portfolioProjects } from '@/data';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function PortfolioPage() {
  const [filter, setFilter] = useState('all');

  const categories = [
    'all',
    'Web Development',
    'Mobile Apps',
    'AI/ML',
    'E-commerce',
  ];

  const filteredProjects =
    filter === 'all'
      ? portfolioProjects
      : portfolioProjects.filter((p) =>
          p.technologies.some((t) => {
            if (filter === 'Web Development') return ['React', 'Next.js'].includes(t);
            if (filter === 'Mobile Apps')
              return ['React Native', 'Flutter'].includes(t);
            if (filter === 'AI/ML')
              return ['TensorFlow', 'Machine Learning', 'NLP'].includes(t);
            if (filter === 'E-commerce')
              return ['Stripe', 'MongoDB'].includes(t);
            return false;
          })
        );

  return (
    <>
      {/* Hero */}
      <Hero
        title="Our Portfolio"
        subtitle="Explore our latest projects and see what we can do for you"
        backgroundImage="https://picsum.photos/1200/600?random=3"
      />

      {/* Portfolio Section */}
      <Section title="Featured Projects">
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
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard {...project} />
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
      </Section>

      {/* Stats Section */}
      <Section dark title="Project Statistics">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { label: 'Projects', value: '200+' },
            { label: 'Clients', value: '150+' },
            { label: 'Technologies', value: '50+' },
            { label: 'Team Members', value: '100+' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary dark:text-secondary mb-2">
                {stat.value}
              </div>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Start Your Next Project"
        description="Whether you need a new application, enhancement, or consultation, we're here to help."
        primaryCTA={{ text: 'Get a Quote', href: '/contact' }}
      />
    </>
  );
}
