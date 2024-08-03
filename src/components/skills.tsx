'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import TechBadge from '@/components/tech-badge';
import { useState } from 'react';

const Skills = () => {
  const [selected, setSelected] = useState<string>('html');

  return (
    <div id="skills" className="flex flex-col min-h-screen items-center p-4 bg-foreground text-background">
      <div className="p-10"></div>
      <h1 className="text-5xl font-bold">Here are some of the things I can do.</h1>
      <div className="p-10"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center px-20">
        <Card className="bg-foreground text-background m-4 w-full max-w-sm">
          <CardHeader>
            <CardTitle>Web</CardTitle>
            <CardDescription className="text-card">
              I can create web interfaces using a variety of technologies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-1">
              <TechBadge tech={'HTML'} img={'html'} desc={'Advanced'} selected={selected} setSelected={setSelected} />
              <TechBadge tech={'CSS'} img={'css'} desc={'Beginner'} selected={selected} setSelected={setSelected} />
              <TechBadge
                tech={'JavaScript'}
                img={'javascript'}
                desc={'Intermediate'}
                selected={selected}
                setSelected={setSelected}
              />
              <TechBadge
                tech={'Angular'}
                img={'angular'}
                desc={'Beginner'}
                selected={selected}
                setSelected={setSelected}
              />
              <TechBadge tech={'React'} img={'react'} desc={'Beginner'} selected={selected} setSelected={setSelected} />
              <TechBadge
                tech={'Next.JS'}
                img={'nextjs'}
                desc={'Beginner'}
                selected={selected}
                setSelected={setSelected}
              />
              <TechBadge
                tech={'Blazor'}
                img={'blazor'}
                desc={'Intermediate'}
                selected={selected}
                setSelected={setSelected}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-foreground text-background m-4 w-full max-w-sm">
          <CardHeader>
            <CardTitle>Mobile</CardTitle>
            <CardDescription className="text-card">
              I can create cross-platform mobile applications using Flutter
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-1">
              <TechBadge
                tech={'Flutter'}
                img={'flutter'}
                desc={'Advanced'}
                selected={selected}
                setSelected={setSelected}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-foreground text-background m-4 w-full max-w-sm">
          <CardHeader>
            <CardTitle>Backend</CardTitle>
            <CardDescription className="text-card">
              I can write backend services using a variety of technologies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-1">
              <TechBadge
                tech={'.NET / C#'}
                img={'dotnet'}
                desc={'Expert'}
                selected={selected}
                setSelected={setSelected}
              />
              <TechBadge tech={'Go'} img={'go'} desc={'Beginner'} selected={selected} setSelected={setSelected} />
              <TechBadge
                tech={'Node.JS'}
                img={'nodejs'}
                desc={'Beginner'}
                selected={selected}
                setSelected={setSelected}
              />
              <TechBadge
                tech={'Python'}
                img={'python'}
                desc={'Beginner'}
                selected={selected}
                setSelected={setSelected}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-foreground text-background m-4 w-full max-w-sm">
          <CardHeader>
            <CardTitle>DevOps</CardTitle>
            <CardDescription className="text-card">
              I can set up CI/CD pipelines and deploy applications to the cloud
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-1">
              <TechBadge
                tech={'Docker'}
                img={'docker'}
                desc={'Intermediate'}
                selected={selected}
                setSelected={setSelected}
              />
              <TechBadge
                tech={'Kubernetes'}
                img={'kubernetes'}
                desc={'Beginner'}
                selected={selected}
                setSelected={setSelected}
              />
              <TechBadge tech={'Azure'} img={'azure'} desc={'Beginner'} selected={selected} setSelected={setSelected} />
              <TechBadge
                tech={'Nginx'}
                img={'nginx'}
                desc={'Intermediate'}
                selected={selected}
                setSelected={setSelected}
              />
              <TechBadge
                tech={'GitHub Actions'}
                img={'github-actions'}
                desc={'Intermediate'}
                selected={selected}
                setSelected={setSelected}
              />
              <TechBadge
                tech={'Digital Ocean'}
                img={'digital-ocean'}
                desc={'Intermediate'}
                selected={selected}
                setSelected={setSelected}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
