import { createClient, OAuthStrategy } from '@wix/sdk';
import { posts, categories } from '@wix/blog';

const WIX_CLIENT_ID = 'e089a042-d4ea-4499-b818-7cf005773e82';
const wixClient = createClient({
  modules: { posts, categories },
  auth: OAuthStrategy({ clientId: WIX_CLIENT_ID })
});

async function test() {
  const res = await wixClient.posts.queryPosts().limit(1).find();
  const post = res.items[0];
  
  const detailedPost = await wixClient.posts.getPost(post._id, {
    fieldsets: ['RICH_CONTENT']
  });
  
  console.log(JSON.stringify(detailedPost.richContent, null, 2));
}

test().catch(console.error);
