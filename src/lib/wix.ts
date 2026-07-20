import { XMLParser } from 'fast-xml-parser';

function getEnv(key: string): string {
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    return import.meta.env[key] || '';
  }
  if (typeof process !== 'undefined' && process.env) {
    return process.env[key] || '';
  }
  return '';
}

const WIX_SITE_URL = getEnv('WIX_SITE_URL') || 'https://nurhidayatttyattt.wixsite.com/mertani-dev';
const RSS_FEED_URL = `${WIX_SITE_URL}/blog-feed.xml`;

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  publishDate: string;
  author: string;
  url: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

function extractSlugFromUrl(url: string): string {
  const match = url.match(/\/post\/([^/]+)$/);
  return match ? match[1] : '';
}

function parseRSSDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toISOString();
}

async function fetchRSSFeed(): Promise<any> {
  const response = await fetch(RSS_FEED_URL);

  if (!response.ok) {
    throw new Error(`RSS Feed error: ${response.status} ${response.statusText}`);
  }

  const xml = await response.text();
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
  });

  return parser.parse(xml);
}

function extractCategories(item: any): string[] {
  if (!item.category) return [];
  if (Array.isArray(item.category)) {
    return item.category.map((c: any) => {
      if (typeof c === 'string') return c;
      return c['#text'] || c._ || '';
    });
  }
  if (typeof item.category === 'string') return [item.category];
  if (item.category['#text']) return [item.category['#text']];
  return [];
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const data = await fetchRSSFeed();
    const channel = data.rss?.channel;

    if (!channel?.item) return [];

    const items = Array.isArray(channel.item) ? channel.item : [channel.item];

    return items.map((item: any) => {
      const url = item.link || '';
      const categories = extractCategories(item);

      return {
        id: item.guid?.['#text'] || item.guid || '',
        title: item.title || '',
        slug: extractSlugFromUrl(url),
        excerpt: (item.description || '').substring(0, 200).replace(/<[^>]*>/g, '').trim(),
        content: '',
        coverImage: item.enclosure?.['@_url'] || '',
        category: categories[0] || '',
        publishDate: parseRSSDate(item.pubDate || ''),
        author: item['dc:creator'] || '',
        url: url,
      };
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const posts = await getAllPosts();
    return posts.find((post) => post.slug === slug) || null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  try {
    const posts = await getAllPosts();
    return posts.filter((post) =>
      post.category.toLowerCase() === category.toLowerCase()
    );
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return [];
  }
}

export async function getAllCategories(): Promise<Category[]> {
  try {
    const posts = await getAllPosts();
    const categoryMap = new Map<string, Category>();

    posts.forEach((post) => {
      if (post.category && !categoryMap.has(post.category)) {
        categoryMap.set(post.category, {
          id: post.category,
          name: post.category,
          slug: post.category.toLowerCase().replace(/\s+/g, '-'),
        });
      }
    });

    return Array.from(categoryMap.values());
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function getPostContent(slug: string): Promise<string> {
  try {
    const post = await getPostBySlug(slug);
    if (!post?.url) return '';

    const response = await fetch(post.url);
    const html = await response.text();

    const contentMatch = html.match(/<div[^>]*class="[^"]*blog-post__text-container[^"]*"[^>]*>([\s\S]*?)<\/div>/);
    if (contentMatch) {
      return contentMatch[1].trim();
    }

    return post.excerpt;
  } catch (error) {
    console.error('Error fetching post content:', error);
    return '';
  }
}