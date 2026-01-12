'use client';

import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  description?: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  background?: string;
}

const CTASection = ({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  background = 'from-primary to-secondary',
}: CTASectionProps) => {
  return (
    <section
      className={`py-16 bg-gradient-to-r ${background} dark:from-primary/80 dark:to-secondary/80`}
    >
      <div className="container-custom text-center text-white">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          {title}
        </motion.h2>

        {description && (
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg mb-8 max-w-2xl mx-auto text-white/90"
          >
            {description}
          </motion.p>
        )}

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={primaryCTA.href}
            className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            {primaryCTA.text}
          </a>
          {secondaryCTA && (
            <a
              href={secondaryCTA.href}
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
            >
              {secondaryCTA.text}
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
