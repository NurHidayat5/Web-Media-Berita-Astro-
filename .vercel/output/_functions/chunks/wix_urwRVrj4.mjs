import { createClient, OAuthStrategy } from '@wix/sdk';
import { categories, posts } from '@wix/blog';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://seputar-redaksi.vercel.app", "SSR": true};
function getEnv(key) {
  if (typeof import.meta !== "undefined" && Object.assign(__vite_import_meta_env__, { WIX_SITE_URL: "https://nurhidayatttyattt.wixsite.com/mertani-dev", WIX_CLIENT_ID: "e089a042-d4ea-4499-b818-7cf005773e82" })) {
    return Object.assign(__vite_import_meta_env__, { WIX_SITE_URL: "https://nurhidayatttyattt.wixsite.com/mertani-dev", WIX_CLIENT_ID: "e089a042-d4ea-4499-b818-7cf005773e82" })[key] || "";
  }
  if (typeof process !== "undefined" && process.env) {
    return process.env[key] || "";
  }
  return "";
}
const WIX_CLIENT_ID = getEnv("WIX_CLIENT_ID");
const WIX_SITE_URL = getEnv("WIX_SITE_URL") || "https://nurhidayatttyattt.wixsite.com/mertani-dev";
function getWixImageUrl(wixUrl) {
  if (!wixUrl) return "";
  if (wixUrl.startsWith("http")) return wixUrl;
  const match = wixUrl.match(/v1\/([^/]+)/);
  if (match && match[1]) {
    return `https://static.wixstatic.com/media/${match[1]}`;
  }
  return wixUrl;
}
function renderRichContentNode(node) {
  if (!node) return "";
  switch (node.type) {
    case "TEXT":
      let text = node.textData?.text || "";
      if (node.textData?.decorations) {
        const decs = [...node.textData.decorations].reverse();
        decs.forEach((dec) => {
          if (dec.type === "BOLD") text = `<strong>${text}</strong>`;
          else if (dec.type === "ITALIC") text = `<em>${text}</em>`;
          else if (dec.type === "UNDERLINE") text = `<u>${text}</u>`;
          else if (dec.type === "LINK") {
            const url2 = dec.linkData?.link?.url || "#";
            const target = dec.linkData?.link?.target === "BLANK" ? ' target="_blank"' : "";
            text = `<a href="${url2}"${target} rel="noopener noreferrer" class="text-blue-600 hover:underline">${text}</a>`;
          }
        });
      }
      return text;
    case "PARAGRAPH":
      const pContent = (node.nodes || []).map(renderRichContentNode).join("");
      return pContent ? `<p>${pContent}</p>` : "<br/>";
    case "HEADING":
      const hLevel = node.headingData?.level || 2;
      const hContent = (node.nodes || []).map(renderRichContentNode).join("");
      return `<h${hLevel}>${hContent}</h${hLevel}>`;
    case "IMAGE":
      const srcId = node.imageData?.image?.src?.id;
      const url = srcId ? `https://static.wixstatic.com/media/${srcId}` : "";
      return url ? `<img src="${url}" alt="${node.imageData?.altText || ""}" class="w-full rounded-lg my-4" />` : "";
    case "BULLETED_LIST":
      return `<ul class="list-disc pl-5 mb-4">${(node.nodes || []).map(renderRichContentNode).join("")}</ul>`;
    case "ORDERED_LIST":
      return `<ol class="list-decimal pl-5 mb-4">${(node.nodes || []).map(renderRichContentNode).join("")}</ol>`;
    case "LIST_ITEM":
      return `<li>${(node.nodes || []).map(renderRichContentNode).join("")}</li>`;
    case "BLOCKQUOTE":
      return `<blockquote class="border-l-4 border-gray-300 pl-4 italic my-4">${(node.nodes || []).map(renderRichContentNode).join("")}</blockquote>`;
    default:
      if (node.nodes && node.nodes.length > 0) {
        return node.nodes.map(renderRichContentNode).join("");
      }
      return "";
  }
}
function renderRichContent(richContent) {
  if (!richContent || !richContent.nodes) return "";
  return richContent.nodes.map(renderRichContentNode).join("\n");
}
let wixClient = null;
if (WIX_CLIENT_ID) {
  wixClient = createClient({
    modules: { posts, categories },
    auth: OAuthStrategy({ clientId: WIX_CLIENT_ID })
  });
}
let cachedCategories = null;
let categoriesCacheTime = 0;
const CACHE_TTL = 1e3 * 15;
async function getCategoryMap() {
  if (cachedCategories && Date.now() - categoriesCacheTime < CACHE_TTL) return cachedCategories;
  const cats = await getAllCategories();
  cachedCategories = /* @__PURE__ */ new Map();
  for (const c of cats) {
    cachedCategories.set(c.id, c.name);
  }
  categoriesCacheTime = Date.now();
  return cachedCategories;
}
let cachedPosts = null;
let postsCacheTime = 0;
async function getAllPosts() {
  if (!wixClient) {
    console.error("ERROR: WIX_CLIENT_ID belum diset di .env! Harus diisi untuk mendapatkan ribuan artikel.");
    return [];
  }
  if (cachedPosts && Date.now() - postsCacheTime < CACHE_TTL) {
    return cachedPosts;
  }
  try {
    const catMap = await getCategoryMap();
    let allPosts = [];
    let res = await wixClient.posts.queryPosts().limit(100).find();
    allPosts = [...res.items];
    while (res.hasNext()) {
      res = await res.next();
      allPosts = [...allPosts, ...res.items];
    }
    const mappedPosts = allPosts.map((post) => {
      const rawImage = post.coverImage || post.media?.wixMedia?.image || post.media?.url || "";
      return {
        id: post._id || "",
        title: post.title || "",
        slug: post.slug || "",
        excerpt: post.excerpt || "",
        content: "",
        // Konten penuh akan dimuat secara lazy di getPostContent
        coverImage: getWixImageUrl(rawImage),
        category: catMap.get(post.categoryIds?.[0]) || "Lainnya",
        publishDate: post.firstPublishedDate ? post.firstPublishedDate.toString() : "",
        author: "Tim Seputar Redaksi",
        url: `${WIX_SITE_URL}/post/${post.slug}`
      };
    });
    cachedPosts = mappedPosts;
    postsCacheTime = Date.now();
    return mappedPosts;
  } catch (error) {
    console.error("Error fetching posts with SDK:", error);
    return [];
  }
}
async function getPostBySlug(slug) {
  const posts2 = await getAllPosts();
  return posts2.find((post) => post.slug === slug) || null;
}
async function getPostsByCategory(categorySlug) {
  const allPosts = await getAllPosts();
  const cats = await getAllCategories();
  const categoryObj = cats.find(
    (c) => c.slug === categorySlug || c.slug.toLowerCase() === categorySlug.toLowerCase()
  );
  if (!categoryObj) return [];
  return allPosts.filter((post) => post.category === categoryObj.name);
}
async function getCategoryBySlug(slug) {
  const cats = await getAllCategories();
  return cats.find(
    (c) => c.slug === slug || c.slug.toLowerCase() === slug.toLowerCase()
  ) || null;
}
async function getAllCategories() {
  if (!wixClient) return [];
  try {
    const res = await wixClient.categories.queryCategories().limit(100).find();
    const seen = /* @__PURE__ */ new Set();
    const unique = [];
    for (const cat of res.items) {
      const name = cat.label || "";
      if (!name || seen.has(name.toLowerCase())) continue;
      seen.add(name.toLowerCase());
      unique.push({
        id: cat._id || "",
        name,
        slug: cat.slug || ""
      });
    }
    return unique;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
async function getPostContent(slug) {
  if (!wixClient) return "";
  try {
    const post = await getPostBySlug(slug);
    if (!post) return "";
    const detailedPost = await wixClient.posts.getPost(post.id, {
      fieldsets: ["RICH_CONTENT"]
    });
    if (detailedPost && detailedPost.richContent) {
      return renderRichContent(detailedPost.richContent);
    }
    return post.excerpt;
  } catch (error) {
    console.error("Error fetching post content:", error);
    return "";
  }
}

export { getPostContent as a, getAllCategories as b, getCategoryBySlug as c, getPostsByCategory as d, getAllPosts as e, getPostBySlug as g };
