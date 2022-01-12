import React from 'react';

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';

import { ProjectCardProps } from 'components/home/ProjectCard';

import styles from './ProjectPage.module.scss';

interface ProjectPageProps {
  project: ProjectCardProps & {
    technologies: string[];
  };
  children?: React.ReactNode;
}

interface BuildListProps {
  values: string[];
}
export const BuildList = ({ values }: BuildListProps) => {
  return (
    <ul className={styles.bodyList}>
      {values.map((content, idx) => {
        return (
          <li key={idx} className={styles.list}>
            {content}
          </li>
        );
      })}
    </ul>
  );
};

// const ProjectPage = ({ project, children = null }: ProjectPageProps) => {
//   const { title, image, bullets, technologies } = project;
//   // const [buttonText, isDisabled] = getButtonTextFromLink(href);
//   return (
//     <main className={styles.mainContainer}>
//       <h1 className={styles.title}>{`${title} Project`}</h1>
//       <div className={styles.image}>{image}</div>
//       <div className={styles.technology}>
//         <h2 className={styles.technologyTitle}>Technologies and Concepts</h2>
//         <div className={styles.technologyText}>{technologies}</div>
//       </div>
//       <BuildList values={bullets} />
//       {/* <div className="w-max mx-auto">
//         <LinkWrapper href={href} classStyle={styles.buttonFocusWrapper}>
//           <div
//             className={`${styles.primaryButton} ${
//               isDisabled ? styles.disabledButton : ''
//             }`}
//           >
//             {buttonText}
//           </div>
//         </LinkWrapper>
//       </div> */}
//       <div className="mx-auto flex flex-col gap-4 justify-center">
//         {children}
//       </div>
//     </main>
//   );
// };
const ProjectPage = ({ project, children }: ProjectPageProps) => {
  const { title, image, bullets, technologies } = project;
  // const [buttonText, isDisabled] = getButtonTextFromLink(href);
  return (
    <Container maxWidth="sm">
      <Card>
        <CardMedia>
          {/* <Image src={image} alt={''} layout="fill" objectFit="contain" /> */}
          {image}
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <BuildList values={bullets} />
        </CardContent>
        {/* <Stack justifyContent="flex-end" sx={{ flexGrow: 1 }}> */}
        <CardActions sx={{ mt: 'auto' }}>{children}</CardActions>
        {/* </Stack> */}
      </Card>
    </Container>
  );
};
// const ProjectPage = ({ project, children }: ProjectPageProps) => {
//   const { title, image, bullets, technologies } = project;
//   // const [buttonText, isDisabled] = getButtonTextFromLink(href);
//   return (
//     <Container maxWidth="sm">
//       <div className={styles.image}>{image}</div>
//       <Paper sx={{ p: { xs: 2, sm: 3 } }}>
//         <Typography
//           variant="h3"
//           component="h1"
//         >{`${title} Project`}</Typography>
//         <div className={styles.technology}>
//           <Typography variant="h5" component="h2">
//             Technologies and Concepts
//           </Typography>
//           <div className={styles.technologyText}>{technologies}</div>
//         </div>
//         <BuildList values={bullets} />
//         <div className="mx-auto flex flex-col gap-4 justify-center">
//           {children}
//         </div>
//       </Paper>
//     </Container>
//   );
// };

export default ProjectPage;
