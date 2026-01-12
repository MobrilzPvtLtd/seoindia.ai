'use client';

import { Section, BlogCard } from '@/components';
import { blogs } from '@/data';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Share2 } from 'lucide-react';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const blog = blogs.find((b) => b.id === params.slug);

  if (!blog) {
    notFound();
  }

  const relatedPosts = blogs
    .filter((b) => b.category === blog.category && b.id !== blog.id)
    .slice(0, 3);

  return (
    <>
      {/* Back Button */}
      <div className="bg-white dark:bg-dark pt-6 pb-2">
        <div className="container-custom">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary dark:text-secondary hover:gap-3 transition-all duration-300"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Blog Post */}
      <section className="bg-white dark:bg-dark py-12">
        <div className="container-custom">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            {/* Header */}
            <header className="mb-8">
              <div className="flex items-center gap-4 mb-4 flex-wrap">
                <span className="px-3 py-1 bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary text-sm font-semibold rounded-full">
                  {blog.category}
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  {blog.readTime} min read
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                {blog.title}
              </h1>

              <div className="flex items-center justify-between border-t border-b border-gray-200 dark:border-gray-700 py-4">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {blog.author}
                    </p>
                    <time className="text-sm text-gray-600 dark:text-gray-400">
                      {blog.date}
                    </time>
                  </div>
                </div>

                {/* Share Button */}
                <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-light transition-colors">
                  <Share2 size={20} className="text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </header>

            {/* Content */}
            <div className="prose dark:prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-wrap">
                {blog.content}
              </p>
            </div>

            {/* Tags/Keywords */}
            <div className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {[blog.category, 'Tutorial', 'Guide'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-100 dark:bg-dark-light rounded-lg p-6 mb-12"
            >
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                About {blog.author}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {blog.author} is a passionate technology writer and expert with years of experience
                in the software development industry. They contribute regularly to SEOIndia's blog.
              </p>
            </motion.div>
          </motion.article>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Section title="Related Articles" subtitle="Check out these similar posts">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </Section>
      )}

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-primary to-secondary py-12">
        <div className="container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-4">Subscribe for More Insights</h2>
            <p className="mb-6 max-w-xl mx-auto text-white/90">
              Get the latest articles, tips, and industry insights delivered to your inbox every week.
            </p>
            <form className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
