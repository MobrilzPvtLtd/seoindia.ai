'use client';

import {
  Hero,
  Section,
  ServiceCard,
  ProjectCard,
  Testimonial,
  CTASection,
  FeatureCard,
} from '@/components';
import { services, portfolioProjects, testimonials } from '@/data';
import { motion } from 'framer-motion';
import { Code2, Zap, Users, TrendingUp, Award, Rocket } from 'lucide-react';

export default function Home() {
  const stats = [
    { icon: <Users size={32} />, number: '150+', label: 'Satisfied Clients' },
    {
      icon: <Code2 size={32} />,
      number: '200+',
      label: 'Projects Delivered',
    },
    {
      icon: <TrendingUp size={32} />,
      number: '15+',
      label: 'Years Experience',
    },
    {
      icon: <Award size={32} />,
      number: '50+',
      label: 'Awards & Recognition',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Transform Your Business with AI & Innovation"
        subtitle="Leading software development company delivering cutting-edge AI solutions, web, and mobile applications."
        backgroundImage="https://picsum.photos/1200/600?random=1"
        primaryCTA={{ text: 'Get Started', href: '/contact' }}
        secondaryCTA={{ text: 'Learn More', href: '#services' }}
      />

      {/* Stats Section */}
      <Section title="Our Impact" subtitle="Trusted by leading brands worldwide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <FeatureCard
              key={index}
              icon={stat.icon}
              number={stat.number}
              title={stat.label}
              description=""
            />
          ))}
        </div>
      </Section>

      {/* Services Section */}
      <Section
        id="services"
        title="Our Services"
        subtitle="Comprehensive solutions for your digital transformation"
        dark
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              features={service.features.slice(0, 3)}
            />
          ))}
        </div>
      </Section>

      {/* Portfolio Section */}
      <Section title="Featured Projects" subtitle="Showcase of our recent works">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.slice(0, 6).map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/portfolio" className="btn-primary inline-block">
            View All Projects →
          </a>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section
        title="Why Choose SEOIndia?"
        subtitle="Excellence in every project we undertake"
        dark
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Rocket size={32} />}
            title="Innovation First"
            description="We leverage the latest technologies and best practices to deliver cutting-edge solutions."
          />
          <FeatureCard
            icon={<Zap size={32} />}
            title="Fast Delivery"
            description="Agile development methodology ensures quick time-to-market without compromising quality."
          />
          <FeatureCard
            icon={<Users size={32} />}
            title="Expert Team"
            description="Our team of experienced developers, designers, and consultants are dedicated to your success."
          />
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section title="Client Testimonials" subtitle="What our clients say about us">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Project?"
        description="Let's collaborate and build something amazing together. Get in touch with our team today."
        primaryCTA={{ text: 'Contact Us Now', href: '/contact' }}
        secondaryCTA={{ text: 'Schedule a Call', href: '/contact' }}
      />
    </>
  );
}
