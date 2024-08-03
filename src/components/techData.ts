import { SkillCategories } from '@/lib/types';

const techData: SkillCategories = {
  Web: {
    description: 'I can create web interfaces using a variety of technologies.',
    skills: [
      {
        tech: 'HTML',
        img: 'html',
        level: 'Advanced',
        experience: '5 years',
        description: 'I have been using HTML to create web interfaces for 5 years.',
        projects: [{ name: 'Project 1 with HTML' }, { name: 'Project 2 with HTML' }],
      },
      {
        tech: 'CSS',
        img: 'css',
        level: 'Beginner',
        experience: '1 year',
        description: 'I have a basic understanding of CSS for styling web pages.',
        projects: [{ name: 'Project 1 with CSS' }],
      },
      {
        tech: 'JavaScript',
        img: 'javascript',
        level: 'Intermediate',
        experience: '3 years',
        description: 'I have intermediate knowledge in JavaScript and have used it for various projects.',
        projects: [{ name: 'Project 1 with JavaScript' }, { name: 'Project 2 with JavaScript' }],
      },
      {
        tech: 'Angular',
        img: 'angular',
        level: 'Beginner',
        experience: '1 year',
        description: 'I have basic experience with Angular for building dynamic web applications.',
        projects: [{ name: 'Project 1 with Angular' }],
      },
      {
        tech: 'React',
        img: 'react',
        level: 'Beginner',
        experience: '1 year',
        description: 'I have basic experience with React for building interactive user interfaces.',
        projects: [{ name: 'Project 1 with React' }],
      },
      {
        tech: 'Next.JS',
        img: 'nextjs',
        level: 'Beginner',
        experience: '1 year',
        description: 'I have basic experience with Next.JS for building server-side rendered React applications.',
        projects: [{ name: 'Project 1 with Next.JS' }],
      },
      {
        tech: 'Blazor',
        img: 'blazor',
        level: 'Intermediate',
        experience: '2 years',
        description: 'I have intermediate experience with Blazor for building web applications using C#.',
        projects: [{ name: 'Project 1 with Blazor' }],
      },
    ],
  },
  Mobile: {
    description: 'I can create cross-platform mobile applications using Flutter.',
    skills: [
      {
        tech: 'Flutter',
        img: 'flutter',
        level: 'Advanced',
        experience: '3 years',
        description: 'I have advanced experience with Flutter for building cross-platform mobile applications.',
        projects: [{ name: 'Project 1 with Flutter' }, { name: 'Project 2 with Flutter' }],
      },
    ],
  },
  Backend: {
    description: 'I can write backend services using a variety of technologies.',
    skills: [
      {
        tech: '.NET / C#',
        img: 'dotnet',
        level: 'Expert',
        experience: '5 years',
        description:
          "I've been programming in C# and .NET since high school, with 5 years of professional experience. I can build anything with it, from quick and dirty POCs and lean microservices to enterprise-grade fully test-covered solutions. I have written extensively on various .NET related topics and have published a quickstart guide on Unit Testing in .NET in the form of an eBook.",
        projects: [{ name: 'Some project' }],
      },
      {
        tech: 'Go',
        img: 'go',
        level: 'Beginner',
        experience: '1 year',
        description: 'I have basic experience with Go for backend services.',
        projects: [{ name: 'Project 1 with Go' }],
      },
      {
        tech: 'Node.JS',
        img: 'nodejs',
        level: 'Beginner',
        experience: '1 year',
        description: 'I have basic experience with Node.JS for backend development.',
        projects: [{ name: 'Project 1 with Node.JS' }],
      },
      {
        tech: 'Python',
        img: 'python',
        level: 'Beginner',
        experience: '1 year',
        description: 'I have basic experience with Python for backend development.',
        projects: [{ name: 'Project 1 with Python' }],
      },
    ],
  },
  DevOps: {
    description: 'I can set up CI/CD pipelines and deploy applications to the cloud.',
    skills: [
      {
        tech: 'Docker',
        img: 'docker',
        level: 'Intermediate',
        experience: '2 years',
        description: 'I have intermediate experience with Docker for containerizing applications.',
        projects: [{ name: 'Project 1 with Docker' }],
      },
      {
        tech: 'Kubernetes',
        img: 'kubernetes',
        level: 'Beginner',
        experience: '1 year',
        description: 'I have basic experience with Kubernetes for container orchestration.',
        projects: [{ name: 'Project 1 with Kubernetes' }],
      },
      {
        tech: 'Azure',
        img: 'azure',
        level: 'Beginner',
        experience: '1 year',
        description: 'I have basic experience with Azure for deploying cloud applications.',
        projects: [{ name: 'Project 1 with Azure' }],
      },
      {
        tech: 'Nginx',
        img: 'nginx',
        level: 'Intermediate',
        experience: '2 years',
        description: 'I have intermediate experience with Nginx for web server configuration.',
        projects: [{ name: 'Project 1 with Nginx' }],
      },
      {
        tech: 'GitHub Actions',
        img: 'github-actions',
        level: 'Intermediate',
        experience: '2 years',
        description: 'I have intermediate experience with GitHub Actions for setting up CI/CD pipelines.',
        projects: [{ name: 'Project 1 with GitHub Actions' }],
      },
      {
        tech: 'Digital Ocean',
        img: 'digital-ocean',
        level: 'Intermediate',
        experience: '2 years',
        description:
          'I have intermediate experience with Digital Ocean for deploying and managing cloud infrastructure.',
        projects: [{ name: 'Project 1 with Digital Ocean' }],
      },
    ],
  },
};

export default techData;
