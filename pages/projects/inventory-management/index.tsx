import React from 'react';

import { inventoryManagementSummary } from 'components/projects/InventoryManagementImage';
import ProjectPage from 'components/projects/ProjectPage';
import { SEOProps } from 'components/shared/seo';
import { inventoryBullets } from 'lib/projectInfo';

const seo: SEOProps = {
  title: inventoryManagementSummary.title,
  description: 'hello',
};

const longerInventorySummary = {
  ...inventoryManagementSummary,
  bullets: inventoryBullets,
};

const InventoryMagagementPage = () => {
  return <ProjectPage project={longerInventorySummary} seo={seo} />;
};

export default InventoryMagagementPage;
