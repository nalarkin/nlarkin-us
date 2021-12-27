import React from 'react';

import { NextSeo } from 'next-seo';

import Layout from 'components/layouts/layout';
import { courseRegistrationSummary } from 'components/projects/CourseRegistrationImage';
import ProjectPage from 'components/projects/ProjectPage';
import { LinkWrapper } from 'components/shared/LinkWrapper';
import { SEOProps } from 'components/shared/seo';
import { registrationBullets } from 'lib/projectInfo';

import styles from '../buttons.module.scss';

const seo: SEOProps = {
  title: courseRegistrationSummary.title,
  description: 'Application which automatically registers for courses.',
};

const longerCourseRegistrationSummary = {
  ...courseRegistrationSummary,
  bullets: registrationBullets,
};

const CourseRegistrationPage = () => {
  return (
    <>
      <NextSeo {...seo} />

      <ProjectPage project={longerCourseRegistrationSummary}>
        <LinkWrapper
          href={'https://youtu.be/ymE4Cj72WnM'}
          classStyle={styles.buttonFocusWrapperGithub}
        >
          <div className={styles.githubButton}>Watch Demo</div>
        </LinkWrapper>
        <p className={styles.private}>
          unfortunately, I am unable to show source code due to the nature of
          the application
        </p>
      </ProjectPage>
    </>
  );
};

export default CourseRegistrationPage;

CourseRegistrationPage.getLayout = function getLayout(
  page: React.ReactElement
) {
  return <Layout>{page}</Layout>;
};
