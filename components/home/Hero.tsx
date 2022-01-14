import React from 'react';

import { Button, Container, Stack, Typography } from '@mui/material';

import { NextLinkComposed } from 'components/mui/Link';

const HomeHero = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        pt: 6,
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
        Hi, I&apos;m Nathan.
      </Typography>
      <Typography
        component="h1"
        variant="h4"
        align="center"
        color="text.secondary"
        gutterBottom
      >
        I&apos;m <strong>passionate</strong> about designing, developing, and
        maintaining high-quality software.
      </Typography>
      {/* <Typography variant="h5" align="center" color="text.secondary" paragraph>
        Here is a collection of extracurricular projects I&apos;ve completed.
        I&apos;m looking for a full time position as a software developer.
      </Typography> */}
      <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
        <Button
          component={NextLinkComposed}
          to={{ pathname: '/contact' }}
          variant="contained"
          sx={{ textAlign: 'center' }}
        >
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
