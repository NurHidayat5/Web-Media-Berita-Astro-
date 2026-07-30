async function checkSitemap() {
  const url = 'https://nurhidayatttyattt.wixsite.com/mertani-dev/sitemap.xml';
  try {
    const res = await fetch(url);
    const text = await res.text();
    console.log("Sitemap exists:", res.ok);
    console.log("Snippet:", text.substring(0, 300));
  } catch (e) {
    console.error(e);
  }
}
checkSitemap();
