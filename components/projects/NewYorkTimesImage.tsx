import React from 'react';

import { Button } from '@mui/material';
import Image from 'next/image';

import { ProjectCard, ProjectCardProps } from 'components/home/ProjectCard';
import { newYorkTimesBulletsSummary, ProjectSummary } from 'lib/projectInfo';
import timesImage from 'public/nextjs_mini.png';

const NewYorkTimesImage = () => {
  return <Image src={timesImage} alt="next js logo" objectFit="contain" />;
};

export default NewYorkTimesImage;

export const newYorkTimesSummary: ProjectSummary = {
  title: 'New York Times Clone',
  href: 'https://www.nlarkin.us/news',
  bullets: newYorkTimesBulletsSummary,
  image: <NewYorkTimesImage />,
  slug: 'nyt-clone',
  buttonText: 'View Website',
  technologies:
    'TypeScript, React.js, Next.js, Sass, HTML/CSS, JavaScript, Headless CMS',
};

export const newYorkTimesCard: ProjectCardProps['project'] = {
  title: 'New York Times Clone',
  bullets: newYorkTimesBulletsSummary,
  image: {
    src: timesImage,
    alt: 'next js logo',
  },
  slug: 'nyt-clone',
};

export function NewYorkTimesCard() {
  return (
    <ProjectCard project={newYorkTimesCard}>
      <Button
        size="small"
        color="primary"
        href="https://www.nlarkin.us/news"
        target="_blank"
        rel="noopener"
      >
        Website
      </Button>
      <Button
        size="small"
        color="primary"
        href="https://github.com/nalarkin/nlarkin-us"
        target="_blank"
        rel="noopener"
      >
        Github
      </Button>
    </ProjectCard>
  );
}
