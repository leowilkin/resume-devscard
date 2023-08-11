import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpeg'),
  fullName: 'Leo Wilkin',
  role: 'Academic & Developer',
  details: [
    { label: 'Phone', value: '+44 7450 970998', url: 'tel:+447450970998' },
    { label: 'Email', value: 'leo@wilkin.studio', url: 'mailto:leo@wilkin.studio' },
    { label: 'From', value: 'London, United Kingdom' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '+44 7450 970998' },
    { label: 'Email', value: 'leo@wilkin.studio' },
    { label: 'GitHub', value: '/leowilkin', url: 'https://github.com/leowilkin' },
    { label: 'Website', value: 'https://wilkin.studio', url: 'https://wilkin.studio', fullRow: true },
  ],
  description:
    'Lorem ipsum dolor sit amet, consectetur **adipiscing elit**. In sodales ac dui at *vestibulum*. In condimentum metus id dui tincidunt, in blandit mi [vehicula](/). Nulla lacinia, erat sit amet elementum vulputate, lectus mauris volutpat mi, vitae accumsan metus elit ut nunc. Vestibulum lacinia enim eget eros fermentum scelerisque. Proin augue leo, posuere ut imperdiet vitae, fermentum eu ipsum. Sed sed neque sagittis, posuere urna nec, commodo leo. Pellentesque posuere justo vitae massa volutpat maximus.',
  tags: [{ name: 'Open for freelance' }, { name: 'Available for mentoring' }, { name: 'Working on side project' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Leo-Wilkin.pdf',
  },
  links: [github({ url: '//github.com/leowilkin' }), twitter({ url: '//twitter.com/lkwilk23' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
