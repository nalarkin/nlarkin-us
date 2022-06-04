import React from 'react';

import { describe, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import { ProjectCardProps, ProjectCard } from '../ProjectCard';

describe('Project Card', () => {
  const project: ProjectCardProps['project'] = {
    title: 'New York Times Clone',
    dataTest: 'nyt',
    bullets: [
      'Developed a fully responsive New York Times website clone from scratch',
      'Website is generated statically using React and Next.js',
      'Developed schema for article, authors, and categories that are stored in a headless content management system (Sanity.io)',
    ],
    image: {
      src: '/nextjs-cover.webp',
      alt: 'next js icon',
    },
    imageProps: {
      blurDataURL:
        'data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoEAAIAAUAmJZQCdAEO+KbQAP5NP2L+Ff/qf/5/PD/Tt5NnKaRRRR+Jj0TAAA==',
      src: '/nextjs-cover.webp',
      type: 'webp',
    },
    slug: 'nyt-clone',
    github: 'https://github.com/nalarkin/nlarkin-us',
    extraButtonHrefs: ['https://www.nlarkin.us/news'],
    extraButtonText: ['View Site'],
  };

  it('displays props', () => {
    render(<ProjectCard project={project} />);
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: project.extraButtonText[0] })
    ).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByAltText(project.image.alt)).toBeInTheDocument();
    expect(screen.getByText(project.title)).toBeInTheDocument();
    expect(screen.getByText(project.bullets[0])).toBeInTheDocument();
    expect(screen.getByText(project.bullets[1])).toBeInTheDocument();
    expect(screen.getByText(project.bullets[2])).toBeInTheDocument();
  });
});
