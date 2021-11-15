import React from 'react';

import Image from 'next/image';

import { ProjectSummary, storyGenBulletsSummary } from 'lib/projectInfo';
import storyImage from 'public/rustacean.png';

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
  technologies: 'Rust, GitHub Pages, Grammar Parse Trees',
};
