import React from 'react';

import { NextSeo } from 'next-seo';

import Layout from 'components/layouts/layout';
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
  return (
    <>
      <NextSeo {...seo} />
      <ProjectPage project={longerAcademicSummary} />{' '}
    </>
  );
};

export default AcademicAdvisorPage;

AcademicAdvisorPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
