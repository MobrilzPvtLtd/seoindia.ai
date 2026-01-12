import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getServiceBySlug, getAllServices } from '@/lib/services';
import { getFeaturedPortfolio } from '@/lib/portfolio';
import { ArrowLeft, Check } from 'lucide-react';
import { ProjectCard } from '@/components';

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const relatedProjects = getFeaturedPortfolio().slice(0, 3);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-white dark:bg-dark">
      {/* Back Button */}
      <div className="container-custom pt-8 pb-4">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Services
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {service.description}
            </p>
            {service.pricing && (
              <p className="text-lg font-semibold text-primary">{service.pricing}</p>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(service.content) }} />
              </div>

              {/* Technologies */}
              {service.technologies && service.technologies.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Technologies We Use
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Features Card */}
                <div className="bg-gray-50 dark:bg-dark-light rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits Card */}
                {service.benefits && service.benefits.length > 0 && (
                  <div className="bg-gray-50 dark:bg-dark-light rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                      Benefits
                    </h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                          <Check size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Deliverables Card */}
                {service.deliverables && service.deliverables.length > 0 && (
                  <div className="bg-gray-50 dark:bg-dark-light rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                      What You Get
                    </h3>
                    <ul className="space-y-3">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                          <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Card */}
                <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-6 text-white">
                  <h3 className="text-lg font-bold mb-2">
                    Ready to Get Started?
                  </h3>
                  <p className="text-sm text-white/90 mb-4">
                    Let's discuss your project and create a solution that exceeds expectations.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block w-full text-center px-4 py-2 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-gray-50 dark:bg-dark-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                See how we've helped other clients with similar services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  id={project.slug}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/portfolio"
                className="btn-primary inline-block"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

// Simple markdown to HTML converter
function convertMarkdownToHtml(markdown: string): string {
  let html = markdown;

  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  html = html.replace(/^\- (.+)$/gim, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
  html = html.replace(/^\d+\. (.+)$/gim, '<li>$1</li>');
  html = html.replace(/\n\n/g, '</p><p>');
  html = '<p>' + html + '</p>';
  html = html.replace(/<p><\/p>/g, '');
  html = html.replace(/<p>(<h[1-6]>)/g, '$1');
  html = html.replace(/(<\/h[1-6]>)<\/p>/g, '$1');
  html = html.replace(/<p>(<ul>)/g, '$1');
  html = html.replace(/(<\/ul>)<\/p>/g, '$1');
  html = html.replace(/<p>(<pre>)/g, '$1');
  html = html.replace(/(<\/pre>)<\/p>/g, '$1');
  html = html.replace(/\n/g, '<br />');

  return html;
}
