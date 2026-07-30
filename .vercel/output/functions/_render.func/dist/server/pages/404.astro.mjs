/* empty css                                 */
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D-iz1OF6.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DJf27ioN.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Halaman Tidak Ditemukan", "description": "404 - Halaman yang Anda cari tidak ditemukan" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-20 sm:py-32"> <div class="max-w-3xl mx-auto px-6 text-center"> <p class="text-7xl font-extrabold text-gray-200 mb-4">404</p> <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Halaman Tidak Ditemukan</h1> <p class="text-gray-500 mb-8 max-w-md mx-auto">
Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
</p> <a href="/" class="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
Kembali ke Beranda
</a> </div> </section> ` })}`;
}, "C:/Users/devel/OneDrive/Desktop/Blog-Pribadi/src/pages/404.astro", void 0);

const $$file = "C:/Users/devel/OneDrive/Desktop/Blog-Pribadi/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
