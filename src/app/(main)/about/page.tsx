export default function About() {
    return (
      <div className="container-custom py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          About
        </h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p>
            Welcome to ModernMDX, a beautifully designed blog template using Next.js, MDX, and Tailwind CSS v4.
            This template is designed to provide a starting point for your own blog or content site.
          </p>
          
          <h2>Features</h2>
          <ul>
            <li>Built with Next.js App Router</li>
            <li>MDX support with Nextra</li>
            <li>Styled with Tailwind CSS v4</li>
            <li>Dark mode support</li>
            <li>Responsive design</li>
            <li>SEO optimized</li>
            <li>TypeScript support</li>
          </ul>
          
          <h2>Getting Started</h2>
          <p>
            To get started with this template, clone the repository and install the dependencies.
            Then, you can start adding your own content in the <code>src/content/blog</code> directory.
          </p>
          
          <h2>Customization</h2>
          <p>
            This template is fully customizable. You can change the colors, typography, and layout to match your brand.
            Check out the Tailwind CSS documentation for more information on how to customize the design.
          </p>
        </div>
      </div>
    );
  }