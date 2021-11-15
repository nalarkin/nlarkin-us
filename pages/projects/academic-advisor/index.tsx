import React from 'react';

import { academicAdvisorSummary } from 'components/projects/AcademicAdvisorImage';
import ProjectPage from 'components/projects/ProjectPage';
import { SEOProps } from 'components/shared/seo';
import { academicAdvisorBullets } from 'lib/projectInfo';

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
  return <ProjectPage project={longerAcademicSummary} seo={seo} />;
};

export default AcademicAdvisorPage;
