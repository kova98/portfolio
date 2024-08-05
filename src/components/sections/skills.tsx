'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import TechBadge from '@/components/tech-badge';
import { useState, useEffect, useRef } from 'react';
import { Reference, Skill, SkillCategories } from '@/lib/models/skill';
import skillsData from '@/data/skillsData';
import { Button } from '@/components/ui/button';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import TrackedLink from '@/components/tracked-link';

interface DetailedSkillCardProps {
  skill: Skill;
  setSelectedSkill: (skill: Skill) => void;
}

const DetailedSkillCard: React.FC<DetailedSkillCardProps> = ({ skill, setSelectedSkill }) => {
  function nextSkill(skill: Skill) {
    const allSkills = Object.values(skillsData).flatMap((category) => category.skills);
    const currentIndex = allSkills.findIndex((s) => s.tech === skill.tech);
    return allSkills[(currentIndex + 1) % allSkills.length];
  }

  function selectNextSkill() {
    setSelectedSkill(nextSkill(skill));
  }

  return (
    <div
      id="skill-details"
      className="bg-foreground text-background p-8 pb-16 pt-16 rounded-lg w-full max-w-4xl mx-auto"
    >
      <div className={'flex flex-row justify-between'}>
        <h2 className="text-4xl font-bold pb-4">{skill.tech}</h2>
        <Button
          variant="ghost"
          size="sm"
          className={'bg-foreground hover:bg-gray-200 hover:text-background scale-125'}
          onClick={selectNextSkill}
        >
          {nextSkill(skill).tech}
          <ChevronRightIcon />
        </Button>
      </div>
      <p className="text-lg text-muted-foreground mb-4">{skill.level}</p>
      <p className="pt-2 text-base">{skill.description}</p>
      {skill.references.length > 0 && (
        <>
          <h3 className="text-2xl font-semibold pt-6">References</h3>
          <ul className="list-disc list-outside pt-2 pl-4">
            {skill.references.map((reference, index) => (
              <li key={index}>
                <Button variant="link" className={'text-background text-md text-wrap text-left'}>
                  <TrackedLink href={reference.url ?? ''} event={'skill_reference_clicked'} eventData={reference}>
                    {reference.name}
                  </TrackedLink>
                </Button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const renders = useRef(0);

  useEffect(() => {
    console.log('selectedSkill', selectedSkill);
    // TODO: Figure out why this happens and how to fix it properly
    // Hack to stop autoscroll on initial page render
    renders.current += 1;
    if (renders.current > 3) {
      const element = document.getElementById('skill-details');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, [selectedSkill]);

  useEffect(() => {
    const dotnet = skillsData['Backend'].skills.find((skill) => skill.tech === '.NET / C#')!;
    setSelectedSkill(dotnet);
  }, []);

  const handleSkillSelection = (tech: string) => {
    for (const category in skillsData) {
      const skill = skillsData[category as keyof SkillCategories].skills.find((skill) => skill.tech === tech);
      if (skill) {
        setSelectedSkill(skill);
        return;
      }
    }
  };

  const skillCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 justify-items-center px-0 lg:px-20">
      {Object.entries(skillsData).map(([category, { description, skills }]) => (
        <Card key={category} className="bg-foreground text-background w-full max-w-md md:max-w-72">
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
        <h1 className="text-5xl font-bold text-center">Here are some of the things I can do</h1>
        <div className="p-10"></div>
        {/* TODO: summary toggle and display */}
        {skillCards()}
        {selectedSkill && <DetailedSkillCard skill={selectedSkill} setSelectedSkill={setSelectedSkill} />}
      </div>
    </>
  );
};

export default Skills;
