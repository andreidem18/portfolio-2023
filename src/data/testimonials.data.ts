import { Keys } from '@/translations/Keys';

export interface Testimonial {
  name: string;
  profession: string;
  testimonial: keyof Keys;
  photoUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Brayan Muñoz',
    profession: 'Web Developer',
    testimonial: 'testimonialBrayan',
    photoUrl: '/testimonials-profiles/brayan-munoz.jpg',
  },
  {
    name: 'Jesús Fernandez',
    profession: 'Web Developer',
    testimonial: 'testimonialJesus',
    photoUrl: '/testimonials-profiles/jesus-fernandez.jpeg',
  },
  {
    name: 'Gabriel Martinez',
    profession: 'Web Developer',
    testimonial: 'testimonialGabriel',
    photoUrl: '/testimonials-profiles/gabriel-martinez.jpg',
  },
]
