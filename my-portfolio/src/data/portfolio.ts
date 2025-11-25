import { type Project, type Skill, type SocialLink } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'DJ',
    description: 'Being a looser on stage as well',
    technologies: ['Button clicker', 'Pad scratcher', 'Bongo head', 'Rokokko'],
    image: '/src/assets/test.jpg',
    githubUrl: 'https://www.instagram.com/ferrold_/',
    liveUrl: 'https://www.instagram.com/ferrold_/'
  },
  {
    id: 2,
    title: 'Spille ma dinka dinka du',
    description: 'Creeater',
    technologies: ['Music', 'Instagram', 'Soundcloud', 'spotify'],
    image: '/src/assets/project2.jpg',
    githubUrl: 'https://www.instagram.com/ferrold_/',
    liveUrl: 'https://www.instagram.com/ferrold_/'
  },
  {
    id: 3,
    title: 'Stright white boi',
    description: 'Kærste',
    technologies: ['xxx', 'xxx', 'xxx', 'xxx'],
    image: '/src/assets/mixer.jpg',
    githubUrl: 'https://www.facebook.com/victor.ferrold',
    liveUrl: 'https://www.facebook.com/victor.ferrold'
  }
];

export const skills: Skill[] = [
  { name: 'Afro House', level: 93, category: 'xxx1' }, // xxx1 -> Music
  { name: 'Tech House', level: 92, category: 'xxx1' },
  { name: 'Afro Tech', level: 100, category: 'xxx1' },
  //{ name: 'xxx', level: 85, category: 'xxx1' },
  { name: 'xxx', level: 80, category: 'xxx2' }, // xxx2 -> 
  { name: 'xxx', level: 75, category: 'xxx2' },
  { name: 'xxx', level: 70, category: 'xxx2' },
  { name: 'xxx', level: 85, category: 'xxx3' },
  { name: 'xxx', level: 65, category: 'xxx3' },
];

export const socialLinks: SocialLink[] = [
  { name: 'Instagram', url: 'https://www.instagram.com/ferrold_/', icon: '🔗' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/victor-ferrold-940940109/', icon: '💼' },
  { name: 'Spotify', url: 'https://open.spotify.com/artist/2iWkuTijtgxovgCiuYHdWL?si=4xBVL1hkR_eE8jtXhsc9Ww', icon: '🎧' },
  { name: 'Email', url: 'mailto:vrferrold@gmail.com', icon: '✉️' }
];