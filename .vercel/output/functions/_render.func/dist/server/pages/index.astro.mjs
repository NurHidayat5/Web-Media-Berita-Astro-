/* empty css                                 */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, k as renderComponent, h as addAttribute } from '../chunks/astro/server_D-iz1OF6.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DJf27ioN.mjs';
import { $ as $$ArticleCard } from '../chunks/ArticleCard_FRet93lY.mjs';
import 'clsx';
/* empty css                                 */
import { e as getAllPosts, b as getAllCategories } from '../chunks/wix_urwRVrj4.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://seputar-redaksi.vercel.app");
const $$AdsterraAd = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AdsterraAd;
  const { format = "banner" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", `<div class="flex justify-center w-full overflow-hidden my-4 bg-gray-50 rounded-lg p-2 border border-gray-100" data-astro-cid-4dzc73gg> <div class="max-w-full overflow-x-auto text-center hide-scrollbar flex justify-center" data-astro-cid-4dzc73gg> <!-- Script Iklan Adsterra 728x90 --> <script>
      atOptions = {
        'key' : 'd82f91bac4277090adaaef9711ba534b',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    <\/script> <script src="https://www.highperformanceformat.com/d82f91bac4277090adaaef9711ba534b/invoke.js"><\/script> </div> </div> `])), maybeRenderHead());
}, "C:/Users/devel/OneDrive/Desktop/Blog-Pribadi/src/components/AdsterraAd.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const rawPosts = await getAllPosts();
  const categories = await getAllCategories();
  let allPosts = [...rawPosts];
  if (allPosts.length > 0 && allPosts.length < 30) {
    while (allPosts.length < 30) {
      allPosts = [...allPosts, ...rawPosts];
    }
  }
  const heroPost = allPosts[0];
  const subheroPosts = allPosts.slice(1, 4);
  const sidebarPosts = allPosts.slice(4, 9);
  const editorsPickPosts = allPosts.slice(9, 12);
  const latestPosts = allPosts.slice(12, 18);
  allPosts.slice(18);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Seputar Redaksi - Berita Terkini & Terpercaya", "description": "Portal berita terpercaya seputar pertanian (Agriculture) dan IoT.", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="bg-red-700 text-white text-sm py-2" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto px-4 sm:px-6 flex items-center" data-astro-cid-j7pv25f6> <span class="bg-white text-red-700 font-bold px-3 py-1 rounded-sm uppercase tracking-wider text-xs mr-4 shrink-0" data-astro-cid-j7pv25f6>
Breaking News
</span> <div class="overflow-hidden whitespace-nowrap flex-1 relative" data-astro-cid-j7pv25f6> <div class="animate-marquee inline-block" data-astro-cid-j7pv25f6> ${rawPosts.slice(0, 5).map((post) => renderTemplate`<a${addAttribute(`/blog/${post.slug}`, "href")} class="mx-4 hover:underline" data-astro-cid-j7pv25f6>
• ${post.title} </a>`)} </div> </div> </div> </div>  <div class="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6" data-astro-cid-j7pv25f6> <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8" data-astro-cid-j7pv25f6> <!-- Main Content (Kiri) --> <div class="lg:col-span-8" data-astro-cid-j7pv25f6> <!-- Headline Section --> ${heroPost && renderTemplate`<div class="mb-8 border-b border-gray-200 pb-8" data-astro-cid-j7pv25f6> <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 gap-y-10" data-astro-cid-j7pv25f6> <div class="sm:col-span-3 border-b border-gray-200 pb-6" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ArticleCard", $$ArticleCard, { ...heroPost, "layout": "hero", "data-astro-cid-j7pv25f6": true })} </div> ${subheroPosts.map((post) => renderTemplate`<div class="col-span-1 border-b border-gray-200 pb-6" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ArticleCard", $$ArticleCard, { ...post, "layout": "grid", "data-astro-cid-j7pv25f6": true })} </div>`)} </div> </div>`} <!-- Latest News --> ${latestPosts.length > 0 && renderTemplate`<div class="mb-8" data-astro-cid-j7pv25f6> <div class="flex items-center justify-between border-b-2 border-red-600 mb-4 pb-2" data-astro-cid-j7pv25f6> <h2 class="text-xl sm:text-2xl font-black text-gray-900 uppercase" data-astro-cid-j7pv25f6>Berita Terbaru</h2> <a href="/blog" class="text-sm font-bold text-red-600 hover:text-red-700" data-astro-cid-j7pv25f6>Lihat Semua &raquo;</a> </div> <div class="space-y-6" data-astro-cid-j7pv25f6> ${latestPosts.map((post) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { ...post, "layout": "list", "data-astro-cid-j7pv25f6": true })}`)} </div> </div>`} <!-- Category Blocks --> ${categories.slice(0, 5).map((cat) => {
    const catPosts = allPosts.filter((p) => p.category === cat.name).slice(0, 4);
    if (catPosts.length === 0) return null;
    return renderTemplate`<div class="mb-12" data-astro-cid-j7pv25f6> <div class="flex items-center justify-between border-b-2 border-gray-900 mb-6 pb-2" data-astro-cid-j7pv25f6> <h2 class="text-xl sm:text-2xl font-black text-gray-900 uppercase" data-astro-cid-j7pv25f6>${cat.name}</h2> <a${addAttribute(`/blog/category/${cat.slug}`, "href")} class="text-sm font-bold text-red-600 hover:text-red-700" data-astro-cid-j7pv25f6>Lihat Semua &raquo;</a> </div> <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 gap-y-10" data-astro-cid-j7pv25f6> ${catPosts.map((post, i) => {
      if (i === 0) {
        return renderTemplate`<div class="sm:col-span-3 border-b border-gray-200 pb-6" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ArticleCard", $$ArticleCard, { ...post, "layout": "hero", "data-astro-cid-j7pv25f6": true })} </div>`;
      } else {
        return renderTemplate`<div class="col-span-1 border-b border-gray-200 pb-6" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ArticleCard", $$ArticleCard, { ...post, "layout": "grid", "data-astro-cid-j7pv25f6": true })} </div>`;
      }
    })} </div> </div>`;
  })} ${allPosts.length === 0 && renderTemplate`<div class="text-center py-20" data-astro-cid-j7pv25f6> <p class="text-gray-500 text-lg" data-astro-cid-j7pv25f6>Belum ada berita yang dipublikasikan.</p> </div>`} </div> <!-- Sidebar (Kanan) --> <aside class="lg:col-span-4 space-y-8" data-astro-cid-j7pv25f6> <!-- Terpopuler --> ${sidebarPosts.length > 0 && renderTemplate`<div class="bg-gray-50 p-5 rounded-lg border border-gray-200" data-astro-cid-j7pv25f6> <h2 class="text-lg font-black text-gray-900 uppercase border-b-2 border-red-600 pb-2 mb-5" data-astro-cid-j7pv25f6>
