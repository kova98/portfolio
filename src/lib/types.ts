// types.ts
export interface Project {
  name: string;
}

export interface Skill {
  tech: string;
  img: string;
  level: string;
  experience: string;
  description: string;
  projects: Project[];
}

export interface SkillCategory {
  description: string;
  skills: Skill[];
}

export interface SkillCategories {
  [category: string]: SkillCategory;
}
