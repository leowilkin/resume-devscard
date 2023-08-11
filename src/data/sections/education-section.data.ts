import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Preparatory School',
      institution: 'Dragon School, Oxford',
      image: import('@/assets/logos/wroclaw-university-of-technology.jpg'),
      dates: [new Date('2019.07'), new Date('2023.05')],
      description: 'School Prefect, Music Scholar, Anti-Bullying Ambassador & I.T. Ambassador',
      links: [website({ url: '//dragonschool.org' })],
    },
    {
      title: 'GCSE & A Levels',
      institution: 'Wellington College, UK',
      image: import('@/assets/logos/wroclaw-university-of-technology.jpg'),
      dates: [new Date('2023.07'), new Date('2027.05')],
      description: "The Wellesley Scholar, Drama Scholar, and Choral Award Holder",
      links: [website({ url: '//wellingtoncollege.org.uk' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