Terpopuler
</h2> <div class="space-y-5" data-astro-cid-j7pv25f6> ${sidebarPosts.map((post, index) => renderTemplate`<div class="flex gap-4" data-astro-cid-j7pv25f6> <div class="text-4xl font-black text-gray-300 leading-none italic w-6" data-astro-cid-j7pv25f6>${index + 1}</div> <div class="flex-1" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ArticleCard", $$ArticleCard, { ...post, "layout": "compact", "data-astro-cid-j7pv25f6": true })} </div> </div>`)} </div> </div>`} <!-- Topik Hangat (Kategori) --> ${categories.length > 0 && renderTemplate`<div data-astro-cid-j7pv25f6> <h2 class="text-lg font-black text-gray-900 uppercase border-b-2 border-red-600 pb-2 mb-5" data-astro-cid-j7pv25f6>
Topik Hangat
</h2> <div class="flex flex-wrap gap-2" data-astro-cid-j7pv25f6> ${categories.slice(0, 10).map((cat) => renderTemplate`<a${addAttribute(`/blog/category/${cat.slug}`, "href")} class="px-4 py-2 bg-gray-100 hover:bg-red-600 hover:text-white text-gray-800 text-xs font-bold uppercase rounded transition-colors" data-astro-cid-j7pv25f6> ${cat.name} </a>`)} </div> </div>`} <!-- Pilihan Redaksi --> ${editorsPickPosts.length > 0 && renderTemplate`<div data-astro-cid-j7pv25f6> <h2 class="text-lg font-black text-gray-900 uppercase border-b-2 border-red-600 pb-2 mb-5" data-astro-cid-j7pv25f6>
Pilihan Redaksi
</h2> <div class="space-y-6" data-astro-cid-j7pv25f6> ${editorsPickPosts.map((post) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { ...post, "layout": "subhero", "data-astro-cid-j7pv25f6": true })}`)} </div> </div>`} <!-- Newsletter / Langganan --> <div class="bg-red-600 text-white p-6 rounded-lg text-center" data-astro-cid-j7pv25f6> <h3 class="text-xl font-bold mb-2" data-astro-cid-j7pv25f6>Langganan Berita</h3> <p class="text-red-100 text-sm mb-4" data-astro-cid-j7pv25f6>Dapatkan update berita pilihan langsung ke inbox Anda.</p> <form class="flex flex-col gap-3" onsubmit="event.preventDefault();" data-astro-cid-j7pv25f6> <input type="email" placeholder="Alamat Email" class="w-full px-4 py-2 text-gray-900 rounded focus:outline-none" required data-astro-cid-j7pv25f6> <button type="submit" class="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 rounded transition-colors" data-astro-cid-j7pv25f6>
Daftar Sekarang
</button> </form> </div> <!-- Banner Placeholder (Sticky) --> <div class="sticky top-28" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "AdsterraAd", $$AdsterraAd, { "format": "banner", "data-astro-cid-j7pv25f6": true })} </div> </aside> </div> </div> ` })}`;
}, "C:/Users/devel/OneDrive/Desktop/Blog-Pribadi/src/pages/index.astro", void 0);

const $$file = "C:/Users/devel/OneDrive/Desktop/Blog-Pribadi/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
