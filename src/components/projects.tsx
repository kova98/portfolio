import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Project } from '@/lib/models/project';
import projectsData from '@/data/projectsData';

function Projects(props) {
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
        {project.repoLink && (
          <Button asChild variant="outline">
            <Link href={project.repoLink}>Repository</Link>
          </Button>
        )}
        {project.websiteLink && (
          <Button asChild variant="outline">
            <Link href={project.websiteLink}>Website</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );

  return (
    <div id="projects" className="flex flex-col min-h-screen justify-center p-10 bg-background">
      <h1 className="text-center pt-7 text-5xl font-bold">I love coding for fun</h1>
      <h1 className="text-center pt-5 text-xl">Here are some of my projects</h1>
      {/*<h1 className="text-5xl font-bold">Hobby Projects</h1>*/}
      {/*<h1 className="pt-5 text-xl">I love coding for fun. Here are some of my projects.</h1>*/}

      <div className={'pt-10 flex flex-row flex-wrap gap-4 justify-center'}>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
