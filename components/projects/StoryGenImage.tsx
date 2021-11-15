import React from 'react';

import Image from 'next/image';

import { ProjectSummary, storyGenBulletsSummary } from 'lib/projectInfo';

const StoryGenImage = () => {
  return (
    <Image
      src="/rustacean.png"
      alt="rust langauge icon"
      width={1200}
      height={800}
      objectFit="contain"
    />
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
