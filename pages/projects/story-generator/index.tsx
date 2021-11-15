import React from 'react';

import ProjectPage from 'components/projects/ProjectPage';
import { storyGenSummary } from 'components/projects/StoryGenImage';
import { SEOProps } from 'components/shared/seo';
import { storyGenBullets } from 'lib/projectInfo';

const seo: SEOProps = {
  title: storyGenSummary.title,
  description: 'hello',
};

const longerStoryGenSummary = { ...storyGenSummary, bullets: storyGenBullets };

const StoryGenerator = () => {
  return <ProjectPage project={longerStoryGenSummary} seo={seo} />;
};

export default StoryGenerator;
