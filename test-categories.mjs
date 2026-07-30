import 'dotenv/config';
import { createClient, OAuthStrategy } from '@wix/sdk';
import { posts, categories } from '@wix/blog';

const wixClient = createClient({
  modules: { posts, categories },
  auth: OAuthStrategy({ clientId: process.env.WIX_CLIENT_ID })
});

async function checkData() {
  try {
    const catsRes = await wixClient.categories.queryCategories().limit(10).find();
    console.log("Categories found:", catsRes.items.length);
    catsRes.items.forEach(c => {
      console.log(`Cat: ${c.label} (ID: ${c._id})`);
    });

    const postsRes = await wixClient.posts.queryPosts().limit(5).find();
    console.log("\nPosts found:", postsRes.items.length);
    postsRes.items.forEach(p => {
      console.log(`Post: ${p.title}`);
      console.log(`Category IDs:`, p.categoryIds);
    });
  } catch (e) {
    console.error(e);
  }
}
checkData();
