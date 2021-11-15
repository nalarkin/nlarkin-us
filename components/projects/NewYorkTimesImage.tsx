import React from 'react';

import Image from 'next/image';

import { ProjectSummary, newYorkTimesBulletsSummary } from 'lib/projectInfo';
import timesImage from 'public/nextjs.png';

const NewYorkTimesImage = () => {
  return <Image src={timesImage} alt="next js logo" objectFit="contain" />;
};

export default NewYorkTimesImage;

export const newYorkTimesSummary: ProjectSummary = {
  title: 'New York Times Clone',
  href: '/news',
  bullets: newYorkTimesBulletsSummary,
  image: <NewYorkTimesImage />,
  slug: 'new-york-times-clone',
  technologies:
    'TypeScript, React.js, Next.js, Sass, HTML, JavaScript, Headless CMS',
};
