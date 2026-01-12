'use client';

import { Hero, Section } from '@/components';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone must be at least 10 characters'),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Form submitted:', data);
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: ['hello@seoindia.ai', 'support@seoindia.ai'],
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      details: ['+91 70425731200'],
    },
    {
      icon: <MapPin size={24} />,
      title: 'Address',
      details: ['New Delhi, India', 'Bangalore, India'],
    },
    {
      icon: <Clock size={24} />,
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat - Sun: Closed'],
    },
  ];

  return (
    <>
      {/* Hero */}
      <Hero
        title="Get In Touch"
        subtitle="Have a project in mind? Let's talk about how we can help"
        backgroundImage="https://picsum.photos/1200/600?random=6"
      />

      {/* Contact Form & Info */}
      <Section title="Contact Us">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 rounded-lg"
              >
                Thank you! We'll get back to you shortly.
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-light text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary transition-all"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-light text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary transition-all"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    placeholder="+91 70425731200"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-light text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary transition-all"
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {errors.phone.message}
                    </span>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    {...register('company')}
                    type="text"
                    placeholder="Your company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-light text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary transition-all"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Service Required *
                </label>
                <select
                  {...register('service')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-light text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="ai-development">AI & ML Development</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-development">Mobile Development</option>
                  <option value="data-analytics">Data Analytics</option>
                  <option value="consulting">Consulting</option>
                  <option value="maintenance">Maintenance & Support</option>
                </select>
                {errors.service && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {errors.service.message}
                  </span>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  {...register('message')}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-light text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary transition-all resize-none"
                />
                {errors.message && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="card border-l-4 border-primary dark:border-secondary"
              >
                <div className="flex gap-4 items-start">
                  <div className="text-primary dark:text-secondary flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                      {info.title}
                    </h3>
                    {info.details.map((detail, i) => (
                      <p
                        key={i}
                        className="text-sm text-gray-600 dark:text-gray-400"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Map Section (Placeholder) */}
      <Section
        title="Visit Our Offices"
        subtitle="We operate remotely and can meet across India"
        dark
      >
        <div className="rounded-lg overflow-hidden h-96 bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 dark:border-secondary/30 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={48} className="mx-auto text-primary dark:text-secondary mb-4" />
            <p className="text-gray-600 dark:text-gray-400">
              Map integration coming soon
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
