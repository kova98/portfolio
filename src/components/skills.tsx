'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import TechBadge from '@/components/tech-badge';
import { useState } from 'react';
import { Skill, SkillCategories } from '@/lib/types';
import techData from '@/components/techData';

interface DetailedSkillCardProps {
  skill: Skill;
}

const DetailedSkillCard: React.FC<DetailedSkillCardProps> = ({ skill }) => {
  return (
    <Card className="bg-foreground text-background m-4 w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>{skill.tech}</CardTitle>
        <CardDescription className="text-muted-foreground">{skill.level}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mt-2">{skill.description}</p>
        <h3 className="text-2xl font-semibold mt-4">References</h3>
        <ul className="list-disc list-inside">
          {skill.projects.map((project, index) => (
            <li key={index}>{project.name}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
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
    <div id="skills" className="flex flex-col min-h-screen items-center p-4 bg-foreground text-background">
      <div className="p-10"></div>
      <h1 className="text-5xl font-bold">Here are some of the things I can do.</h1>
      <div className="p-10"></div>
      {skillCards()}
      {selectedSkill && <DetailedSkillCard skill={selectedSkill} />}
    </div>
  );
};

export default Skills;
