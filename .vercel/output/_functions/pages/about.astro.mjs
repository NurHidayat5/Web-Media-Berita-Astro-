/* empty css                                 */
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D-iz1OF6.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BcOiT_WO.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://blog-pribadi.vercel.app");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Tentang Saya", "description": "Mengenal lebih dekat tentang Hidayat \u2014 web developer dan penulis." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-16 sm:py-20"> <div class="max-w-3xl mx-auto px-6"> <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">Tentang Saya</h1> <div class="space-y-8"> <div class="flex flex-col sm:flex-row items-start gap-8"> <div class="w-32 h-32 rounded-full bg-gray-200 overflow-hidden flex-shrink-0"> <img src="https://placehold.co/200x200/E2E8F0/475569?text=H" alt="Foto profil Hidayat" class="w-full h-full object-cover"> </div> <div> <h2 class="text-2xl font-bold text-gray-900 mb-1">Hidayat</h2> <p class="text-gray-500 mb-4">Web Developer & Writer</p> <p class="text-gray-600 leading-relaxed">
Saya adalah seorang web developer yang passionate dalam membangun aplikasi web modern. Saya suka mengeksplorasi teknologi terbaru dan berbagi pengetahuan melalui tulisan.
</p> </div> </div> <div class="space-y-6 text-gray-600 leading-relaxed"> <p>
Blog ini saya buat sebagai portfolio dan tempat berbagi pengalaman saya dalam dunia pengembangan web. Di sini Anda bisa menemukan tutorial, tips, dan artikel menarik lainnya seputar teknologi.
</p> <div> <h3 class="text-lg font-bold text-gray-900 mb-3">Keahlian</h3> <div class="flex flex-wrap gap-2"> <span class="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">JavaScript</span> <span class="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">TypeScript</span> <span class="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">React</span> <span class="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">Next.js</span> <span class="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">Astro</span> <span class="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">Node.js</span> <span class="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">Tailwind CSS</span> </div> </div> <div> <h3 class="text-lg font-bold text-gray-900 mb-3">Kontak</h3> <p>
Jika Anda ingin berkolaborasi atau sekadar ngobrol, jangan ragu untuk menghubungi saya melalui email atau media sosial yang tersedia.
</p> </div> </div> </div> </div> </section> ` })}`;
}, "C:/Users/devel/OneDrive/Desktop/Blog-Pribadi/src/pages/about.astro", void 0);

const $$file = "C:/Users/devel/OneDrive/Desktop/Blog-Pribadi/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
