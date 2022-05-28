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
      <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
        <Button
          component={NextLinkComposed}
          to={{ pathname: '/contact' }}
          variant="contained"
          sx={{ textAlign: 'center' }}
          data-test={'contact-button'}
          color={'primary'}
        >
          {'Contact Me'}
        </Button>
        <Button
          component={NextLinkComposed}
          to={{ pathname: '/resume' }}
          variant="outlined"
          color="info"
          data-test={'resume-button'}
        >
          {'See Résumé'}
        </Button>
      </Stack>
    </Container>
  );
};

export default HomeHero;
