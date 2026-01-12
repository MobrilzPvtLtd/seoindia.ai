import { Hero, Section, CTASection } from '@/components';
import { getAllPosts, getAllCategories } from '@/lib/blog';
import BlogList from './BlogList';

export default function BlogPage() {
  const allPosts = getAllPosts();
  const categories = ['all', ...getAllCategories()];

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
        <BlogList posts={allPosts} categories={categories} />
      </Section>

      {/* Newsletter CTA */}
      <Section dark title="Subscribe to Our Newsletter">
        <div className="max-w-md mx-auto">
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
        </div>
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
