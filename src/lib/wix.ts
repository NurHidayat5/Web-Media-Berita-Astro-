import { createClient, OAuthStrategy } from '@wix/sdk';
import { posts, categories } from '@wix/blog';

function getEnv(key: string): string {
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    return import.meta.env[key] || '';
  }
  if (typeof process !== 'undefined' && process.env) {
    return process.env[key] || '';
  }
  return '';
}

const WIX_CLIENT_ID = getEnv('WIX_CLIENT_ID');
const WIX_SITE_URL = getEnv('WIX_SITE_URL') || 'https://nurhidayatttyattt.wixsite.com/mertani-dev';

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

// Helper to convert wix:image:// to valid HTTP URL
function getWixImageUrl(wixUrl: string): string {
  if (!wixUrl) return '';
  if (wixUrl.startsWith('http')) return wixUrl;
  const match = wixUrl.match(/v1\/([^/]+)/);
  if (match && match[1]) {
    return `https://static.wixstatic.com/media/${match[1]}`;
  }
  return wixUrl;
}

// Helper to render Wix Rich Content AST to HTML
function renderRichContentNode(node: any): string {
  if (!node) return '';
  switch (node.type) {
    case 'TEXT':
      let text = node.textData?.text || '';
      if (node.textData?.decorations) {
        // Balik urutan agar tag pembungkus HTML diterapkan dengan benar dari dalam ke luar
        const decs = [...node.textData.decorations].reverse();
        decs.forEach((dec: any) => {
          if (dec.type === 'BOLD') text = `<strong>${text}</strong>`;
          else if (dec.type === 'ITALIC') text = `<em>${text}</em>`;
          else if (dec.type === 'UNDERLINE') text = `<u>${text}</u>`;
          else if (dec.type === 'LINK') {
            const url = dec.linkData?.link?.url || '#';
            const target = dec.linkData?.link?.target === 'BLANK' ? ' target="_blank"' : '';
            text = `<a href="${url}"${target} rel="noopener noreferrer" class="text-blue-600 hover:underline">${text}</a>`;
          }
        });
      }
      return text;
    case 'PARAGRAPH':
      const pContent = (node.nodes || []).map(renderRichContentNode).join('');
      return pContent ? `<p>${pContent}</p>` : '<br/>';
    case 'HEADING':
      const hLevel = node.headingData?.level || 2;
      const hContent = (node.nodes || []).map(renderRichContentNode).join('');
      return `<h${hLevel}>${hContent}</h${hLevel}>`;
    case 'IMAGE':
      const srcId = node.imageData?.image?.src?.id;
      const url = srcId ? `https://static.wixstatic.com/media/${srcId}` : '';
      return url ? `<img src="${url}" alt="${node.imageData?.altText || ''}" class="w-full rounded-lg my-4" />` : '';
    case 'BULLETED_LIST':
      return `<ul class="list-disc pl-5 mb-4">${(node.nodes || []).map(renderRichContentNode).join('')}</ul>`;
    case 'ORDERED_LIST':
      return `<ol class="list-decimal pl-5 mb-4">${(node.nodes || []).map(renderRichContentNode).join('')}</ol>`;
    case 'LIST_ITEM':
      return `<li>${(node.nodes || []).map(renderRichContentNode).join('')}</li>`;
    case 'BLOCKQUOTE':
      return `<blockquote class="border-l-4 border-gray-300 pl-4 italic my-4">${(node.nodes || []).map(renderRichContentNode).join('')}</blockquote>`;
    default:
      if (node.nodes && node.nodes.length > 0) {
        return node.nodes.map(renderRichContentNode).join('');
      }
      return '';
  }
}

export function renderRichContent(richContent: any): string {
  if (!richContent || !richContent.nodes) return '';
  return richContent.nodes.map(renderRichContentNode).join('\n');
}

// Inisialisasi Wix Client
let wixClient: ReturnType<typeof createClient> | null = null;
if (WIX_CLIENT_ID) {
  wixClient = createClient({
    modules: { posts, categories },
    auth: OAuthStrategy({ clientId: WIX_CLIENT_ID })
  });
}

let cachedCategories: Map<string, string> | null = null;
let categoriesCacheTime = 0;
const CACHE_TTL = 1000 * 15; // 15 detik untuk update real-time

