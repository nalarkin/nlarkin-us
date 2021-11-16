import React from 'react';

import { courseRegistrationSummary } from 'components/projects/CourseRegistrationImage';
import ProjectPage from 'components/projects/ProjectPage';
import { LinkWrapper } from 'components/shared/LinkWrapper';
import { SEOProps } from 'components/shared/seo';
import { registrationBullets } from 'lib/projectInfo';

import styles from './index.module.scss';

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
    <ProjectPage
      project={longerCourseRegistrationSummary}
      seo={seo}
      whiteBackground={true}
    >
      <div className="mx-auto w-max">
        <LinkWrapper
          href={'https://youtu.be/ymE4Cj72WnM'}
          classStyle={styles.buttonFocusWrapper}
        >
          <div className={styles.primaryButton}>Watch Demo</div>
        </LinkWrapper>
      </div>
    </ProjectPage>
  );
};

export default CourseRegistrationPage;
