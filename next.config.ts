const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.tsx',
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
  defaultShowCopyCode: true,
});

module.exports = withNextra({
  reactStrictMode: true,
  // Remove swcMinify as it's no longer needed
});