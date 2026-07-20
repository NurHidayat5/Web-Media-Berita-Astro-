import 'dotenv/config';
import { getAllPosts, getAllCategories, getPostContent } from './src/lib/wix.js';

process.env.WIX_SITE_URL = 'https://nurhidayatttyattt.wixsite.com/mertani-dev';

async function testWixConnection() {
  console.log('Testing Wix RSS Feed connection...');
  console.log('Site URL:', process.env.WIX_SITE_URL);

  try {
    console.log('\nFetching posts...');
    const posts = await getAllPosts();
    console.log(`Found ${posts.length} posts`);

    if (posts.length > 0) {
      console.log('\nFirst 3 posts:');
      posts.slice(0, 3).forEach((post, i) => {
        console.log(`\n${i + 1}. ${post.title}`);
        console.log(`   Slug: ${post.slug}`);
        console.log(`   Category: ${post.category}`);
        console.log(`   Date: ${post.publishDate}`);
        console.log(`   Author: ${post.author}`);
      });
    }

    console.log('\n\nFetching categories...');
    const categories = await getAllCategories();
    console.log(`Found ${categories.length} categories`);

    if (categories.length > 0) {
      console.log('\nCategories:');
      categories.forEach((cat) => {
        console.log(`  - ${cat.name} (${cat.slug})`);
      });
    }

    if (posts.length > 0) {
      console.log('\n\nFetching content for first post...');
      const content = await getPostContent(posts[0].slug);
      console.log(`Content length: ${content.length} chars`);
      if (content) {
        console.log('Content preview:', content.substring(0, 200) + '...');
      }
    }

    console.log('\n✅ Wix RSS Feed connection successful!');
  } catch (error) {
    console.error('\n❌ Error:', error);
  }
}

testWixConnection();