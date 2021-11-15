import React from 'react';

import Layout from 'components/layouts/layout';
import { LinkWrapper } from 'components/shared/LinkWrapper';
import { SEOProps } from 'components/shared/seo';
import { ProjectSummary } from 'lib/projectInfo';
import { getButtonTextFromLink } from 'lib/utils';

import styles from './ProjectPage.module.scss';

interface ProjectPageProps {
  project: ProjectSummary;
  seo: SEOProps;
  whiteBackground?: boolean;
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

const ProjectPage = ({ project, seo, children = null }: ProjectPageProps) => {
  const { title, image, bullets, href } = project;
  const [buttonText] = getButtonTextFromLink(href);
  return (
    <Layout seo={seo}>
      <main className={styles.mainContainer}>
        <h1 className={styles.title}>{`${title} Project`}</h1>
        <div className={styles.image}>{image}</div>
        <BuildList values={bullets} />
        <LinkWrapper href={href}>
          <div className={styles.primaryButton}>{buttonText}</div>
        </LinkWrapper>
        {children}
      </main>
    </Layout>
  );
};

export default ProjectPage;
