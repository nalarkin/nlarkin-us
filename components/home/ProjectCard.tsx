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

import { NextLinkComposed } from 'components/mui/Link';
import { buildProjectSlug } from 'lib/utils';

// const MuiListItem = ({
//   primary,
//   secondary,
// }: {
//   primary: ReactNode;
//   secondary?: ReactNode;
// }) => {
//   return (
//     <ListItem>
//       <ListItemText primary={primary} secondary={secondary}></ListItemText>
//     </ListItem>
//   );
// };

// function BuildList({ bullets }: { bullets: string[] }) {
//   return (
//     <List>
//       <MuiListItem primary="Test" />
//       {/* <Divider /> */}
//       <MuiListItem primary="Email" secondary="etisnriters" />
//     </List>
//   );
// }
function BuildList({ bullets }: { bullets: string[] }) {
  return (
    <>
      {bullets.map((val, idx) => {
        return (
          <>
            {idx > 0 && <Divider sx={{ mb: '0.35em' }} />}
            <Typography
              variant="body2"
              color="text.secondary"
              gutterBottom
              key={idx}
            >
              {val}
            </Typography>
          </>
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
      src: StaticImageData;
      alt: string;
    };
  };
  children?: React.ReactNode;
}
export function ProjectCard({ project, children }: ProjectCardProps) {
  // const { title, href, bullets, image, slug, buttonText } = project;
  const { title, slug, bullets, image } = project;
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
        >
          <CardMedia sx={{ height: '100px', position: 'relative' }}>
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="contain"
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <BuildList bullets={bullets} />
          </CardContent>
        </CardActionArea>
        {/* <Stack justifyContent="flex-end" sx={{ flexGrow: 1 }}> */}
        <CardActions sx={{ mt: 'auto' }}>{children}</CardActions>
        {/* </Stack> */}
      </Card>
    </Grid>
  );
}

// export function ProjectCard({ project }: ProjectCardProps) {
//   const { title, href, bullets, image, slug, buttonText } = project;
// }
