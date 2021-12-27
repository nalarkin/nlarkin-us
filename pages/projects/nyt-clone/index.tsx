import React from 'react';

import { NextSeo } from 'next-seo';

import Layout from 'components/layouts/layout';
import { newYorkTimesSummary } from 'components/projects/NewYorkTimesImage';
import ProjectPage from 'components/projects/ProjectPage';
import { LinkWrapper } from 'components/shared/LinkWrapper';
import { SEOProps } from 'components/shared/seo';
import { newYorkTimesBullets } from 'lib/projectInfo';
import { getButtonTextFromLink } from 'lib/utils';

import style from '../buttons.module.scss';

const seo: SEOProps = {
  title: newYorkTimesSummary.title,
  description:
    'A fully responsive New York Times website clone built from scratch.',
};

const longerNewYorkSummary = {
  ...newYorkTimesSummary,
  bullets: newYorkTimesBullets,
};

const NewYorkTimesPage = () => {
  return (
    <>
      <NextSeo {...seo} />
      <ProjectPage project={longerNewYorkSummary}>
        <LinkWrapper href="/news" classStyle={style.buttonFocusWrapper}>
          <div className={style.githubButton}>
            {getButtonTextFromLink('/news')}
          </div>
        </LinkWrapper>
        <LinkWrapper
          href="https://github.com/nalarkin/nlarkin-us"
          classStyle={style.buttonFocusWrapper}
        >
          <div className={style.githubButton}>
            {getButtonTextFromLink('https://github.com/nalarkin/nlarkin-us')}
          </div>
        </LinkWrapper>
      </ProjectPage>
    </>
  );
};

export default NewYorkTimesPage;

NewYorkTimesPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
