'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  features?: string[];
  gradient?: string;
}

const ServiceCard = ({
  icon,
  title,
  description,
  features,
  gradient = 'from-primary/20 to-secondary/20',
}: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      className={`card bg-gradient-to-br ${gradient} border border-gray-700/50 hover:border-primary transition-all duration-300`}
    >
      {/* Icon */}
      {icon && (
        <div className="mb-4 p-4 inline-block rounded-lg bg-primary/10">
          <div className="text-primary">{icon}</div>
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-200 mb-4">{description}</p>

      {/* Features */}
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-secondary mt-1 font-bold">✓</span>
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default ServiceCard;
