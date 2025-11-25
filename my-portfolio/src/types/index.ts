export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'xxx1' | 'xxx2' | 'xxx3';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
