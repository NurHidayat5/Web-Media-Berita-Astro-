import 'dotenv/config';
import { createClient, OAuthStrategy } from '@wix/sdk';
import { posts } from '@wix/blog';

const wixClient = createClient({
  modules: { posts },
  auth: OAuthStrategy({ clientId: process.env.WIX_CLIENT_ID })
});

async function checkData() {
  try {
    const res = await wixClient.posts.queryPosts().fieldsets(['RICH_CONTENT']).limit(1).find();
    if (res.items.length > 0) {
      const post = res.items[0];
      console.log("=== RAW POST DATA ===");
      console.log(JSON.stringify(post, null, 2));
    } else {
      console.log("No posts found.");
    }
  } catch (e) {
    console.error(e);
  }
}

checkData();
