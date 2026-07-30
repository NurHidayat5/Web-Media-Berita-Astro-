import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_D-iz1OF6.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://blog-pribadi.vercel.app");
const $$CategoryFilter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CategoryFilter;
  const { categories, activeCategory } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap gap-2 mb-10"> <a href="/blog"${addAttribute(`px-4 py-2 text-sm font-medium rounded-full transition-colors ${!activeCategory ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`, "class")}>
Semua
</a> ${categories.map((cat) => renderTemplate`<a${addAttribute(`/blog/category/${cat.slug}`, "href")}${addAttribute(`px-4 py-2 text-sm font-medium rounded-full transition-colors ${activeCategory === cat.slug ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`, "class")}> ${cat.name} </a>`)} </div>`;
}, "C:/Users/devel/OneDrive/Desktop/Blog-Pribadi/src/components/CategoryFilter.astro", void 0);

export { $$CategoryFilter as $ };
