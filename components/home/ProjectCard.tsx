import * as React from 'react';

import {
  CardActionArea,
  CardActions,
  CardMedia,
  Divider,
  Grid,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import { ProjectButton } from 'components/home/ProjectButton';
import { NextLinkComposed } from 'components/mui/Link';
import type { PlaiceholderImageProps } from 'lib/projects';
import { buildProjectSlug } from 'lib/utils';

function BuildList({ bullets }: { bullets: string[] }) {
  return (
    <>
      {bullets.map((content, idx) => {
        return (
          <React.Fragment key={idx}>
            {idx > 0 && <Divider sx={{ mb: '0.35em' }} />}
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {content}
            </Typography>
          </React.Fragment>
        );
      })}
    </>
  );
}

export interface ProjectCardProps {
  project: {
    title: string;
    slug: string;
    bullets: string[];
    image: {
      src: string;
      alt: string;
    };
    extraButtonHrefs: string[];
    extraButtonText: string[];
    github: string;
    imageProps: PlaiceholderImageProps;
    dataTest: string;
  };
  children?: React.ReactNode;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const {
    title,
    slug,
    bullets,
    image,
    extraButtonHrefs,
    extraButtonText,
    github,
    imageProps,
    dataTest,
  } = project;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          maxWidth: '500px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardActionArea
          component={NextLinkComposed}
          to={{ pathname: buildProjectSlug(slug) }}
          sx={{ flexGrow: 0 }}
          data-test={dataTest}
        >
          <CardMedia sx={{ height: '200px', position: 'relative' }}>
            <Image
              {...imageProps}
              placeholder="blur"
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              // set gsu inventory application to be a priority load to improve largest contentful paint
              priority={
                title.toLowerCase().includes('inventory') ? true : undefined
              }
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <BuildList bullets={bullets} />
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ mt: 'auto' }} data-test={`card-footer-${dataTest}`}>
          {github && (
            <ProjectButton href={github} text={'Github'} variant={'text'} />
          )}
          {extraButtonHrefs.map((href, idx) => (
            <ProjectButton
              href={href}
              text={extraButtonText[idx]}
              key={href}
              variant="text"
            />
          ))}
        </CardActions>
        {/* </Stack> */}
      </Card>
    </Grid>
  );
}
