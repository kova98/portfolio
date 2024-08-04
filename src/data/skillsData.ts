import { SkillCategories } from '@/lib/models/skill';

const skillsData: SkillCategories = {
  Web: {
    description: 'I can create web interfaces using a variety of technologies.',
    skills: [
      {
        tech: 'HTML',
        img: 'html',
        level: 'Advanced',
        experience: '3 years',
        description:
          'I can create all kinds of layouts using HTML. I have used it combined with many templating engines ' +
          'throughout the years ',
        references: [
          {
            name: 'Bazirano - HTML and Razor Pages',
            url: 'https://github.com/kova98/Bazirano/blob/master/Bazirano/Views/Board/Thread.cshtml',
          },
          {
            name: 'Spiza - HTML and Svelte',
            url: 'https://github.com/kova98/spiza/blob/main/src/frontends/web/spiza-restaurant/src/lib/components/order/order-card.svelte',
          },
          {
            name: 'Chat - basic HTML',
            url: 'https://github.com/kova98/Chat/blob/main/web-client/index.html',
          },
        ],
      },
      {
        tech: 'CSS',
        img: 'css',
        level: 'Intermediate',
        experience: '3 years',
        description:
          "I can style simple web interfaces using CSS. For the most projects, I've used component libraries " +
          'like shadcn-ui, Bootstrap or MudBlazor, but I can also write custom CSS or Tailwind.',
        references: [
          { name: 'Chat - CSS', url: 'https://github.com/kova98/Chat/blob/main/web-client/styles.css' },
          {
            name: 'Bazirano - Bootstrap',
            url: 'https://github.com/kova98/Bazirano/blob/master/Bazirano/Views/News/Article.cshtml',
          },
          {
            name: 'Spiza - Tailwind',
            url: 'https://github.com/kova98/spiza/blob/main/src/frontends/web/spiza-restaurant/src/lib/components/order/order-card.svelte',
          },
        ],
      },
      {
        tech: 'JavaScript',
        img: 'javascript',
        level: 'Intermediate',
        experience: '3 years',
        description:
          'I have used JavaScript for various projects and as part of different frameworks throughout the years' +
          ' - Vanilla JS, JQuery, Angular, React, Next.JS - both professionally and for hobby projects. ',
        references: [
          {
            name: 'Chat - multi protocol chat client app',
            url: 'https://github.com/kova98/Chat/blob/main/web-client/app.js',
          },
          {
            name: 'Cars - path node generation from a map image, A* pathfinding',
            url: 'https://github.com/kova98/cars/blob/main/app.js',
          },
        ],
      },
      {
        tech: 'TypeScript',
        img: 'typescript',
        level: 'Intermediate',
        experience: '3 years',
        description:
          'Just like JavaScript, I have used TypeScript for various projects and as part of different frameworks. ' +
          'Coming from a C# background, I find TypeScript very easy to use and a great addition to JavaScript.',
        references: [
          {
            name: 'WCenzije - TypeScript / Next.js',
            url: 'https://github.com/kova98/wcenzije/tree/main/src/web/wcenzije2',
          },
        ],
      },
      {
        tech: 'Angular',
        img: 'angular',
        level: 'Intermediate',
        experience: '3 year',
        description:
          'I have mostly used Angular in a professional setting, building enterprise applications. I have ' +
          'used component libraries like Angular Material, but have also developed complex custom components.',
        references: [],
      },
      {
        tech: 'React',
        img: 'react',
        level: 'Beginner',
        experience: '1 year',
        description: 'I have basic experience with React, building various hobby projects.',
        references: [
          {
            name: 'WCenzije - as part of a Next.JS app',
            url: 'https://github.com/kova98/wcenzije/blob/main/src/web/wcenzije2/src/lib/useToken.tsx',
          },
        ],
      },
      {
        tech: 'Next.JS',
        img: 'nextjs',
        level: 'Beginner',
        experience: '1 year',
        description: 'I have basic experience with Next.JS for building server-side rendered React applications.',
        references: [
          {
            name: 'WCenzije web app - landing page, admin interface',
            url: 'https://github.com/kova98/wcenzije/tree/main/src/web/wcenzije2',
          },
        ],
      },
      {
        tech: 'Blazor',
        img: 'blazor',
        level: 'Intermediate',
        experience: '1 year',
        description:
          'I have developed and maintained Blazor apps mostly in a professional setting. In 2021, while working on an ' +
          'old JQuery app, I rewrote a module in Blazor Webassembly for fun and in my free time.  I ended up showing it ' +
          'to my boss who liked it, which ultimately lead to the company integrating it and adopting Blazor for new projects. ' +
          'More recently I worked with .NET 8 and Blazor Web Apps',
        references: [],
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
        experience: '2 years',
        description:
          "I've been using Flutter for hobby projects since 2021 and have built a few apps with it. My app " +
          'WCenzije has been published on Play Store and in production since December 2022',
        references: [
          { name: 'Spiza - Food delivery app', url: 'https://github.com/kova98/spiza' },
          { name: 'WCenzije - Public toilet reviews', url: 'https://github.com/kova98/wcenzije' },
          { name: 'Manistra - Copypastas app', url: 'https://github.com/kova98/manistra' },
        ],
      },
    ],
  },
  Backend: {
    description: 'I can develop backend systems using a variety of technologies.',
    skills: [
      {
        tech: '.NET / C#',
        img: 'dotnet',
        level: 'Expert',
        experience: '5 years',
        description:
          "I've been programming in C# and .NET since high school, and have more than 5 years of professional experience. " +
          'I can build anything from quick and dirty POCs and lean microservices to enterprise-grade ' +
          'fully test-covered solutions. I have written extensively on various .NET related topics and have published ' +
          'a quickstart guide on Unit Testing in .NET in the form of an eBook.',
        references: [
          { name: 'My Blog, mostly about .NET', url: 'https://medium.com/@kova98' },
          { name: 'Unit Testing in .NET - eBook', url: 'https://roko-kovac.ck.page/500dc08fe4' },
          {
            name: 'Backend Communication Patterns in .NET',
            url: 'https://github.com/kova98/BackendCommunicationPatterns.NET',
          },
          {
            name: 'WCenzije - backend',
            url: 'https://github.com/kova98/wcenzije/tree/main/src/backend/Wcenzije',
          },
          {
            name: 'Chat - multi transport chat app',
            url: 'https://github.com/kova98/Chat/tree/main/Chat.Api',
          },
        ],
      },
      {
        tech: 'Go',
        img: 'go',
        level: 'Beginner',
        experience: '1 year',
        description:
          'I learned Go in my free time for fun and have built a few small hobby projects with it. I hope to use it' +
          ' professionally in the future.',
        references: [
          { name: 'Spiza - backend services', url: 'https://github.com/kova98/spiza/tree/main/src/services' },
          { name: 'Signer - JWT signature service', url: 'https://github.com/kova98/signer' },
        ],
      },
      {
        tech: 'Python',
        img: 'python',
        level: 'Beginner',
        experience: '1 year',
        description:
          "I've used Python for hobby projects - automation, scrapers and small scripts consuming social media APIs.'",
        references: [
          {
            name: 'WCenzije - Instagram scraper',
            url: 'https://github.com/kova98/wcenzije/tree/main/src/backend/scraper',
          },
          {
            name: 'Bazirano - News scraper',
            url: 'https://github.com/kova98/bazirano-bot',
          },
        ],
      },
      {
        tech: 'Node.JS',
        img: 'nodejs',
        level: 'Beginner',
        experience: '1 year',
        description:
          'On the backend, I used Node.JS for a small project in Express. I found it very easy to learn' +
          ' and not too different from modern .NET web apps',
        references: [{ name: 'Ticket purchasing system - Express.js', url: 'https://github.com/kova98/skk' }],
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
        experience: '3 years',
        description:
          'I have used Docker for containerization of both hobby and professional projects. I wrote a blog post on ' +
          'automating .NET deployment where I demonstrated how to containerize a ASP.NET Core app using Docker.',
        references: [
          {
            name: 'Automating .NET Deployment - Blog post',
            url: 'https://medium.com/@kova98/automating-net-deployment-with-github-actions-and-docker-d43109d34f88',
          },
          {
            name: 'WCenzije deployment - Next.js and .NET 8 images deployed with Docker Compose',
            url: 'https://github.com/kova98/wcenzije/tree/main/src/deploy',
          },
        ],
      },
      {
        tech: 'Kubernetes',
        img: 'kubernetes',
        level: 'Beginner',
        experience: '1 year',
        description:
          'I have basic experience developing apps for Kubernetes, managing pods and ingresses using ArgoCD, and ' +
          'observing clusters using tools like Grafana and Rancher.',
        references: [],
      },
      {
        tech: 'Azure',
        img: 'azure',
        level: 'Beginner',
        experience: '2 year',
        description:
          'I have basic experience with Azure, maintaining pipelines and deploying applications in a ' +
          'professional setting.',
        references: [],
      },
      {
        tech: 'Nginx',
        img: 'nginx',
        level: 'Intermediate',
        experience: '2 years',
        description:
          'I used Nginx to deploy most of my hobby projects. I configured reverse proxies, SSL certificates, and static' +
          'file servers, ',
        references: [
          {
            name: 'My Playground server configuration',
            url: 'https://github.com/kova98/playground/blob/main/default',
          },
        ],
      },
      {
        tech: 'GitHub Actions',
        img: 'github-actions',
        level: 'Intermediate',
        experience: '2 years',
        description: 'I used GitHub Actions for CI/CD pipelines on all of my hobby projects.',
        references: [
          {
            name: 'WCenzije - Docker Compose build and deploy pipelines',
            url: 'https://github.com/kova98/wcenzije/tree/main/.github/workflows',
          },
          {
            name: 'Bazirano - SFTP build and deploy pipeline',
            url: 'https://github.com/kova98/Bazirano/blob/master/.github/workflows/bazirano-web.yml.disabled',
          },
        ],
      },
      {
        tech: 'Digital Ocean',
        img: 'digital-ocean',
        level: 'Intermediate',
        experience: '2 years',
        description:
          'I have used Digital Ocean Droplets and a managed Postgres database for all of my hobby projects. ',
        references: [],
      },
    ],
  },
};

export default skillsData;
