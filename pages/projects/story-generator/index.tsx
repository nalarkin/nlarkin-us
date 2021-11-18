import React from 'react';

import { NextSeo } from 'next-seo';

import Layout from 'components/layouts/layout';
import ProjectPage from 'components/projects/ProjectPage';
import { storyGenSummary } from 'components/projects/StoryGenImage';
import { SEOProps } from 'components/shared/seo';
import { storyGenBullets } from 'lib/projectInfo';

const seo: SEOProps = {
  title: storyGenSummary.title,
  description:
    'A binary executable that generates random sentences based off the user defined rules read from a local text file.',
};

const longerStoryGenSummary = { ...storyGenSummary, bullets: storyGenBullets };

const StoryGenerator = () => {
  return (
    <>
      <NextSeo {...seo} />
      <ProjectPage project={longerStoryGenSummary} />
    </>
  );
};

export default StoryGenerator;

StoryGenerator.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
