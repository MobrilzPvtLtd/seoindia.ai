'use client';

import { Hero, Section, CTASection } from '@/components';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check } from 'lucide-react';

interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

interface ServicesClientProps {
  services: Service[];
}

export default function ServicesClient({ services }: ServicesClientProps) {
  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understanding your needs, goals, and project requirements in detail.',
    },
    {
      step: '02',
      title: 'Design & Strategy',
      description: 'Creating a comprehensive strategy and design for your solution.',
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building robust, scalable solutions using agile methodology.',
    },
    {
      step: '04',
      title: 'Testing & QA',
      description: 'Rigorous testing to ensure quality, security, and performance.',
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'Smooth deployment to production with minimal downtime.',
    },
    {
      step: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing support and optimization after launch.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <Hero
        title="Our Services"
        subtitle="Comprehensive solutions tailored to your business needs"
        backgroundImage="https://picsum.photos/1200/600?random=2"
      />

      {/* Services Grid */}
      <Section
        title="What We Offer"
        subtitle="A complete range of services to transform your business"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link href={`/services/${service.slug}`}>
                <div className="card h-full hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 text-primary dark:text-secondary font-semibold">
                    Learn More →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section title="Our Process" subtitle="How we deliver excellence" dark>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((item, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="card"
            >
              <div className="text-5xl font-bold text-primary dark:text-secondary mb-4 opacity-20">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why SEOIndia for Services */}
      <Section title="Why Partner With Us?">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Expertise & Experience
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              With 15+ years of experience, we've worked with Fortune 500 companies and innovative startups. Our team brings deep technical expertise across all major technologies and industries.
            </p>
            <ul className="space-y-2">
              {[
                'Industry-leading expertise',
                'Certified professionals',
                'Latest technology stack',
                'Proven track record',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span className="text-primary dark:text-secondary">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Commitment to Quality
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We follow industry best practices and international standards. Our quality assurance processes ensure that every project meets the highest standards.
            </p>
            <ul className="space-y-2">
              {[
                'Rigorous QA testing',
                'Security first approach',
                'Performance optimization',
                'Scalable architecture',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span className="text-primary dark:text-secondary">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Ready to Get Started?"
        description="Let's discuss how our services can help your business grow and innovate."
        primaryCTA={{ text: 'Schedule a Consultation', href: '/contact' }}
      />
    </>
  );
}
