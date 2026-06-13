export async function GET() {
  const modules = import.meta.glob('./*.md', { eager: true });

  const index = Object.entries(modules).map(([path, mod]) => {
    const slug = path.replace('./', '').replace('.md', '');
    return {
      title: mod.frontmatter.title || slug.replace(/-/g, ' '),
      slug,
      excerpt: mod.frontmatter.excerpt || ''
    };
  });

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
}
