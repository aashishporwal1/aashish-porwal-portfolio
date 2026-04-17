export interface NavLink {
  label: string;
  href: string;
  id: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string[];
  tech?: string[];
}
