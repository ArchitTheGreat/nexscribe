import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Projects() {
  const projects = [
    {
      title: 'Project One',
      description: 'A description of project one. This is a placeholder for your actual project description.',
      tags: ['Next.js', 'React', 'TypeScript'],
      link: '#',
    },
    {
      title: 'Project Two',
      description: 'A description of project two. This is a placeholder for your actual project description.',
      tags: ['Tailwind CSS', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      title: 'Project Three',
      description: 'A description of project three. This is a placeholder for your actual project description.',
      tags: ['GraphQL', 'Apollo', 'PostgreSQL'],
      link: '#',
    },
  ];

  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
        Projects
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} variant="bordered" className="p-6">
            <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              {project.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Button href={project.link} variant="outline">
              View Project
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}