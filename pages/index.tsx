/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable unused-imports/no-unused-vars */
import React from 'react';

import { Container, Grid, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
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
        <Divider />
        <Typography
          variant="h4"
          sx={{ mb: 3, mt: 3 }}
          textAlign={'center'}
          color={'text.primary'}
          component={'h2'}
        >
          Extracurricular Projects
        </Typography>
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
              imageProps,
              dataTest,
            }) => {
              const props: ProjectCardProps['project'] = {
                extraButtonHrefs,
                extraButtonText,
                title,
                github,
                imageProps,
                slug: id,
                bullets,
                dataTest,
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
  return {
    props: {
      projects: await getSortedProjectsOrder(),
    },
  };
};
