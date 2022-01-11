import React from 'react';

import { Button } from '@mui/material';
import Image from 'next/image';

import { ProjectCard, ProjectCardProps } from 'components/home/ProjectCard';
import {
  GITHUB_BUTTON_TEXT,
  ProjectSummary,
  storyGenBulletsSummary,
} from 'lib/projectInfo';
import storyImage from 'public/rustacean_mini.png';

const StoryGenImage = () => {
  return (
    <Image src={storyImage} alt="rust langauge icon" objectFit="contain" />
  );
};

export default StoryGenImage;

export const storyGenSummary: ProjectSummary = {
  title: 'Story Generator',
  href: 'https://github.com/nalarkin/story-generator',
  bullets: storyGenBulletsSummary,
  image: <StoryGenImage />,
  slug: 'story-generator',
  buttonText: GITHUB_BUTTON_TEXT,
  technologies: 'Rust, GitHub Pages, Grammar Parse Trees',
};
export const storyGenCard: ProjectCardProps['project'] = {
  title: 'Story Generator',
  bullets: storyGenBulletsSummary,
  image: {
    src: storyImage,
    alt: 'rust mascot',
  },
  slug: 'story-generator',
};

export function StoryGenCard() {
  return (
    <ProjectCard project={storyGenCard}>
      <Button
        size="small"
        color="primary"
        href="https://github.com/nalarkin/story-generator"
        target="_blank"
        rel="noopener"
      >
        Github
      </Button>
    </ProjectCard>
  );
}
