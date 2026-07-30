/* empty css                                 */
import { f as createComponent, r as renderTemplate, n as defineScriptVars, k as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D-iz1OF6.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Bp3wSQoU.mjs';
import { e as getAllPosts } from '../chunks/wix_BWxTjKMc.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getAllPosts();
  const postsJson = JSON.stringify(
    allPosts.map((p) => ({
      title: p.title,
      slug: p.slug,
      excerpt: p.excerpt,
      coverImage: p.coverImage,
      category: p.category,
      publishDate: p.publishDate
    }))
  );
  return renderTemplate(_a || (_a = __template(["", ' <!-- Data artikel di-inject sebagai JSON --> <script type="module">', `
  const allPosts = JSON.parse(postsJson);

  const resultsEl = document.getElementById('search-results');
  const emptyEl = document.getElementById('search-empty');
  const placeholderEl = document.getElementById('search-placeholder');
  const statusEl = document.getElementById('search-status');
  const mainInput = document.getElementById('search-main-input');

  function formatDate(dateStr) {
    try {
      return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
    } catch { return ''; }
  }

  function renderCard(post) {
    const date = formatDate(post.publishDate);
    const img = post.coverImage
      ? \`<img src="\${post.coverImage}" alt="\${post.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>\`
      : \`<div class="w-full h-full bg-gradient-to-br from-blue-800 to-gray-800"></div>\`;
    return \`
      <a href="/blog/\${post.slug}" class="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow flex flex-col">
        <div class="h-44 overflow-hidden bg-gray-100 flex-shrink-0">
          \${img}
        </div>
        <div class="p-4 flex flex-col flex-1">
          <span class="inline-block bg-red-600 text-white text-xs font-bold uppercase px-2 py-0.5 rounded mb-2 self-start">\${post.category || 'Berita'}</span>
          <h2 class="text-sm font-bold text-gray-900 group-hover:text-blue-600 leading-snug font-sans line-clamp-3 flex-1">\${post.title}</h2>
          <span class="text-xs text-gray-400 mt-2 block">\${date}</span>
        </div>
      </a>
    \`;
  }

  function doSearch(query) {
    const q = query.trim().toLowerCase();

    if (!q) {
      resultsEl.innerHTML = '';
      emptyEl.classList.add('hidden');
      placeholderEl.classList.remove('hidden');
      statusEl.textContent = '';
      return;
    }

    placeholderEl.classList.add('hidden');

    const filtered = allPosts.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      (p.category && p.category.toLowerCase().includes(q))
    );

    statusEl.textContent = \`Menampilkan \${filtered.length} hasil untuk "\${query}"\`;

    if (filtered.length === 0) {
      resultsEl.innerHTML = '';
      emptyEl.classList.remove('hidden');
    } else {
      emptyEl.classList.add('hidden');
      resultsEl.innerHTML = filtered.map(renderCard).join('');
    }
  }

  // Baca query dari URL
  const params = new URLSearchParams(window.location.search);
  const initialQuery = params.get('q') || '';
  if (mainInput) mainInput.value = initialQuery;
  if (initialQuery) doSearch(initialQuery);

  // Live search saat mengetik
  if (mainInput) {
    mainInput.addEventListener('input', (e) => {
      doSearch(e.target.value);
    });
  }
<\/script>`], ["", ' <!-- Data artikel di-inject sebagai JSON --> <script type="module">', `
  const allPosts = JSON.parse(postsJson);

  const resultsEl = document.getElementById('search-results');
  const emptyEl = document.getElementById('search-empty');
  const placeholderEl = document.getElementById('search-placeholder');
  const statusEl = document.getElementById('search-status');
  const mainInput = document.getElementById('search-main-input');

  function formatDate(dateStr) {
    try {
      return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
    } catch { return ''; }
  }

  function renderCard(post) {
    const date = formatDate(post.publishDate);
    const img = post.coverImage
      ? \\\`<img src="\\\${post.coverImage}" alt="\\\${post.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>\\\`
      : \\\`<div class="w-full h-full bg-gradient-to-br from-blue-800 to-gray-800"></div>\\\`;
    return \\\`
      <a href="/blog/\\\${post.slug}" class="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow flex flex-col">
        <div class="h-44 overflow-hidden bg-gray-100 flex-shrink-0">
          \\\${img}
        </div>
        <div class="p-4 flex flex-col flex-1">
          <span class="inline-block bg-red-600 text-white text-xs font-bold uppercase px-2 py-0.5 rounded mb-2 self-start">\\\${post.category || 'Berita'}</span>
          <h2 class="text-sm font-bold text-gray-900 group-hover:text-blue-600 leading-snug font-sans line-clamp-3 flex-1">\\\${post.title}</h2>
          <span class="text-xs text-gray-400 mt-2 block">\\\${date}</span>
        </div>
      </a>
    \\\`;
  }

  function doSearch(query) {
    const q = query.trim().toLowerCase();

    if (!q) {
      resultsEl.innerHTML = '';
      emptyEl.classList.add('hidden');
      placeholderEl.classList.remove('hidden');
      statusEl.textContent = '';
      return;
    }

    placeholderEl.classList.add('hidden');

    const filtered = allPosts.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      (p.category && p.category.toLowerCase().includes(q))
    );

    statusEl.textContent = \\\`Menampilkan \\\${filtered.length} hasil untuk "\\\${query}"\\\`;

    if (filtered.length === 0) {
      resultsEl.innerHTML = '';
      emptyEl.classList.remove('hidden');
    } else {
      emptyEl.classList.add('hidden');
      resultsEl.innerHTML = filtered.map(renderCard).join('');
    }
  }

  // Baca query dari URL
  const params = new URLSearchParams(window.location.search);
  const initialQuery = params.get('q') || '';
  if (mainInput) mainInput.value = initialQuery;
  if (initialQuery) doSearch(initialQuery);

  // Live search saat mengetik
  if (mainInput) {
    mainInput.addEventListener('input', (e) => {
      doSearch(e.target.value);
    });
  }
<\/script>`])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Pencarian | Seputar Redaksi", "description": "Cari artikel seputar teknologi monitoring lingkungan, WQMS, AQMS, dan IoT." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto px-4 sm:px-6 py-10"> <!-- Search Header --> <div class="mb-8"> <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 font-sans">Pencarian Artikel</h1> <!-- Search Bar Besar --> <form id="search-form-main" action="/search" method="get" class="flex items-center bg-white border-2 border-red-600 rounded-xl px-5 py-3 gap-3 shadow-md max-w-2xl"> <svg class="w-5 h-5 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> <input id="search-main-input" type="text" name="q" placeholder="Ketik kata kunci artikel..." autocomplete="off" class="flex-1 text-base text-gray-800 outline-none placeholder-gray-400"> <button type="submit" class="bg-red-600 text-white text-sm font-semibold px-4 py-1.5 rounded-lg hover:bg-red-700 transition-colors flex-shrink-0">
Cari
</button> </form> </div> <!-- Status info --> <p id="search-status" class="text-sm text-gray-500 mb-6"></p> <!-- Hasil Pencarian --> <div id="search-results" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"> <!-- Diisi oleh JavaScript --> </div> <!-- Empty State --> <div id="search-empty" class="hidden text-center py-20"> <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <h2 class="text-xl font-bold text-gray-700 mb-2">Tidak ada hasil</h2> <p class="text-gray-500">Coba gunakan kata kunci yang berbeda.</p> </div> <!-- Placeholder awal (sebelum search) --> <div id="search-placeholder" class="text-center py-20"> <svg class="w-16 h-16 text-gray-200 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> <p class="text-gray-400 text-lg">Ketik kata kunci untuk mulai mencari artikel</p> </div> </div> ` }), defineScriptVars({ postsJson }));
}, "C:/Users/devel/OneDrive/Desktop/Blog-Pribadi/src/pages/search.astro", void 0);

const $$file = "C:/Users/devel/OneDrive/Desktop/Blog-Pribadi/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
