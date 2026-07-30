/* empty css                                       */
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_D-iz1OF6.mjs';
import 'piccolore';
import { b as getAllCategories, c as getCategoryBySlug, d as getPostsByCategory, $ as $$BaseLayout } from '../../../chunks/BaseLayout_CyUfhVUD.mjs';
import { $ as $$ArticleCard } from '../../../chunks/ArticleCard_CcUFaCM3.mjs';
import { $ as $$CategoryFilter } from '../../../chunks/CategoryFilter_CLdfBxvd.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://blog-pribadi.vercel.app");
const $$cat = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$cat;
  const { cat } = Astro2.params;
  const allCategories = await getAllCategories();
  const categoryData = await getCategoryBySlug(cat || "");
  const filteredPosts = await getPostsByCategory(cat);
  const categoryName = categoryData?.name || allCategories.find((c) => c.slug === cat)?.name || cat;
  const categoryDescription = `Baca artikel terbaru seputar ${categoryName} di Seputar Redaksi. Update berita ${categoryName} terpercaya dan terkini.`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${categoryName} - Berita & Artikel Terbaru`, "description": categoryDescription }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-10 sm:py-14"> <div class="max-w-6xl mx-auto px-4 sm:px-6"> <!-- Breadcrumb --> <nav class="flex items-center gap-2 text-xs text-gray-500 mb-6" aria-label="Breadcrumb"> <a href="/" class="hover:text-red-600 transition-colors">Beranda</a> <span>›</span> <a href="/blog" class="hover:text-red-600 transition-colors">Berita</a> <span>›</span> <span class="text-gray-900 font-medium">${categoryName}</span> </nav> <div class="mb-8 border-b-2 border-red-600 pb-4"> <p class="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">Kategori</p> <h1 class="text-3xl sm:text-4xl font-black text-gray-900">${categoryName}</h1> <p class="text-gray-500 mt-2 text-sm"> ${filteredPosts.length} artikel dalam kategori ini
</p> </div> ${renderComponent($$result2, "CategoryFilter", $$CategoryFilter, { "categories": allCategories, "activeCategory": cat })} ${filteredPosts.length > 0 ? renderTemplate`<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"> ${filteredPosts.map((post) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { ...post, "layout": "grid" })}`)} </div>` : renderTemplate`<div class="text-center py-20"> <div class="text-6xl mb-4">📰</div> <p class="text-gray-500 text-lg font-medium">Belum ada artikel dalam kategori ini.</p> <a href="/blog" class="mt-4 inline-block text-red-600 font-bold hover:underline">
Lihat semua artikel →
</a> </div>`} </div> </section> ` })}`;
}, "C:/Users/devel/OneDrive/Desktop/Blog-Pribadi/src/pages/blog/category/[cat].astro", void 0);

const $$file = "C:/Users/devel/OneDrive/Desktop/Blog-Pribadi/src/pages/blog/category/[cat].astro";
const $$url = "/blog/category/[cat]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$cat,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
