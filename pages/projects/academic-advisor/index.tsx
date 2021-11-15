import React from 'react';

import { academicAdvisorSummary } from 'components/projects/AcademicAdvisorImage';
import ProjectPage from 'components/projects/ProjectPage';
import { SEOProps } from 'components/shared/seo';
import { academicAdvisorBullets } from 'lib/projectInfo';

const seo: SEOProps = {
  title: academicAdvisorSummary.title,
  description: 'hello',
};

const longerAcademicSummary = {
  ...academicAdvisorSummary,
  bullets: academicAdvisorBullets,
};

const AcademicAdvisorPage = () => {
  return <ProjectPage project={longerAcademicSummary} seo={seo} />;
};

export default AcademicAdvisorPage;
