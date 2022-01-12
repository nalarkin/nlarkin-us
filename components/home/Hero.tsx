import React from 'react';

import { Button, Container, Stack, Typography } from '@mui/material';

import { NextLinkComposed } from 'components/mui/Link';

const HomeHero = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        pt: 8,
        pb: 6,
      }}
    >
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        My Portfolio
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        Here is a collection of extracurricular projects I&apos;ve completed.
        I&apos;m looking for a full time position as a software developer.
        Please contact me if you have any job oppurtunities.
      </Typography>
      <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
        <Button href="#footer" variant="contained" sx={{ textAlign: 'center' }}>
          {'Contact Me'}
        </Button>
        <Button
          component={NextLinkComposed}
          to={{ pathname: '/resume' }}
          variant="outlined"
          color="secondary"
        >
          {'See Résumé'}
        </Button>
      </Stack>
    </Container>
  );
};

export default HomeHero;
