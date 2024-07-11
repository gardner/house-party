import { defineConfig } from 'astro/config';
// import astroRemark from "@astrojs/markdown-remark";

import remarkToc from 'remark-toc';
// import rehypeMinify from 'rehype-minify';
import rehypePresetMinify from 'rehype-preset-minify'

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx({
    remarkPlugins: [remarkToc],
  })],
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkToc],
    // rehypePlugins: [rehypeAccessibleEmojis],
  },  
});