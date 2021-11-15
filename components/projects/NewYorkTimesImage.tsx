import React from 'react';

import Image from 'next/image';

import { ProjectSummary, newYorkTimesBulletsSummary } from 'lib/projectInfo';

const NewYorkTimesImage = () => {
  return (
    <Image
      src="/nextjs.png"
      alt="next js logo"
      width={1200}
      height={719}
      objectFit="contain"
    />
  );
};

export default NewYorkTimesImage;

export const newYorkTimesSummary: ProjectSummary = {
  title: 'New York Times Clone',
  href: '/news',
  bullets: newYorkTimesBulletsSummary,
  image: <NewYorkTimesImage />,
  slug: 'new-york-times-clone',
};
