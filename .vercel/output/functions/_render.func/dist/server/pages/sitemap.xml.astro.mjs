import { e as getAllPosts, b as getAllCategories } from '../chunks/wix_urwRVrj4.mjs';
export { renderers } from '../renderers.mjs';

const GET = async ({ site }) => {
  const posts = await getAllPosts();
  const categories = await getAllCategories();
  const baseUrl = site ? site.href.replace(/\/$/, "") : "https://blog-pribadi.vercel.app";
  const staticPages = ["", "/blog", "/about", "/search"];
  const staticUrls = staticPages.map((page) => `
    <url>
      <loc>${baseUrl}${page}</loc>
      <changefreq>daily</changefreq>
      <priority>${page === "" ? "1.0" : "0.8"}</priority>
    </url>
  `).join("");
  const categoryUrls = categories.map((cat) => `
    <url>
      <loc>${baseUrl}/blog/category/${cat.slug}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
  `).join("");
  const postUrls = posts.map((post) => {
    let pubDateIso = (/* @__PURE__ */ new Date()).toISOString();
    try {
      if (post.publishDate) {
        pubDateIso = new Date(post.publishDate).toISOString();
      }
    } catch (e) {
    }
    return `
    <url>
      <loc>${baseUrl}/blog/${post.slug}</loc>
      <lastmod>${pubDateIso}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `;
  }).join("");
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${categoryUrls}
${postUrls}
</urlset>`.trim();
  return new Response(sitemapXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
