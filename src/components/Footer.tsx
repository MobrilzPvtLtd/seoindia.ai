'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark dark:bg-black text-white dark:text-gray-200 pt-12 pb-6">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              SEO<span className="text-secondary">India</span>
            </h3>
            <p className="text-gray-400">
              Leading AI software development company delivering innovative solutions.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="#" className="text-secondary hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-secondary hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-secondary hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-secondary hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/portfolio', label: 'Portfolio' },
                { href: '/about', label: 'About' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-secondary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'AI Development',
                'Web Development',
                'Mobile Apps',
                'Data Analytics',
                'Consulting',
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-secondary transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@seoindia.ai"
                className="flex gap-2 items-center text-gray-400 hover:text-secondary transition-colors duration-300"
              >
                <Mail size={16} />
                hello@seoindia.ai
              </a>
              <a
                href="tel:+9170425731200"
                className="flex gap-2 items-center text-gray-400 hover:text-secondary transition-colors duration-300"
              >
                <Phone size={16} />
                +91 70425731200
              </a>
              <div className="flex gap-2 items-start text-gray-400">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} SEOIndia AI. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-secondary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-secondary text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="text-gray-400 hover:text-secondary text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
