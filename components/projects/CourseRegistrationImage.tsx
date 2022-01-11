import React from 'react';

import { Button } from '@mui/material';
import Image from 'next/image';

import { ProjectCard, ProjectCardProps } from 'components/home/ProjectCard';
import { ProjectSummary, registrationBulletsSummary } from 'lib/projectInfo';
import pythonImage from 'public/python_mini.png';

const CourseRegistrationImage = () => {
  return (
    <Image src={pythonImage} alt="python langauge icon" objectFit="contain" />
  );
};

export default CourseRegistrationImage;

export const courseRegistrationSummary: ProjectSummary = {
  title: 'Course Registration Bot',
  href: 'https://youtu.be/ymE4Cj72WnM',
  buttonText: 'Watch Demo',
  slug: 'course-bot',
  bullets: registrationBulletsSummary,
  image: <CourseRegistrationImage />,
  technologies: 'Python, Selenium, Sphinx, Beautiful Soup',
};

export const courseRegistrationCard: ProjectCardProps['project'] = {
  title: 'Course Registration Bot',
  bullets: registrationBulletsSummary,
  image: {
    src: pythonImage,
    alt: 'georgia state university logo',
  },
  slug: 'course-bot',
};

export function CourseRegistrationCard() {
  return (
    <ProjectCard project={courseRegistrationCard}>
      <Button
        size="small"
        color="primary"
        href="https://youtu.be/ymE4Cj72WnM"
        target="_blank"
        rel="noopener"
      >
        Youtube Demo
      </Button>
    </ProjectCard>
  );
}
