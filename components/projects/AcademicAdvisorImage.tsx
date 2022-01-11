import React from 'react';

import { Button } from '@mui/material';
import Image from 'next/image';

import { ProjectCard, ProjectCardProps } from 'components/home/ProjectCard';
import {
  academicAdvisorBulletsSummary,
  GITHUB_BUTTON_TEXT,
  ProjectSummary,
} from 'lib/projectInfo';
import flutterImage from 'public/flutter_mini.png';

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
  buttonText: GITHUB_BUTTON_TEXT,
  technologies: 'Flutter, Dart, NoSQL, Firebase, Authentication, Data Streams',
};

const academicAdvisorCard: ProjectCardProps['project'] = {
  title: 'Academic Advisor',
  bullets: academicAdvisorBulletsSummary,
  image: {
    src: flutterImage,
    alt: 'flutter icon',
  },
  slug: 'academic-advisor',
};

export function AcademicAdvisorCard() {
  return (
    <ProjectCard project={academicAdvisorCard}>
      <Button
        size="small"
        color="primary"
        href="https://github.com/nalarkin/school_notifier"
        target="_blank"
        rel="noopener"
      >
        Github
      </Button>
    </ProjectCard>
  );
}
