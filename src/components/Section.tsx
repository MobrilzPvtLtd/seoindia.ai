'use client';

import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  dark?: boolean;
}

const Section = ({ id, title, subtitle, children, dark = false }: SectionProps) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 transition-colors duration-300 ${
        dark ? 'bg-dark-light text-white' : 'bg-white dark:bg-dark dark:text-white'
      }`}
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`text-lg ${dark ? 'text-gray-200' : 'text-gray-600 dark:text-gray-400'}`}>
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Content */}
        {children}
      </div>
    </section>
  );
};

export default Section;
