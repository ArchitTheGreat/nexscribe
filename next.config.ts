const nextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.tsx',
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
  defaultShowCopyCode: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextra(nextConfig);