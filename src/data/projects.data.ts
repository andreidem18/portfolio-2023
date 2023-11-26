import { Keys } from '@/translations/Keys';

export const tagsData = [
  'all',
  'Frontend', 
  'Backend', 
  'Full Stack', 
  'React', 
  'Angular', 
  'Node', 
  'Express',
  'Python', 
  'Django', 
  'PostgreSQL',
] as const;

export interface Project {
  name: string;
  slug: string;
  type: string;
  url: string | Link[];
  description: keyof Keys;
  date: Date;
  github: Link[];
  technologies: string[];
  tags: typeof tagsData[number][];
  images: string[];
}

interface Link {
  name: string;
  url: string;
}

export const projectsData: Project[] = [
  {
    name: 'Starlux',
    slug: 'starlux',
    type: 'Full Stack',
    url: 'https://starlux.andrescode.com/',
    description: 'jewelryEcommerceDescription',
    date: new Date('2021-12-29'),
    github: [
      {name: 'GitHub', url: 'https://github.com/andreidem18/starlux'}
    ],
    technologies: ['React', 'Python', 'Django', 'PostgreSQL'],
    tags: ['React', 'Python', 'Django', 'PostgreSQL', 'Frontend', 'Backend', 'Full Stack'],
    images: [ 
      '/projects-images/starlux/home.jpg',
      '/projects-images/starlux/home-2.jpg',
      '/projects-images/starlux/products.jpg',
      '/projects-images/starlux/product-detail.jpg',
      '/projects-images/starlux/login.jpg',
    ],
  },
  {
    name: 'GoTour',
    slug: 'go-tour',
    type: 'Full Stack',
    url: [
      { name: 'User view (recomended)', url: 'https://gotour.andrescode.com'},
      { name: 'Admin view', url: 'https://gotour-admin.andrescode.com'},
    ],
    description: 'toursAppDescription',
    date: new Date('2023-06-20'),
    github: [
      { name: 'GitHub', url: 'https://github.com/andreidem18/go-tour' },
    ],
    technologies: ['Angular', 'Node', 'Express', 'PostgreSQL'],
    tags: ['Angular', 'Node', 'Express', 'PostgreSQL', 'Frontend', 'Backend', 'Full Stack'],
    images: [ 
      '/projects-images/tours-app/users-home.jpg',
      '/projects-images/tours-app/users-tour-detail.jpg',
      '/projects-images/tours-app/users-reviews.jpg',
      '/projects-images/tours-app/admin-create-tour.jpg',
      '/projects-images/tours-app/admin-locations.jpg',
    ],
  },
  {
    name: 'Marvel App',
    slug: 'heroes-app',
    type: 'Frontend',
    url: 'https://marvel.andrescode.com',
    description: 'heroesAppDescription',
    date: new Date('2023-07-30'),
    github: [
      { name: 'GitHub', url: 'https://github.com/andreidem18/marvel-project/tree/main' },
    ],
    technologies: ['Angular'],
    tags: ['Angular', 'Frontend' ],
    images: [ 
      '/projects-images/heroes-app/home.jpg',
      '/projects-images/heroes-app/comic.jpg',
      '/projects-images/heroes-app/comic-2.jpg',
    ],
  },
]

