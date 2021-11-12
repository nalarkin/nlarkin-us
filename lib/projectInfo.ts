export interface Project {
  title: string;
  subtitle: string;
  bullets: string[];
  href: string;
}

export const storyGenBullets = [
  'Lorem, ipsum dolor sit amet consectetur',
  'Lorem, ipsum dolor sit amet consectetur',
  'Lorem, ipsum dolor sit amet consectetur',
  'Lorem, ipsum dolor sit amet consectetur',
];

export const academicAdvisorBullets = [
  'sequi iure molestiae modi magnam illum sapiente, doloribus ex',
  'sequi iure molestiae modi magnam illum sapiente, doloribus ex',
  'sequi iure molestiae modi magnam illum sapiente, doloribus ex',
];

export const allProjects: Project[] = [
  {
    title: 'Story Generator',
    subtitle: 'test subtitle',
    href: 'https://github.com/nalarkin/story-generator',
    bullets: storyGenBullets,
  },
  {
    title: 'Academic Advisor',
    subtitle: 'A mobile application',
    href: 'https://github.com/nalarkin/school_notifier',
    bullets: academicAdvisorBullets,
  },
  {
    title: 'Course Registration Bot',
    subtitle: 'A bot that registers for school courses',
    href: 'https://github.com/nalarkin/school_notifier',
    bullets: academicAdvisorBullets,
  },
  {
    title: 'New York Times Clone',
    subtitle: 'Next.js, React, SASS, Sanity.io',
    href: '/news',
    bullets: academicAdvisorBullets,
  },
  {
    title: 'Inventory Management Software',
    subtitle: 'Next.js, React, Django, HTTP Requests, API Creation',
    href: '/news',
    bullets: academicAdvisorBullets,
  },
];
