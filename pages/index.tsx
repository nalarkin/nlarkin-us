/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable unused-imports/no-unused-vars */
import React from 'react';

import { Container, Grid } from '@mui/material';
import { GetStaticProps } from 'next';

import HomeHero from 'components/home/Hero';
import { ProjectCard, ProjectCardProps } from 'components/home/ProjectCard';
import SEO from 'components/shared/seo';
import { getSortedProjectsOrder, QueryAllProjects } from 'lib/projects';

import Layout from '../components/layouts/layout';

const HomeSEO = {
  description: "Welcome to Nathan Larkin's Personal Website.",
  title: 'Home',
};

const Home = ({ projects }: { projects: QueryAllProjects }) => {
  return (
    <>
      <SEO description={HomeSEO.description} title={HomeSEO.title} />{' '}
      <Container maxWidth="lg">
        <HomeHero />
        <Grid container spacing={4}>
          {projects.map(
            ({
              imageSrc,
              imageAlt,
              bullets,
              extraButtonHrefs,
              extraButtonText,
              id,
              title,
              github,
            }) => {
              const props: ProjectCardProps['project'] = {
                extraButtonHrefs,
                extraButtonText,
                title,
                github,
                slug: id,
                bullets,
                image: {
                  src: imageSrc,
                  alt: imageAlt,
                },
              };

              return <ProjectCard project={props} key={id} />;
            }
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = getSortedProjectsOrder();
  return {
    props: {
      projects,
    },
  };
};
