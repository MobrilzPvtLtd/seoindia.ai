import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPortfolioBySlug, getAllPortfolioItems } from '@/lib/portfolio';
import { Calendar, User, Tag, ArrowLeft, ExternalLink, Github } from 'lucide-react';

export async function generateStaticParams() {
  const portfolioItems = getAllPortfolioItems();
  return portfolioItems.map((item) => ({
    slug: item.slug,
  }));
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const portfolio = getPortfolioBySlug(slug);

  if (!portfolio) {
    notFound();
  }

  return (
    <article className="py-16 bg-white dark:bg-dark">
      {/* Back Button */}
      <div className="container-custom mb-8">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Portfolio
        </Link>
      </div>

      {/* Hero Image */}
      <div className="relative h-[500px] w-full mb-12">
        <Image
          src={portfolio.image}
          alt={portfolio.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 container-custom">
          <span className="inline-block px-4 py-1 bg-primary/90 text-white rounded-full text-sm font-semibold mb-4">
            {portfolio.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {portfolio.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Description */}
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {portfolio.description}
              </p>

              {/* Divider */}
              <hr className="border-gray-200 dark:border-gray-700 mb-8" />

              {/* Project Details */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(portfolio.content) }} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Project Info Card */}
                <div className="bg-gray-50 dark:bg-dark-light rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    Project Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Client</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{portfolio.client}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Completed</p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {new Date(portfolio.completedDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                        })}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Category</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{portfolio.category}</p>
                    </div>
                  </div>

                  {/* Links */}
                  {(portfolio.projectUrl || portfolio.githubUrl) && (
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-3">
                      {portfolio.projectUrl && (
                        <a
                          href={portfolio.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                        >
                          <ExternalLink size={18} />
                          View Live Project
                        </a>
                      )}
                      {portfolio.githubUrl && (
                        <a
                          href={portfolio.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                        >
                          <Github size={18} />
                          View on GitHub
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Technologies */}
                <div className="bg-gray-50 dark:bg-dark-light rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {portfolio.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                {portfolio.tags && portfolio.tags.length > 0 && (
                  <div className="bg-gray-50 dark:bg-dark-light rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {portfolio.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-6 text-white">
                  <h3 className="text-lg font-bold mb-2">
                    Interested in Similar Project?
                  </h3>
                  <p className="text-sm text-white/90 mb-4">
                    Let's discuss how we can help you achieve your goals.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block w-full text-center px-4 py-2 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

// Simple markdown to HTML converter (same as blog)
function convertMarkdownToHtml(markdown: string): string {
  let html = markdown;

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Italic
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Code blocks
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Unordered lists
  html = html.replace(/^\- (.+)$/gim, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

  // Ordered lists
  html = html.replace(/^\d+\. (.+)$/gim, '<li>$1</li>');

  // Paragraphs
  html = html.replace(/\n\n/g, '</p><p>');
  html = '<p>' + html + '</p>';

  // Clean up empty paragraphs
  html = html.replace(/<p><\/p>/g, '');
  html = html.replace(/<p>(<h[1-6]>)/g, '$1');
  html = html.replace(/(<\/h[1-6]>)<\/p>/g, '$1');
  html = html.replace(/<p>(<ul>)/g, '$1');
  html = html.replace(/(<\/ul>)<\/p>/g, '$1');
  html = html.replace(/<p>(<pre>)/g, '$1');
  html = html.replace(/(<\/pre>)<\/p>/g, '$1');
  html = html.replace(/<p>(<blockquote>)/g, '$1');
  html = html.replace(/(<\/blockquote>)<\/p>/g, '$1');

  // Line breaks
  html = html.replace(/\n/g, '<br />');

  // Blockquotes
  html = html.replace(/^&gt; (.+)$/gim, '<blockquote>$1</blockquote>');

  return html;
}
