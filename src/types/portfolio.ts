export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  duration: string;
  category: 'Full-Stack' | 'AI & Python' | 'Backend & API' | 'Algorithms';
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  architectureDetails?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  bullets: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  highlights?: string[];
  status?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  items: {
    name: string;
    level: string;
    proficiency: number; // 0 - 100
    tags: string[];
  }[];
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  skills: string[];
}
