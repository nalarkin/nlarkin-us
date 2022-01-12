import React from 'react';

import { Button } from '@mui/material';
import Image from 'next/image';

import { ProjectCard, ProjectCardProps } from 'components/home/ProjectCard';
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
  buttonText: 'See Back End',
  slug: 'inventory-management',
  bullets: inventoryBulletsSummary,
  image: <InventoryManagementImage />,
  technologies:
    'TypeScript, React.js, Next.js, MySQL, Full Stack Development, API Creation, Redux, Async Data Fetching, HTML/CSS',
};

export const inventoryManagementCard: ProjectCardProps['project'] = {
  title: 'Inventory Management',
  bullets: inventoryBulletsSummary,
  image: {
    src: gsuImage,
    alt: 'georgia state university logo',
  },
  slug: 'inventory-management',
};

export function InventoryManagementCard() {
  return (
    <ProjectCard project={inventoryManagementCard}>
      <Button
        size="small"
        color="primary"
        href="https://github.com/nalarkin/prisma-morse"
        target="_blank"
        rel="noopener"
      >
        Github
      </Button>
    </ProjectCard>
  );
}
