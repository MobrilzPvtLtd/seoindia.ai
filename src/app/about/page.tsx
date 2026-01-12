'use client';

import { Hero, Section, CTASection, FeatureCard } from '@/components';
import { team } from '@/data';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="About SEOIndia"
        subtitle="Building the future of technology, one project at a time"
        backgroundImage="https://picsum.photos/1200/600?random=4"
      />

      {/* Company Story */}
      <Section title="Our Story" subtitle="How it all began">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="https://picsum.photos/500/400?random=5"
              alt="SEOIndia office"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Founded in 2010, SEOIndia started as a small team of passionate developers with a vision to transform businesses through technology. Over the years, we've grown into a leading AI software development company trusted by clients worldwide.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our journey has been marked by continuous innovation, unwavering commitment to quality, and a deep understanding of client needs. We've evolved from a web development agency to a full-service technology partner.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Today, we work with Fortune 500 companies, innovative startups, and everything in between, helping them leverage technology to achieve their business goals.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Mission, Vision, Values */}
      <Section dark title="Our Mission & Values">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="card text-center"
          >
            <h3 className="text-2xl font-bold text-primary dark:text-secondary mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              To empower businesses and individuals with cutting-edge technology solutions that drive innovation, growth, and success in the digital age.
            </p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="card text-center"
          >
            <h3 className="text-2xl font-bold text-primary dark:text-secondary mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              To be the most trusted technology partner for businesses looking to innovate, transform, and scale their operations globally.
            </p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="card text-center"
          >
            <h3 className="text-2xl font-bold text-primary dark:text-secondary mb-4">
              Our Values
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Excellence, innovation, integrity, collaboration, and continuous improvement guide everything we do.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Team Section */}
      <Section title="Our Team" subtitle="Meet the brilliant minds behind SEOIndia">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="card text-center group"
            >
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {member.name}
              </h3>
              <p className="text-sm text-primary dark:text-secondary font-semibold mb-2">
                {member.role}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {member.expertise}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section dark title="Why Choose SEOIndia?">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard
            title="Proven Track Record"
            description="15+ years of experience delivering high-quality solutions to diverse clients across industries."
          />
          <FeatureCard
            title="Expert Team"
            description="Highly skilled professionals with expertise in latest technologies and industry best practices."
          />
          <FeatureCard
            title="Client-Centric"
            description="We prioritize your business goals and work collaboratively to achieve exceptional results."
          />
          <FeatureCard
            title="Innovation Focus"
            description="We stay ahead of technology trends and continuously invest in learning and development."
          />
          <FeatureCard
            title="Quality Assured"
            description="Rigorous testing and quality assurance processes ensure excellence in every deliverable."
          />
          <FeatureCard
            title="Transparent Communication"
            description="Regular updates and transparent communication keep you informed throughout the project."
          />
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Join Our Growing List of Success Stories"
        description="Let's build something extraordinary together."
        primaryCTA={{ text: 'Work With Us', href: '/contact' }}
      />
    </>
  );
}
