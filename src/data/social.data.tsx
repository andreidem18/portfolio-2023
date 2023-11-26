import { ReactNode } from 'react';
import { 
  GitHub as GitHubIcon, 
  LinkedIn as LinkedInIcon, 
  Instagram as InstagramIcon,
} from '@mui/icons-material';

interface SocialData {
  name: string;
  link: string;
  icon: ReactNode
}

const socialData: SocialData[] = [
  {
    name: 'Github',
    link: 'https://github.com/andreidem18',
    icon: <GitHubIcon fontSize='inherit' color='inherit' />,
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/andr%C3%A9s-david-mendoza-m%C3%A1rquez-867a1b175/',
    icon: <LinkedInIcon fontSize='inherit' color='inherit' />,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/andres.flute',
    icon: <InstagramIcon fontSize='inherit' color='inherit' />,
  },
]

export default socialData;
