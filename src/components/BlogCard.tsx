'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

const BlogCard = ({
  slug,
  title,
  excerpt,
  date,
  author,
  category,
  image,
}: BlogCardProps) => {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      className="card group"
    >
      {/* Category Badge */}
      <div className="mb-3 flex items-center justify-between">
        <span className="inline-block px-3 py-1 bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary text-xs font-semibold rounded-full">
          {category}
        </span>
      </div>

      {/* Title */}
      <Link href={`/blog/${slug}`}>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-secondary transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
      </Link>

      {/* Excerpt */}
      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{excerpt}</p>

      {/* Meta Info */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">{author}</p>
          <time className="text-xs text-gray-500 dark:text-gray-400">{date}</time>
        </div>
        <Link
          href={`/blog/${slug}`}
          className="text-primary dark:text-secondary font-semibold hover:gap-2 transition-all duration-300"
        >
          →
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogCard;
