'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import TechBadge from '@/components/tech-badge';
import { useState } from 'react';
import { Skill, SkillCategories } from '@/lib/types';
import techData from '@/components/techData';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface DetailedSkillCardProps {
  skill: Skill;
}

const DetailedSkillCard: React.FC<DetailedSkillCardProps> = ({ skill }) => {
  return (
    <div className="bg-foreground text-background mt-8 p-8 rounded-lg w-full max-w-4xl mx-auto" id="skill-details">
      <h2 className="text-4xl font-bold mb-4">{skill.tech}</h2>
      <p className="text-lg text-muted-foreground mb-4">{skill.level}</p>
      <p className="pt-2 text-base">{skill.description}</p>
      <h3 className="text-2xl font-semibold mt-6">References</h3>
      <ul className="list-disc list-inside mt-2">
        {skill.projects.map((reference, index) => (
          <li key={index}>
            <Button asChild variant="link" className={'text-background text-md'}>
              <Link href={reference.url ?? ''}>{reference.name}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null); // Stores the selected skill object

  // Handles the selection of a skill
  const handleSkillSelection = (tech: string) => {
    // If the tech is already selected, deselect it
    if (selectedSkill && selectedSkill.tech === tech) {
      setSelectedSkill(null);
      return;
    }

    // Otherwise, find and set the selected skill
    for (const category in techData) {
      const skill = techData[category as keyof SkillCategories].skills.find((skill) => skill.tech === tech);
      if (skill) {
        setSelectedSkill(skill);
        // const element = document.getElementById('skill-details');
        // element?.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
  };

  // Renders the cards for each category of skills
  const skillCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center px-20">
      {Object.entries(techData).map(([category, { description, skills }]) => (
        <Card key={category} className="bg-foreground text-background m-4 w-full max-w-sm">
          <CardHeader>
            <CardTitle>{category}</CardTitle>
            <CardDescription className="text-card">{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-1">
              {skills.map((skill) => (
                <TechBadge
                  key={skill.tech}
                  tech={skill.tech}
                  img={skill.img}
                  desc={skill.level}
                  selected={selectedSkill?.tech || ''}
                  setSelected={handleSkillSelection}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <>
      <div id="skills" className="flex flex-col min-h-screen items-center p-4 bg-foreground text-background">
        <div className="p-10"></div>
        <h1 className="text-5xl font-bold">Here are some of the things I can do.</h1>
        <div className="p-10"></div>
        {skillCards()}
        {selectedSkill && <DetailedSkillCard skill={selectedSkill} />}
      </div>
    </>
  );
};

export default Skills;
