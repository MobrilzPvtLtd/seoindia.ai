'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
}

const Hero = ({
  title,
  subtitle,
  backgroundImage = 'https://picsum.photos/1200/600?random=1',
  primaryCTA,
  secondaryCTA,
}: HeroProps) => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover dark:opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 dark:from-black/80 dark:to-black/60"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>

        {/* CTA Buttons */}
        {(primaryCTA || secondaryCTA) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {primaryCTA && (
              <a href={primaryCTA.href} className="btn-primary">
                {primaryCTA.text}
              </a>
            )}
            {secondaryCTA && (
              <a href={secondaryCTA.href} className="btn-outline">
                {secondaryCTA.text}
              </a>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