async function getCategoryMap() {
  if (cachedCategories && (Date.now() - categoriesCacheTime < CACHE_TTL)) return cachedCategories;
  const cats = await getAllCategories();
  cachedCategories = new Map();
  for (const c of cats) {
    cachedCategories.set(c.id, c.name);
  }
  categoriesCacheTime = Date.now();
  return cachedCategories;
}

let cachedPosts: BlogPost[] | null = null;
let postsCacheTime = 0;

// 1. Fetch All Posts using SDK (Supports thousands of articles via pagination)
export async function getAllPosts(): Promise<BlogPost[]> {
  if (!wixClient) {
    console.error('ERROR: WIX_CLIENT_ID belum diset di .env! Harus diisi untuk mendapatkan ribuan artikel.');
    return []; // Fallback kosong jika tidak ada client ID
  }

  // Gunakan cache jika masih valid
  if (cachedPosts && (Date.now() - postsCacheTime < CACHE_TTL)) {
    return cachedPosts;
  }

  try {
    const catMap = await getCategoryMap();
    let allPosts: any[] = [];
    let res = await wixClient.posts.queryPosts().limit(100).find();
    allPosts = [...res.items];
    
    // Pagination loop
    while (res.hasNext()) {
      res = await res.next();
      allPosts = [...allPosts, ...res.items];
    }

    const mappedPosts = allPosts.map(post => {
      const rawImage = post.coverImage || post.media?.wixMedia?.image || post.media?.url || '';
      
      return {
        id: post._id || '',
        title: post.title || '',
        slug: post.slug || '',
        excerpt: post.excerpt || '',
        content: '', // Konten penuh akan dimuat secara lazy di getPostContent
        coverImage: getWixImageUrl(rawImage),
        category: catMap.get(post.categoryIds?.[0]) || 'Lainnya', 
        publishDate: post.firstPublishedDate ? post.firstPublishedDate.toString() : '',
        author: 'Hidayat',
        url: `${WIX_SITE_URL}/post/${post.slug}`
      };
    });

    cachedPosts = mappedPosts;
    postsCacheTime = Date.now();
    return mappedPosts;

  } catch (error) {
    console.error('Error fetching posts with SDK:', error);
    return [];
  }
}

// 2. Fetch Post by Slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}

// 3. Fetch Posts by Category
export async function getPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  const cats = await getAllCategories();

  // Cari kategori berdasarkan slug (case-insensitive)
  const categoryObj = cats.find(c =>
    c.slug === categorySlug ||
    c.slug.toLowerCase() === categorySlug.toLowerCase()
  );

  if (!categoryObj) return [];

  // Filter artikel yang kategorinya cocok dengan nama kategori
  return allPosts.filter(post => post.category === categoryObj.name);
}

// Helper: Cari satu kategori berdasarkan slug
export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const cats = await getAllCategories();
  return cats.find(c =>
    c.slug === slug || c.slug.toLowerCase() === slug.toLowerCase()
  ) || null;
}

// 4. Fetch All Categories (dengan deduplication berdasarkan nama)
export async function getAllCategories(): Promise<Category[]> {
  if (!wixClient) return [];

  try {
    const res = await wixClient.categories.queryCategories().limit(100).find();
    const seen = new Set<string>();
    const unique: Category[] = [];

    for (const cat of res.items as any[]) {
      const name: string = cat.label || '';
      // Skip kategori yang namanya sudah ada (duplikat)
      if (!name || seen.has(name.toLowerCase())) continue;
      seen.add(name.toLowerCase());
      unique.push({
        id: cat._id || '',
        name,
        slug: cat.slug || '',
      });
    }

    return unique;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// 5. Fetch Full Post Content
export async function getPostContent(slug: string): Promise<string> {
  if (!wixClient) return '';
  try {
    const post = await getPostBySlug(slug);
    if (!post) return '';

    // Ambil detail post beserta RICH_CONTENT menggunakan SDK
    const detailedPost = await wixClient.posts.getPost(post.id, {
      fieldsets: ['RICH_CONTENT']
    });

    if (detailedPost && detailedPost.richContent) {
      return renderRichContent(detailedPost.richContent);
    }

    return post.excerpt;
  } catch (error) {
    console.error('Error fetching post content:', error);
    return '';
  }
}
