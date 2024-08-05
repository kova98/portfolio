import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Project } from '@/lib/models/project';
import projectsData from '@/data/projectsData';
import TrackedLink from '@/components/tracked-link';

const Projects: React.FC = () => {
  type ProjectCardProps = {
    project: Project;
  };

  const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
    <Card className={'flex flex-col end w-96'}>
      <CardHeader className={'min-h-0 md:min-h-56 lg:min-h-48'}>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
        <div className={'flex flex-row flex-wrap gap-1 pt-3'}>
          {project.technologies.map((tech, index) => (
            <Badge key={index}>{tech}</Badge>
          ))}
        </div>
      </CardHeader>
      <div className="flex-grow"></div>
      <CardContent>
        <div className="flex justify-center">
          <Image
            src={project.imageSrc}
            alt={project.title + ' preview'}
            width={300}
            height={300}
            className="rounded-xl"
          />
        </div>
      </CardContent>
      <div className="flex-grow"></div>
      <CardFooter className={'flex flex-row justify-between align-bottom'}>
        {project.repoUrl && (
          <Button asChild variant="outline">
            <TrackedLink
              href={project.repoUrl}
              event={'project_repo_clicked'}
              eventData={{ name: project.title, url: project.repoUrl }}
            >
              Repository
            </TrackedLink>
          </Button>
        )}
        {project.websiteUrl && (
          <Button asChild variant="outline">
            <TrackedLink
              href={project.websiteUrl}
              event={'project_website_clicked'}
              eventData={{ name: project.title, url: project.websiteUrl }}
            >
              Website
            </TrackedLink>
          </Button>
        )}
      </CardFooter>
    </Card>
  );

  return (
    <div id="projects" className="flex flex-col min-h-screen justify-center p-10 bg-background">
      <h1 className="text-center pt-7 text-5xl font-bold">I love coding for fun</h1>
      <h1 className="text-center pt-5 text-xl">Check out some of my projects</h1>

      <div className={'pt-10 px-0 flex flex-row flex-wrap gap-4 justify-center'}>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
