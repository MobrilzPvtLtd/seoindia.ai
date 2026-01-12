'use client';

import { BlogCard } from '@/components';
import { useState } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  featured: boolean;
  tags: string[];
  content: string;
}

interface BlogListProps {
  posts: Post[];
  categories: string[];
}

export default function BlogList({ posts, categories }: BlogListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredBlogs = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'all' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
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
          {filteredBlogs.map((post, index) => (
            <motion.div
              key={post.slug}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <BlogCard {...post} />
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
    </>
  );
}
