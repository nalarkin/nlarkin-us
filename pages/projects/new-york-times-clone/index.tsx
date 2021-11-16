import React from 'react';

import { newYorkTimesSummary } from 'components/projects/NewYorkTimesImage';
import ProjectPage from 'components/projects/ProjectPage';
import { LinkWrapper } from 'components/shared/LinkWrapper';
import { SEOProps } from 'components/shared/seo';
import { newYorkTimesBullets } from 'lib/projectInfo';
import { getButtonTextFromLink } from 'lib/utils';

import style from '../course-registration-bot/index.module.scss';

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
    <ProjectPage project={longerNewYorkSummary} seo={seo}>
      <div className="w-max mx-auto">
        <LinkWrapper
          href="https://github.com/nalarkin/nlarkin-us"
          classStyle={style.buttonFocusWrapper}
        >
          <div className={style.primaryButton}>
            {getButtonTextFromLink('https://github.com/nalarkin/nlarkin-us')}
          </div>
        </LinkWrapper>
      </div>
    </ProjectPage>
  );
};

export default NewYorkTimesPage;
