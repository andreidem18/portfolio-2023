import { Keys } from '@/translations/Keys';

interface Testimonial {
  name: string;
  profession: string;
  testimonial: keyof Keys;
  photoUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'John Doe',
    profession: 'Frontend Developer',
    testimonial: 'testimonialJohn',
    photoUrl: '/testimonials-profiles/example.jpg',
  },
  {
    name: 'John Doe II',
    profession: 'Frontend Developer',
    testimonial: 'testimonialJohn',
    photoUrl: '/testimonials-profiles/example.jpg',
  },
  {
    name: 'John Doe III',
    profession: 'Frontend Developer',
    testimonial: 'testimonialJohn',
    photoUrl: '/testimonials-profiles/example.jpg',
  },
  {
    name: 'John Doe IV',
    profession: 'Frontend Developer',
    testimonial: 'testimonialJohn',
    photoUrl: '/testimonials-profiles/example.jpg',
  },
]
