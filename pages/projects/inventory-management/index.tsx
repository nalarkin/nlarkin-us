import React from 'react';

import { NextSeo } from 'next-seo';

import Layout from 'components/layouts/layout';
import { inventoryManagementSummary } from 'components/projects/InventoryManagementImage';
import ProjectPage from 'components/projects/ProjectPage';
import { SEOProps } from 'components/shared/seo';
import { inventoryBullets } from 'lib/projectInfo';

const seo: SEOProps = {
  title: inventoryManagementSummary.title,
  description:
    'A full-stack inventory management application for 30+ GSU graduate researchers.',
};

const longerInventorySummary = {
  ...inventoryManagementSummary,
  bullets: inventoryBullets,
};

const InventoryMagagementPage = () => {
  return (
    <>
      <NextSeo {...seo} />
      <ProjectPage project={longerInventorySummary} />
    </>
  );
};

export default InventoryMagagementPage;

InventoryMagagementPage.getLayout = function getLayout(
  page: React.ReactElement
) {
  return <Layout>{page}</Layout>;
};
