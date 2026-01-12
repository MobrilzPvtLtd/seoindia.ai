'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  results?: string;
}

const ProjectCard = ({
  id,
  title,
  description,
  image,
  technologies,
  link,
  results,
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      className="card overflow-hidden group cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-colors"
            >
              <ExternalLink size={24} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-secondary transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">{description}</p>

        {results && (
          <p className="text-sm text-primary dark:text-secondary font-semibold">{results}</p>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary text-xs rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Details Link */}
        <Link
          href={`/portfolio/${id}`}
          className="inline-block text-primary dark:text-secondary font-semibold hover:gap-2 transition-all duration-300 mt-2"
        >
          View Details →
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
