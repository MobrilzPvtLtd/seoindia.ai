import { Hero, Section, CTASection } from '@/components';
import { getAllPortfolioItems, getAllCategories } from '@/lib/portfolio';
import PortfolioGrid from './PortfolioGrid';

export default function PortfolioPage() {
  const portfolioItems = getAllPortfolioItems();
  const categories = ['all', ...getAllCategories()];

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
        <PortfolioGrid portfolioItems={portfolioItems} categories={categories} />
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
            <div
              key={i}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary dark:text-secondary mb-2">
                {stat.value}
              </div>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
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
