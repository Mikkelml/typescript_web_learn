import { type Project, type Skill, type SocialLink } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application with payment integration',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/yourusername/project1',
    liveUrl: 'https://project1.com'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates',
    technologies: ['TypeScript', 'React', 'Firebase', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/yourusername/project2',
    liveUrl: 'https://project2.com'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather data visualization with interactive maps',
    technologies: ['React', 'TypeScript', 'Chart.js', 'OpenWeather API'],
    image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/yourusername/project3',
  }
];

export const skills: Skill[] = [
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend' },
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'Express', level: 75, category: 'backend' },
  { name: 'MongoDB', level: 70, category: 'backend' },
  { name: 'Git', level: 85, category: 'tools' },
  { name: 'Docker', level: 65, category: 'tools' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: '🔗' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: '💼' },
  { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: '🐦' },
  { name: 'Email', url: 'mailto:your.email@example.com', icon: '✉️' }
];