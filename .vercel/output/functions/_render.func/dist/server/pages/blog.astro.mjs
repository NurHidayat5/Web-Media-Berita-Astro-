/* empty css                                 */
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D-iz1OF6.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BcOiT_WO.mjs';
import { $ as $$ArticleCard } from '../chunks/ArticleCard_CcUFaCM3.mjs';
import { $ as $$CategoryFilter } from '../chunks/CategoryFilter_CLdfBxvd.mjs';
import { e as getAllPosts, b as getAllCategories } from '../chunks/wix_BWxTjKMc.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getAllPosts();
  const categories = await getAllCategories();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog", "description": "Semua artikel, tutorial, dan tulisan Hidayat seputar teknologi dan pengembangan web." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-16 sm:py-20"> <div class="max-w-6xl mx-auto px-6"> <div class="mb-10"> <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Blog</h1> <p class="text-gray-500">Artikel, tutorial, dan pemikiran seputar teknologi.</p> </div> ${renderComponent($$result2, "CategoryFilter", $$CategoryFilter, { "categories": categories })} ${posts.length > 0 ? renderTemplate`<div class="grid gap-10 sm:grid-cols-2"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { ...post })}`)} </div>` : renderTemplate`<div class="text-center py-20"> <p class="text-gray-500 text-lg">Belum ada artikel yang dipublikasikan.</p> </div>`} </div> </section> ` })}`;
}, "C:/Users/devel/OneDrive/Desktop/Blog-Pribadi/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/devel/OneDrive/Desktop/Blog-Pribadi/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
