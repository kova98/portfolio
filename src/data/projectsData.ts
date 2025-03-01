import { Project } from '@/lib/models/project';

const projectsData: Project[] = [
  {
    title: 'WCenzije',
    description: 'Public toilet reviews app',
    technologies: ['Flutter', '.NET 8', 'Next.js', 'TailwindCSS', 'Postgres', 'Docker', 'GitHub Actions'],
    imageSrc: '/projects/wcenzije.png',
    repoUrl: 'https://github.com/kova98/wcenzije',
    websiteUrl: 'https://www.wcenzije.com',
  },
  {
    title: 'Spiza',
    description: 'Food delivery platform and simulator',
    technologies: ['Go', 'Flutter', 'Svelte', 'MQTT', 'Postgres'],
    imageSrc: '/projects/spiza.png',
    repoUrl: 'https://github.com/kova98/spiza',
  },
  {
    title: 'Chat',
    description: 'Multi transport chat app',
    technologies: ['.NET 8', 'JavaScript', 'HTML', 'CSS', 'GitHub Actions'],
    imageSrc: '/projects/chat.png',
    repoUrl: 'https://github.com/kova98/Chat',
    websiteUrl: 'https://chat.rokokovac.com/',
  },
  {
    title: 'Code Interactive',
    description: 'Interactive Learning Platform',
    technologies: ['Go', 'TypeScript', 'NextJS', 'Docker'],
    imageSrc: '/projects/codeinteractive.png',
    websiteUrl: 'https://codeinteractive.dev',
  },
  {
    title: 'Manistra',
    description: 'Copypastas app',
    technologies: ['Flutter', 'ASP.NET Core', 'Docker', 'GitHub Actions'],
    imageSrc: '/projects/manistra.png',
    repoUrl: 'https://github.com/kova98/manistra',
  },
];

export default projectsData;
