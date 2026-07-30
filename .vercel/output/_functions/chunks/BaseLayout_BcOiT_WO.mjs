import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, o as renderScript, u as unescapeHTML, k as renderComponent, p as renderHead, q as renderSlot } from './astro/server_D-iz1OF6.mjs';
import 'piccolore';
import 'clsx';
import { b as getAllCategories } from './wix_BWxTjKMc.mjs';
/* empty css                         */

const $$Astro$5 = createAstro("https://blog-pribadi.vercel.app");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Header;
  const currentPath = Astro2.url.pathname;
  const today = (/* @__PURE__ */ new Date()).toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  const categories = await getAllCategories();
  const visibleCategories = categories.slice(0, 8);
  return renderTemplate`<!-- Top Bar (tanggal + sosmed) -->${maybeRenderHead()}<div class="bg-gray-900 text-gray-400 text-xs py-1.5 hidden sm:block" data-astro-cid-3ef6ksr2> <div class="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between" data-astro-cid-3ef6ksr2> <span data-astro-cid-3ef6ksr2>${today}</span> <div class="flex items-center gap-4" data-astro-cid-3ef6ksr2> <a href="/about" class="hover:text-white transition-colors" data-astro-cid-3ef6ksr2>Tentang Kami</a> <span class="text-gray-600" data-astro-cid-3ef6ksr2>|</span> <a href="#" class="hover:text-white transition-colors" data-astro-cid-3ef6ksr2>Facebook</a> <a href="#" class="hover:text-white transition-colors" data-astro-cid-3ef6ksr2>YouTube</a> <a href="#" class="hover:text-white transition-colors" data-astro-cid-3ef6ksr2>LinkedIn</a> </div> </div> </div> <!-- Logo Bar --> <header class="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-200" data-astro-cid-3ef6ksr2> <div class="max-w-7xl mx-auto px-4 sm:px-6" data-astro-cid-3ef6ksr2> <div class="flex items-center justify-between h-16 sm:h-20" data-astro-cid-3ef6ksr2> <!-- Logo --> <a href="/" class="flex items-center gap-2" data-astro-cid-3ef6ksr2> <div class="bg-red-600 text-white font-extrabold text-xl px-3 py-1.5 rounded leading-none tracking-tight" data-astro-cid-3ef6ksr2>
Seputar Redaksi
</div> </a> <!-- Search (desktop) --> <form action="/search" method="get" class="hidden md:flex items-center bg-gray-100 rounded-lg px-4 py-2 gap-2 flex-1 max-w-md mx-8" data-astro-cid-3ef6ksr2> <svg class="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-3ef6ksr2></path> </svg> <input id="search-input-desktop" type="text" name="q" placeholder="Cari berita..." autocomplete="off" class="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none flex-1 w-full" data-astro-cid-3ef6ksr2> </form> <!-- Mobile Menu Button --> <button id="mobile-menu-btn" class="sm:hidden p-2 text-gray-700 hover:text-red-600" aria-label="Toggle menu" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-3ef6ksr2></path> </svg> </button> </div> </div> <!-- Kategori Bar (Desktop) --> <div class="hidden sm:block border-t border-gray-200 bg-white" data-astro-cid-3ef6ksr2> <div class="max-w-7xl mx-auto px-4 sm:px-6" data-astro-cid-3ef6ksr2> <nav class="flex items-center gap-6 overflow-x-auto py-3 hide-scrollbar" data-astro-cid-3ef6ksr2> <a href="/"${addAttribute(`text-sm font-bold uppercase transition-colors whitespace-nowrap ${currentPath === "/" ? "text-red-600" : "text-gray-700 hover:text-red-600"}`, "class")} data-astro-cid-3ef6ksr2>HOME</a> <a href="/blog"${addAttribute(`text-sm font-bold uppercase transition-colors whitespace-nowrap ${currentPath === "/blog" ? "text-red-600" : "text-gray-700 hover:text-red-600"}`, "class")} data-astro-cid-3ef6ksr2>TERKINI</a> ${visibleCategories.map((cat) => renderTemplate`<a${addAttribute(`/blog/category/${cat.slug}`, "href")}${addAttribute(`text-sm font-bold uppercase transition-colors whitespace-nowrap ${currentPath.includes(cat.slug) ? "text-red-600" : "text-gray-700 hover:text-red-600"}`, "class")} data-astro-cid-3ef6ksr2> ${cat.name} </a>`)} </nav> </div> </div> <!-- Mobile Menu --> <div id="mobile-menu" class="hidden sm:hidden border-t border-gray-100 bg-white shadow-lg absolute w-full left-0" data-astro-cid-3ef6ksr2> <nav class="px-4 pt-2 pb-4 space-y-1 max-h-[70vh] overflow-y-auto" data-astro-cid-3ef6ksr2> <a href="/" class="block px-3 py-2 text-base font-bold uppercase text-gray-800 hover:text-red-600 hover:bg-gray-50 rounded-md" data-astro-cid-3ef6ksr2>Home</a> <a href="/blog" class="block px-3 py-2 text-base font-bold uppercase text-gray-800 hover:text-red-600 hover:bg-gray-50 rounded-md" data-astro-cid-3ef6ksr2>Terkini</a> ${categories.map((cat) => renderTemplate`<a${addAttribute(`/blog/category/${cat.slug}`, "href")} class="block px-3 py-2 text-base font-bold uppercase text-gray-800 hover:text-red-600 hover:bg-gray-50 rounded-md" data-astro-cid-3ef6ksr2> ${cat.name} </a>`)} </nav> </div> </header>  ${renderScript($$result, "C:/Users/devel/OneDrive/Desktop/Blog-Pribadi/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/devel/OneDrive/Desktop/Blog-Pribadi/src/components/Header.astro", void 0);

const $$Astro$4 = createAstro("https://blog-pribadi.vercel.app");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="border-t border-gray-200 bg-gray-50"> <div class="max-w-6xl mx-auto px-6 py-12"> <div class="grid grid-cols-1 sm:grid-cols-3 gap-8"> <div> <a href="/" class="text-lg font-bold text-gray-900">Seputar Redaksi</a> <p class="mt-3 text-sm text-gray-500 leading-relaxed">
Blog pribadi tentang teknologi, pemrograman, dan pengembangan web.
</p> </div> <div> <h3 class="text-sm font-semibold text-gray-900 mb-3">Navigasi</h3> <ul class="space-y-2"> <li><a href="/" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">Beranda</a></li> <li><a href="/blog" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">Blog</a></li> <li><a href="/about" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">Tentang</a></li> </ul> </div> <div> <h3 class="text-sm font-semibold text-gray-900 mb-3">Sosial Media</h3> <div class="flex items-center gap-4"> <a href="#" class="text-gray-400 hover:text-gray-600 transition-colors" aria-label="GitHub"> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path> </svg> </a> <a href="#" class="text-gray-400 hover:text-gray-600 transition-colors" aria-label="LinkedIn"> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg> </a> <a href="#" class="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Twitter"> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path> </svg> </a> </div> </div> </div> <div class="mt-10 pt-8 border-t border-gray-200"> <p class="text-sm text-gray-400 text-center">
&copy; ${year} Seputar Redaksi. Dibuat dengan Astro.
</p> </div> </div> </footer>`;
}, "C:/Users/devel/OneDrive/Desktop/Blog-Pribadi/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro("https://blog-pribadi.vercel.app");
const $$SEOHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SEOHead;
  const {
    title,
    description,
    image,
    url,
    type = "website",
    publishDate,
    author = "Hidayat",
    keywords
  } = Astro2.props;
  const siteName = "Seputar Redaksi";
  const siteTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  let ogImage = image || new URL("/og-default.png", Astro2.site || "https://web-media-berita-astro.vercel.app").href;
  if (ogImage.startsWith("http://")) {
    ogImage = ogImage.replace("http://", "https://");
  }
  const jsonLd = type === "article" ? {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: ogImage,
    url,
    datePublished: publishDate || (/* @__PURE__ */ new Date()).toISOString(),
    dateModified: publishDate || (/* @__PURE__ */ new Date()).toISOString(),
    author: {
      "@type": "Person",
      name: author
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: new URL("/favicon.svg", Astro2.site || "http://localhost:4321").href
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    }
  } : {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url,
    description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: new URL("/search?q={search_term_string}", Astro2.site || "http://localhost:4321").href
      },
      "query-input": "required name=search_term_string"
    }
  };
  return renderTemplate(_a || (_a = __template([`<!-- Google Search Console Verification --><meta name="google-site-verification" content="dkWCjDLMrw1OXd2eWD5iJ7-KnrXtzu86RaJKh-XQWos"><!-- Google Analytics (GA4) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-GXV8R8ERNM"><\/script><script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GXV8R8ERNM');
<\/script><title>`, '</title><meta name="description"', '><meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">', '<meta name="author"', '><link rel="canonical"', '><!-- Open Graph / WhatsApp Sharing --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:secure_url"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:site_name"', '><meta property="og:locale" content="id_ID">', "", '<!-- Twitter / X --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:site" content="@seputarredaksi"><!-- JSON-LD Structured Data --><script type="application/ld+json">', "<\/script>"])), siteTitle, addAttribute(description, "content"), keywords && renderTemplate`<meta name="keywords"${addAttribute(keywords, "content")}>`, addAttribute(author, "content"), addAttribute(url, "href"), addAttribute(type, "content"), addAttribute(url, "content"), addAttribute(siteTitle, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), addAttribute(ogImage, "content"), addAttribute(siteName, "content"), type === "article" && publishDate && renderTemplate`<meta property="article:published_time"${addAttribute(publishDate, "content")}>`, type === "article" && renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`, addAttribute(siteTitle, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), unescapeHTML(JSON.stringify(jsonLd)));
}, "C:/Users/devel/OneDrive/Desktop/Blog-Pribadi/src/components/SEOHead.astro", void 0);

const $$Astro$2 = createAstro("https://blog-pribadi.vercel.app");
const $$MobileNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MobileNav;
  const currentPath = Astro2.url.pathname;
  const navItems = [
    { href: "/", label: "Beranda", icon: "home" },
    { href: "/blog", label: "Terkini", icon: "news" },
    { href: "/search", label: "Cari", icon: "search" },
    { href: "/about", label: "Tentang", icon: "info" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.08)] sm:hidden safe-bottom" aria-label="Mobile Navigation"> <div class="flex items-center justify-around h-16"> ${navItems.map((item) => {
    const isActive = item.href === "/" ? currentPath === "/" : currentPath.startsWith(item.href);
    return renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors ${isActive ? "text-red-600" : "text-gray-500 hover:text-red-600"}`, "class")}> ${item.icon === "home" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path> </svg>`} ${item.icon === "news" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path> </svg>`} ${item.icon === "search" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg>`} ${item.icon === "info" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>`} <span${addAttribute(`text-[10px] font-semibold ${isActive ? "font-bold" : ""}`, "class")}>${item.label}</span> </a>`;
  })} </div> </nav>`;
}, "C:/Users/devel/OneDrive/Desktop/Blog-Pribadi/src/components/MobileNav.astro", void 0);

const $$Astro$1 = createAstro("https://blog-pribadi.vercel.app");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/devel/OneDrive/Desktop/Blog-Pribadi/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/devel/OneDrive/Desktop/Blog-Pribadi/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro("https://blog-pribadi.vercel.app");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description = "Portal berita terpercaya seputar teknologi, bisnis, dan gaya hidup.", image, type = "website", publishDate, author } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site || "http://localhost:4321");
  return renderTemplate`<html lang="id"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Merriweather:wght@700&display=swap" rel="stylesheet">${renderComponent($$result, "SEOHead", $$SEOHead, { "title": title, "description": description, "image": image, "url": canonicalURL.href, "type": type, "publishDate": publishDate, "author": author })}${renderComponent($$result, "ViewTransitions", $$ClientRouter, {})}${renderHead()}</head> <body class="min-h-screen flex flex-col bg-white text-gray-900 font-sans antialiased pb-16 sm:pb-0"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-1"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "MobileNav", $$MobileNav, {})} </body></html>`;
}, "C:/Users/devel/OneDrive/Desktop/Blog-Pribadi/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
