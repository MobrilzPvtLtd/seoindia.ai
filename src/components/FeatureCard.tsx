'use client';

import { motion } from 'framer-motion';

interface FeatureProps {
  icon?: React.ReactNode;
  number?: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, number, title, description }: FeatureProps) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-secondary transition-all duration-300"
    >
      {/* Icon or Number */}
      <div className="mb-4 space-y-2">
        {icon && (
          <div className="text-4xl text-primary dark:text-secondary">{icon}</div>
        )}
        {number && (
          <div className="text-4xl font-bold text-primary dark:text-secondary">{number}</div>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
