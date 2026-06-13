import { getCollection } from 'astro:content';

export async function GET() {
  const dreams = await getCollection('dreams');

  const index = dreams.map((d) => ({
    title: d.data.title,
    slug: d.slug,
    excerpt: d.data.excerpt || '',
  }));

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
}
