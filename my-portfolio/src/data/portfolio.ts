import { type Project, type Skill, type SocialLink } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'DJ',
    description: 'Being a looser on stage as well',
    technologies: ['Button clicker', 'Pad scratcher', 'Bongo head', 'Rokokko'],
    image: 'https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/494044407_9832644480125137_7927094865864806436_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=P72QcWi6XlgQ7kNvwE_RLjK&_nc_oc=Adl5B1Kf3tsM8Ia1BYZL5urRL6FeqXUWKL_tITXFsD5FXQVE5w-lVKfdqwS8IAnfpCI&_nc_zt=23&_nc_ht=scontent-cph2-1.xx&_nc_gid=CkFWbvbUWT1VmXgIMDI0nA&oh=00_AfhsTyx4qu9pRYmUw344cd68dQ2Hfdxe6WbPR0oX7n22qA&oe=692555D1',
    githubUrl: 'https://www.instagram.com/ferrold_/',
    liveUrl: 'https://www.instagram.com/ferrold_/'
  },
  {
    id: 2,
    title: 'Spille ma dinka dinka du',
    description: 'Creeater',
    technologies: ['Music', 'Instagram', 'Soundcloud', 'spotify'],
    image: 'https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/486491424_1064038102428066_127208468401194018_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=6SEULJUPQs8Q7kNvwFOCNKR&_nc_oc=Adno9C4F7X01jPLsVLuSBzXRMa7AMuPT7TwcJ4Iqa2eijiRoF7Uj6ntPTh2k5eY6ZUk&_nc_zt=23&_nc_ht=scontent-cph2-1.xx&_nc_gid=bfwIKCX6L76vk1IQ_5zm6Q&oh=00_AfgzNacJmIQuWK364O5iN1O9ScULUjUn_gb6donB9B83Lw&oe=6925711A',
    githubUrl: 'https://www.instagram.com/ferrold_/',
    liveUrl: 'https://www.instagram.com/ferrold_/'
  },
  {
    id: 3,
    title: 'Stright white boi',
    description: 'Kærste',
    technologies: ['xxx', 'xxx', 'xxx', 'xxx'],
    image: 'https://i1.sndcdn.com/visuals-Nu1y5otsRMmZB0U2-izKOYA-t1240x260.jpg',
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