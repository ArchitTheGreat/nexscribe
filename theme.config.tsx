// theme.config.tsx
// For blog theme:
import { useRouter } from 'next/router';

export default {
  logo: <span>NexScribe</span>,
  project: {
    link: 'https://github.com/yourusername/nexscribe',
  },
  docsRepositoryBase: 'https://github.com/yourusername/nexscribe',
  footer: {
    text: <span>© {new Date().getFullYear()} Your Name</span>,
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – NexScribe'
      };
    }
    return {
      titleTemplate: 'NexScribe – A Next.js & MDX Blog Template'
    };
  },
  darkMode: true,
};