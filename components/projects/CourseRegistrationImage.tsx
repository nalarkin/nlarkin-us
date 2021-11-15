import React from 'react';

import Image from 'next/image';

import { ProjectSummary, registrationBulletsSummary } from 'lib/projectInfo';

const CourseRegistrationImage = () => {
  return (
    <Image
      src="/python.png"
      alt="python langauge icon"
      width={2400}
      height={2390}
      objectFit="contain"
      // sizes="50vw"
    />
  );
};

export default CourseRegistrationImage;

export const courseRegistrationSummary: ProjectSummary = {
  title: 'Course Registration Bot',
  href: '',
  slug: 'course-registration-bot',
  bullets: registrationBulletsSummary,
  image: <CourseRegistrationImage />,
  technologies: 'Python, Selenium, Sphinx',
};
