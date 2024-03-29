import React from 'react';

import {
  Box,
  Chip,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';

import Layout from 'components/layouts/layout';
import { getAllProjectIds, getProjectData, ProjectData } from 'lib/projects';

import { ProjectButton } from '../../components/home/ProjectButton';
import style from './[id].module.scss';

function TechnologyList({ tech }: { tech: string[] }) {
  return (
    <Stack
      direction="row"
      flexWrap={'wrap'}
      gap={2}
      justifyContent={'center'}
      mb={2}
    >
      {tech.map((val, idx) => {
        return <Chip label={val} key={idx} />;
      })}
    </Stack>
  );
}

// const internalUrlRegex = new RegExp('^(https://)?(www.)?nlarkin.dev.*$');
// function isInternalLink(href: string) {
//   return internalUrlRegex.test(href);
// }

const Project = ({ projectData }: { projectData: ProjectData }) => {
  const {
    title,
    // imageSrc,
    imageAlt,
    technologies,
    contentHtml,
    github,
    extraButtonHrefs,
    extraButtonText,
    description,
    imageProps,
  } = projectData;

  console.log(JSON.stringify(imageProps, null, 2));

  return (
    <Container maxWidth="sm">
      <NextSeo {...{ title, description }} />
      <Paper>
        <Box
          sx={{
            height: '345px',
            position: 'relative',
          }}
        >
          <Image
            // src={imageSrc}
            {...imageProps}
            placeholder="blur"
            alt={imageAlt}
            // layout="fill"
            // objectFit="cover"
            fill={true}
            className={style.image}
          />
        </Box>
        <Box sx={{ p: { xs: 2, sm: 3 } }}>
          <Typography
            gutterBottom
            variant="h4"
            component="h1"
            sx={{ mb: 3 }}
            textAlign={'center'}
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            fontWeight={400}
            textAlign={'center'}
          >
            {'Tech Stack & Concepts'}
          </Typography>
          <TechnologyList tech={technologies} />
          <Divider variant="middle" />
          <Typography variant="h6" component="h3" sx={{ mt: '0.35em' }}>
            Description
          </Typography>
          <Typography variant="body1">
            <div
              dangerouslySetInnerHTML={{ __html: contentHtml }}
              className={style.list}
            />
          </Typography>
        </Box>
      </Paper>
      <Stack
        direction="row"
        spacing={2}
        justifyContent={'center'}
        mt={4}
        // sx={{ backgroundColor: (theme) => theme.palette.primary.main }}
      >
        {github && (
          <ProjectButton
            href={github}
            text={'Github'}
            variant={extraButtonText.length === 0 ? 'contained' : 'outlined'}
          />
        )}
        {extraButtonHrefs.map((href, idx) => {
          return (
            <ProjectButton
              href={href}
              text={extraButtonText[idx]}
              key={href}
              variant="contained"
            />
          );
        })}
      </Stack>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllProjectIds(),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectData = await getProjectData(params?.id as string);

  if (
    projectData.extraButtonHrefs.length !== projectData.extraButtonText.length
  ) {
    throw new Error(
      `Extra button lists to not have the same length for ${projectData.title}`
    );
  }
  return {
    props: {
      projectData,
    },
  };
};

export default Project;

Project.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
