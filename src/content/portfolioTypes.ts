interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

interface Project {
  id: string;
  image: string;
  title: string;
  technologies: string[];
  description: string;
  demoLink?: string;
  codeLink?: string;
}

interface SkillCategory {
  title: string;
  items: string[];
}

export type { SocialLink, Project, SkillCategory };