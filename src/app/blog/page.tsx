'use client';

import { Hero, Section, BlogCard, CTASection } from '@/components';
import { blogs } from '@/data';
import { useState } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'all',
    ...new Set(blogs.map((blog) => blog.category)),
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'all' || blog.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Hero */}
      <Hero
        title="Blog & Insights"
        subtitle="Stay updated with the latest in technology, AI, and software development"
        backgroundImage="https://picsum.photos/1200/600?random=7"
      />

      {/* Blog Section */}
      <Section title="Latest Articles">
        {/* Search & Filter */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="mb-12 space-y-6"
        >
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-light text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary transition-all"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'btn-primary text-sm'
                    : 'bg-gray-200 dark:bg-dark-light text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 text-sm'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Blog Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <BlogCard {...blog} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No articles found. Try a different search or category.
            </p>
          </motion.div>
        )}
      </Section>

      {/* Newsletter CTA */}
      <Section dark title="Subscribe to Our Newsletter">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="max-w-md mx-auto"
        >
          <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
            Get the latest insights, tips, and industry news delivered to your inbox.
          </p>
          <form className="flex gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-light text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary transition-all"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </motion.div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Have a Story to Share?"
        description="We're always looking for interesting perspectives and insights. Get in touch to contribute."
        primaryCTA={{ text: 'Contact Us', href: '/contact' }}
      />
    </>
  );
}
