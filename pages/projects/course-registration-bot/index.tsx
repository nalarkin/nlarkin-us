import React from 'react';

import { courseRegistrationSummary } from 'components/projects/CourseRegistrationImage';
import ProjectPage from 'components/projects/ProjectPage';
import { LinkWrapper } from 'components/shared/LinkWrapper';
import { SEOProps } from 'components/shared/seo';
import { registrationBullets } from 'lib/projectInfo';

import styles from './index.module.scss';

const seo: SEOProps = {
  title: courseRegistrationSummary.title,
  description: 'hello',
};

const longerCourseRegistrationSummary = {
  ...courseRegistrationSummary,
  bullets: registrationBullets,
};

const CourseRegistrationPage = () => {
  return (
    <ProjectPage
      project={longerCourseRegistrationSummary}
      seo={seo}
      whiteBackground={true}
    >
      <LinkWrapper href={'https://youtu.be/ymE4Cj72WnM'}>
        <div className={styles.primaryButton}>Watch Demo</div>
      </LinkWrapper>
    </ProjectPage>
  );
};

export default CourseRegistrationPage;
