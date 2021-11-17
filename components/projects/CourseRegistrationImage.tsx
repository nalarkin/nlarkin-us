import React from 'react';

import Image from 'next/image';

import { ProjectSummary, registrationBulletsSummary } from 'lib/projectInfo';
import pythonImage from 'public/python.png';

const CourseRegistrationImage = () => {
  return (
    <Image src={pythonImage} alt="python langauge icon" objectFit="contain" />
  );
};

export default CourseRegistrationImage;

export const courseRegistrationSummary: ProjectSummary = {
  title: 'Course Registration Bot',
  href: '',
  slug: 'course-bot',
  bullets: registrationBulletsSummary,
  image: <CourseRegistrationImage />,
  technologies: 'Python, Selenium, Sphinx',
};
