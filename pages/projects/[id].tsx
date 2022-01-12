import React from 'react';

import {
  Box,
  Button,
  ButtonProps,
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

// const internalUrlRegex = new RegExp('^(https://)?(www.)?nlarkin.us.*$');
// function isInternalLink(href: string) {
//   return internalUrlRegex.test(href);
// }

function BuildButton({
  href,
  text,
  variant,
}: {
  href: string;
  text: string;
  variant: ButtonProps['variant'];
}) {
  return (
    <Button
      color="primary"
      href={href}
      target="_blank"
      rel="noopener"
      variant={variant}
    >
      {text}
    </Button>
  );
}

const Project = ({ projectData }: { projectData: ProjectData }) => {
  const {
    title,
    imageSrc,
    imageAlt,
    technologies,
    contentHtml,
    github,
    extraButtonHrefs,
    extraButtonText,
    description,
  } = projectData;
  return (
    <>
      <NextSeo {...{ title, description }} />

      <Container maxWidth="sm">
        <Paper>
          <Box sx={{ height: '100px', position: 'relative' }}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              layout="fill"
              objectFit="contain"
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
        <Stack direction="row" spacing={2} justifyContent={'center'} mt={4}>
          {github && (
            <BuildButton
              href={github}
              text={'Github'}
              variant={extraButtonText.length === 0 ? 'contained' : 'outlined'}
            />
          )}
          {extraButtonHrefs.map((href, idx) => {
            return (
              <BuildButton
                href={href}
                text={extraButtonText[idx]}
                key={href}
                variant="contained"
              />
            );
          })}
        </Stack>
      </Container>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectIds();
  return {
    paths,
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
