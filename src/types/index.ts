export type Theme = 'light' | 'dark';

export interface NavItem {
  id: string;
  label: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Skill {
  name: string;
  level: number; // 0..100
}

export interface SkillGroup {
  [group: string]: Skill[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  live: string;
  repo: string;
  accent: string; // tailwind gradient classes
}

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export interface Social {
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'dribbble';
}
