import 'dotenv/config';
import { createClient, OAuthStrategy } from '@wix/sdk';
import { posts } from '@wix/blog';

const wixClient = createClient({
  modules: { posts },
  auth: OAuthStrategy({ clientId: process.env.WIX_CLIENT_ID })
});

async function checkData() {
  try {
    // Get the first post ID
    const res = await wixClient.posts.queryPosts().limit(1).find();
    const postId = res.items[0]._id;
    console.log("Post ID:", postId);
    
    // Now get the post with RICH_CONTENT fieldset
    const post = await wixClient.posts.getPost(postId, {
      fieldsets: ['RICH_CONTENT']
    });
    
    console.log("Has richContent?", !!post.richContent);
    if (post.richContent) {
      console.log("Rich content keys:", Object.keys(post.richContent));
      console.log("Rich content nodes count:", post.richContent.nodes?.length);
      console.log(JSON.stringify(post.richContent.nodes?.slice(0, 3), null, 2));
    }
  } catch (e) {
    console.error(e);
  }
}

checkData();
