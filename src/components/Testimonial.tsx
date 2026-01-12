'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating?: number;
}

const Testimonial = ({
  name,
  role,
  company,
  image,
  content,
  rating = 5,
}: TestimonialProps) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      className="card text-center h-full"
    >
      {/* Rating Stars */}
      <div className="flex gap-1 justify-center mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-600 dark:text-gray-400 mb-6 italic">"{content}"</p>

      {/* Divider */}
      <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>

      {/* Author Info */}
      <div className="flex flex-col items-center gap-3">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h4 className="font-bold text-gray-900 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {role} at {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;
