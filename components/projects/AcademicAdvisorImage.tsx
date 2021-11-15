import React from 'react';

import Image from 'next/image';

import { academicAdvisorBulletsSummary, ProjectSummary } from 'lib/projectInfo';

const AcademicAdvisorImage = () => {
  return (
    <Image
      src="/flutter.png"
      alt="flutter icon"
      width={799}
      height={228}
      objectFit="contain"
      // sizes="50vw"
    />
  );
};

export default AcademicAdvisorImage;

export const academicAdvisorSummary: ProjectSummary = {
  title: 'Academic Advisor',
  href: 'https://github.com/nalarkin/school_notifier',
  slug: 'academic-advisor',
  bullets: academicAdvisorBulletsSummary,
  image: <AcademicAdvisorImage />,
  technologies: 'Flutter, Dart, NoSQL, Firebase, Authentication, Data Streams',
};
