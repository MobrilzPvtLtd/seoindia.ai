import { Section, BlogCard } from '@/components';
import { getAllPosts } from '@/lib/blog';

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter(post => post.featured);

  return (
    <>
      {/* Featured Posts */}
      <Section
        title="Our Blog"
        subtitle="Insights, tutorials, and updates from our team of experts"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              author={post.author}
              category={post.category}
              image={post.image}
            />
          ))}
        </div>
      </Section>

      {/* All Posts */}
      <Section title="Latest Articles" subtitle="Stay updated with our latest insights" dark>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPosts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              author={post.author}
              category={post.category}
              image={post.image}
              slug={post.slug}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
