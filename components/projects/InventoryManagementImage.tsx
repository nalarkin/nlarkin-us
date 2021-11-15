import React from 'react';

import Image from 'next/image';

import { inventoryBulletsSummary, ProjectSummary } from 'lib/projectInfo';

const InventoryManagementImage = () => {
  return (
    <Image
      src="/gsu.png"
      alt="georgia state university logo"
      width={1500}
      height={1221}
      objectFit="contain"
      // sizes="50vw"
    />
  );
};

export default InventoryManagementImage;

export const inventoryManagementSummary: ProjectSummary = {
  title: 'Inventory Management',
  href: '',
  slug: 'inventory-management',
  bullets: inventoryBulletsSummary,
  image: <InventoryManagementImage />,
};
