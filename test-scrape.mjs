import fs from 'fs';
async function testScrape() {
  const url = 'https://nurhidayatttyattt.wixsite.com/mertani-dev/post/implementasi-wqms-stasiun-hujan-stasiun-klimatologi-di-pt-fajar-mas-murni';
  const res = await fetch(url);
  const html = await res.text();
  fs.writeFileSync('wix-post.html', html);
  console.log("HTML saved. Length:", html.length);
}
testScrape();
