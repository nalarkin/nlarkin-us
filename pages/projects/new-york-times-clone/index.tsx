import React from 'react';

import { newYorkTimesSummary } from 'components/projects/NewYorkTimesImage';
import ProjectPage from 'components/projects/ProjectPage';
import { SEOProps } from 'components/shared/seo';
import { newYorkTimesBullets } from 'lib/projectInfo';

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
  return <ProjectPage project={longerNewYorkSummary} seo={seo} />;
};

export default NewYorkTimesPage;
