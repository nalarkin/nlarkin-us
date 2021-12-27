import React from 'react';

import { NextSeo } from 'next-seo';

import Layout from 'components/layouts/layout';
import ProjectPage from 'components/projects/ProjectPage';
import { storyGenSummary } from 'components/projects/StoryGenImage';
import { LinkWrapper } from 'components/shared/LinkWrapper';
import { SEOProps } from 'components/shared/seo';
import { storyGenBullets } from 'lib/projectInfo';
import { getButtonTextFromLink } from 'lib/utils';

import style from '../buttons.module.scss';

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
      <ProjectPage project={longerStoryGenSummary}>
        <LinkWrapper
          href={storyGenSummary.href}
          classStyle={style.buttonFocusWrapper}
        >
          <div className={style.githubButton}>
            {getButtonTextFromLink(storyGenSummary.href)}
          </div>
        </LinkWrapper>
      </ProjectPage>
    </>
  );
};

export default StoryGenerator;

StoryGenerator.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
