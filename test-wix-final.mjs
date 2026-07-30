import 'dotenv/config';
import { getAllPosts } from './src/lib/wix.js';

async function run() {
  console.log("CLIENT ID:", process.env.WIX_CLIENT_ID);
  const posts = await getAllPosts();
  console.log(`Found ${posts.length} posts.`);
  if (posts.length > 0) {
    console.log("First post title:", posts[0].title);
  }
}
run();
