'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import TechBadge from '@/components/tech-badge';
import { useState, useEffect } from 'react';
import { Skill, SkillCategories } from '@/lib/models/skill';
import skillsData from '@/data/skillsData';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRightIcon } from '@radix-ui/react-icons';

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
      className="bg-foreground text-background p-8 pb-16 lg:pb-0 pt-16 rounded-lg w-full max-w-4xl mx-auto"
      id="skill-details"
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
          <ul className="list-disc list-inside pt-2">
            {skill.references.map((reference, index) => (
              <li key={index}>
                <Button asChild variant="link" className={'text-background text-md text-wrap'}>
                  <Link href={reference.url ?? ''}>{reference.name}</Link>
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
  const dotnet = skillsData['Backend'].skills.find((skill) => skill.tech === '.NET / C#')!;
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(dotnet); // Stores the selected skill object

  const handleSkillSelection = (tech: string) => {
    for (const category in skillsData) {
      const skill = skillsData[category as keyof SkillCategories].skills.find((skill) => skill.tech === tech);
      if (skill) {
        setSelectedSkill(skill);
        return;
      }
    }
  };

  useEffect(() => {
    // On mobile, scroll to the detailed skill card when a skill is selected
    if (!window.matchMedia('(min-width: 768px)').matches) {
      const element = document.getElementById('skill-details');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    }
  }, [selectedSkill]);

  const skillCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 justify-items-center px-0 lg:px-20">
      {Object.entries(skillsData).map(([category, { description, skills }]) => (
        <Card key={category} className="bg-foreground text-backgroundw-full max-w-md md:max-w-72">
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
