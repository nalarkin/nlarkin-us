import React from 'react';

import { NextSeo } from 'next-seo';

import Layout from 'components/layouts/layout';
import { academicAdvisorSummary } from 'components/projects/AcademicAdvisorImage';
import ProjectPage from 'components/projects/ProjectPage';
import { LinkWrapper } from 'components/shared/LinkWrapper';
import { SEOProps } from 'components/shared/seo';
import { academicAdvisorBullets } from 'lib/projectInfo';
import { getButtonTextFromLink } from 'lib/utils';

import style from '../buttons.module.scss';

const seo: SEOProps = {
  title: academicAdvisorSummary.title,
  description:
    'Android application that was designed to improve communication between parents, students, and teachers.',
};

const longerAcademicSummary = {
  ...academicAdvisorSummary,
  bullets: academicAdvisorBullets,
};

const AcademicAdvisorPage = () => {
  return (
    <>
      <NextSeo {...seo} />
      <ProjectPage project={longerAcademicSummary}>
        <LinkWrapper
          href={academicAdvisorSummary.href}
          classStyle={style.buttonFocusWrapperGithub}
        >
          <div className={style.githubButton}>
            {getButtonTextFromLink(academicAdvisorSummary.href)}
          </div>
        </LinkWrapper>
      </ProjectPage>
    </>
  );
};

export default AcademicAdvisorPage;

AcademicAdvisorPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
