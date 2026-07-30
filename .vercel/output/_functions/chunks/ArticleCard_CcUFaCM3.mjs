import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_D-iz1OF6.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://blog-pribadi.vercel.app");
const $$ArticleCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArticleCard;
  const { title, slug, excerpt, coverImage, publishDate, category, layout = "grid" } = Astro2.props;
  const dateObj = new Date(publishDate);
  const formattedDate = dateObj.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`group block ${layout === "list" ? "flex gap-4 sm:gap-6" : ""} ${layout === "compact" ? "flex gap-3" : ""}`, "class")}> <a${addAttribute(`/blog/${slug}`, "href")}${addAttribute(`block ${layout === "list" ? "w-1/3 sm:w-1/4 flex-shrink-0" : ""} ${layout === "compact" ? "w-20 sm:w-24 flex-shrink-0" : ""}`, "class")}> ${coverImage && renderTemplate`<div${addAttribute(`overflow-hidden bg-gray-100 ${layout === "hero" ? "aspect-video rounded-t-lg sm:rounded-lg" : layout === "subhero" ? "aspect-video rounded-lg mb-3" : layout === "list" ? "aspect-[4/3] rounded-lg" : layout === "compact" ? "aspect-square rounded-md" : "aspect-video rounded-lg mb-3"}`, "class")}> <img${addAttribute(coverImage, "src")}${addAttribute(title, "alt")} class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy"> </div>`} </a> <div${addAttribute(`flex flex-col justify-center ${layout === "hero" ? "mt-4 sm:px-2" : layout === "list" ? "flex-1 py-1" : layout === "compact" ? "flex-1" : ""}`, "class")}> ${category && layout !== "compact" && layout !== "subhero" && renderTemplate`<span class="inline-block text-xs font-extrabold text-red-600 uppercase mb-2 tracking-wider"> ${category} </span>`} <a${addAttribute(`/blog/${slug}`, "href")} class="block group"> <h3${addAttribute(`font-bold text-gray-900 group-hover:text-red-600 transition-colors leading-tight ${layout === "hero" ? "text-2xl sm:text-3xl lg:text-4xl" : layout === "subhero" ? "text-lg sm:text-xl" : layout === "list" ? "text-lg sm:text-xl" : layout === "compact" ? "text-sm" : "text-lg"}`, "class")}> ${title} </h3> </a> ${(layout === "hero" || layout === "list" || layout === "grid") && renderTemplate`<p${addAttribute(`text-gray-600 leading-relaxed mt-2 ${layout === "hero" ? "text-base line-clamp-3" : "text-sm line-clamp-2"}`, "class")}> ${excerpt} </p>`} <div${addAttribute(`flex items-center text-xs text-gray-500 font-medium ${layout === "compact" ? "mt-1" : "mt-3"}`, "class")}> ${(layout === "compact" || layout === "subhero") && category && renderTemplate`<span class="text-red-600 font-bold uppercase mr-2">${category}</span>`} <time${addAttribute(publishDate, "datetime")}> ${formattedDate} </time> </div> </div> </article>`;
}, "C:/Users/devel/OneDrive/Desktop/Blog-Pribadi/src/components/ArticleCard.astro", void 0);

export { $$ArticleCard as $ };
