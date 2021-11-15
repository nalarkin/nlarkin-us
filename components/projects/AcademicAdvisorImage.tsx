import React from 'react';

import Image from 'next/image';

import { academicAdvisorBulletsSummary, ProjectSummary } from 'lib/projectInfo';
import flutterImage from 'public/flutter.png';

const AcademicAdvisorImage = () => {
  return <Image src={flutterImage} alt="flutter icon" objectFit="contain" />;
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
