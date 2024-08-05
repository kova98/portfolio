export interface SkillCategories {
  [category: string]: SkillCategory;
}

export interface SkillCategory {
  description: string;
  skills: Skill[];
}

export interface Skill {
  tech: string;
  img: string;
  level: string;
  experience: string;
  description: string;
  references: Reference[];
}

export interface Reference {
  url?: string;
  name: string;
}
