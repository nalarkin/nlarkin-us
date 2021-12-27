import React from 'react';

import Image from 'next/image';

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
