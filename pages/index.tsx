/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable unused-imports/no-unused-vars */
import React from 'react';

import { Container, Grid } from '@mui/material';

import HomeHero from 'components/home/Hero';
import { AcademicAdvisorCard } from 'components/projects/AcademicAdvisorImage';
import { CourseRegistrationCard } from 'components/projects/CourseRegistrationImage';
import { InventoryManagementCard } from 'components/projects/InventoryManagementImage';
import { NewYorkTimesCard } from 'components/projects/NewYorkTimesImage';
import { StoryGenCard } from 'components/projects/StoryGenImage';
import SEO from 'components/shared/seo';

import Layout from '../components/layouts/layout';

const HomeSEO = {
  description: "Welcome to Nathan Larkin's Personal Website.",
  title: 'Home',
};

const HomeContents = () => {
  return (
    <Container maxWidth="lg">
      <HomeHero />
      <Grid container spacing={4}>
        <InventoryManagementCard />
        <NewYorkTimesCard />
        <StoryGenCard />
        <CourseRegistrationCard />
        <AcademicAdvisorCard />
      </Grid>
      {/* </Stack> */}
    </Container>
  );
};

const Home = () => {
  return (
    <>
      <SEO description={HomeSEO.description} title={HomeSEO.title} />{' '}
      <HomeContents />
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
