import React from 'react';

import Image from 'next/image';

import { ProjectSummary, newYorkTimesBulletsSummary } from 'lib/projectInfo';
import timesImage from 'public/nextjs_mini.png';

const NewYorkTimesImage = () => {
  return <Image src={timesImage} alt="next js logo" objectFit="contain" />;
};

export default NewYorkTimesImage;

export const newYorkTimesSummary: ProjectSummary = {
  title: 'New York Times Clone',
  href: '/news',
  bullets: newYorkTimesBulletsSummary,
  image: <NewYorkTimesImage />,
  slug: 'nyt-clone',
  buttonText: 'View Website',
  technologies:
    'TypeScript, React.js, Next.js, Sass, HTML/CSS, JavaScript, Headless CMS',
};
