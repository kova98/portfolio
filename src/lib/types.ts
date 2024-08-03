// types.ts
export interface Project {
  url?: string;
  name: string;
}

export interface Skill {
  tech: string;
  img: string;
  level: string;
  experience: string;
  description: string;
  references: Project[];
}

export interface SkillCategory {
  description: string;
  skills: Skill[];
}

export interface SkillCategories {
  [category: string]: SkillCategory;
}
