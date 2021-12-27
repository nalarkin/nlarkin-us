import React from 'react';

import Image from 'next/image';

import { inventoryBulletsSummary, ProjectSummary } from 'lib/projectInfo';
import gsuImage from 'public/gsu_mini.png';

const InventoryManagementImage = () => {
  return (
    <Image
      src={gsuImage}
      alt="georgia state university logo"
      objectFit="contain"
    />
  );
};

export default InventoryManagementImage;

export const inventoryManagementSummary: ProjectSummary = {
  title: 'Inventory Management',
  href: 'https://github.com/nalarkin/prisma-morse',
  buttonText: 'See Created API',
  slug: 'inventory-management',
  bullets: inventoryBulletsSummary,
  image: <InventoryManagementImage />,
  technologies:
    'TypeScript, React.js, Next.js, MySQL, Full Stack Development, API Creation, Redux, Async Data Fetching, HTML/CSS',
};
