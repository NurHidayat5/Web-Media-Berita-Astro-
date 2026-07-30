/* empty css                                    */
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, l as Fragment, u as unescapeHTML } from '../../chunks/astro/server_D-iz1OF6.mjs';
import 'piccolore';
import { g as getPostBySlug, a as getPostContent, b as getAllCategories, $ as $$BaseLayout } from '../../chunks/BaseLayout_CyUfhVUD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://blog-pribadi.vercel.app");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const post = await getPostBySlug(slug || "");
  if (!post) {
    return Astro2.redirect("/404");
  }
  const content = await getPostContent(slug || "");
  const allCategories = await getAllCategories();
  const categoryObj = allCategories.find((c) => c.name === post.category);
  const categorySlug = categoryObj?.slug || post.category.toLowerCase().replace(/\s+/g, "-");
  const formattedDate = new Date(post.publishDate).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  new URL(`/blog/${post.slug}`, Astro2.site || "http://localhost:4321").href;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": post.title, "description": post.excerpt, "image": post.coverImage, "type": "article", "publishDate": post.publishDate, "author": post.author }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="py-10 sm:py-14"> <div class="max-w-3xl mx-auto px-4 sm:px-6"> <!-- Breadcrumb --> <nav class="flex items-center gap-2 text-xs text-gray-500 mb-6" aria-label="Breadcrumb"> <a href="/" class="hover:text-red-600 transition-colors">Beranda</a> <span>›</span> ${post.category && renderTemplate`<a${addAttribute(`/blog/category/${categorySlug}`, "href")} class="hover:text-red-600 transition-colors"> ${post.category} </a>`} <span>›</span> <span class="text-gray-900 font-medium line-clamp-1">${post.title}</span> </nav> <!-- Header --> <header class="mb-8"> ${post.category && renderTemplate`<a${addAttribute(`/blog/category/${categorySlug}`, "href")} class="inline-block text-xs font-bold text-red-600 uppercase tracking-widest mb-4 hover:text-red-700 transition-colors bg-red-50 px-3 py-1 rounded-full"> ${post.category} </a>`} <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight"> ${post.title} </h1> <div class="flex flex-wrap items-center gap-3 text-sm text-gray-500 border-b border-gray-200 pb-6"> ${post.author && renderTemplate`<span class="font-semibold text-gray-700">${post.author}</span>`} <span class="text-gray-300">•</span> <time${addAttribute(post.publishDate, "datetime")}>${formattedDate}</time> </div> </header> <!-- Content --> <div class="prose prose-lg prose-gray max-w-none
        prose-headings:font-bold prose-headings:text-gray-900
        prose-p:text-gray-700 prose-p:leading-relaxed
        prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline
        prose-img:rounded-xl prose-img:shadow-sm
        prose-blockquote:border-red-500 prose-blockquote:text-gray-600
      "> ${content ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(content)}` })}` : renderTemplate`<p class="text-gray-600 leading-relaxed">${post.excerpt}</p>`} </div> <!-- Footer Artikel --> <div class="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"> <a href="/blog" class="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path> </svg>
Kembali ke Blog
</a> </div> </div> </article> ` })}`;
}, "C:/Users/devel/OneDrive/Desktop/Blog-Pribadi/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/Users/devel/OneDrive/Desktop/Blog-Pribadi/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
