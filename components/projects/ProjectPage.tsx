import React from 'react';

import { ProjectSummary } from 'lib/projectInfo';

import styles from './ProjectPage.module.scss';

interface ProjectPageProps {
  project: ProjectSummary;
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

const ProjectPage = ({ project, children = null }: ProjectPageProps) => {
  const { title, image, bullets, technologies } = project;
  // const [buttonText, isDisabled] = getButtonTextFromLink(href);
  return (
    <main className={styles.mainContainer}>
      <h1 className={styles.title}>{`${title} Project`}</h1>
      <div className={styles.image}>{image}</div>
      <div className={styles.technology}>
        <h2 className={styles.technologyTitle}>Technologies and Concepts</h2>
        <div className={styles.technologyText}>{technologies}</div>
      </div>
      <BuildList values={bullets} />
      {/* <div className="w-max mx-auto">
        <LinkWrapper href={href} classStyle={styles.buttonFocusWrapper}>
          <div
            className={`${styles.primaryButton} ${
              isDisabled ? styles.disabledButton : ''
            }`}
          >
            {buttonText}
          </div>
        </LinkWrapper>
      </div> */}
      <div className="mx-auto flex flex-col gap-4 justify-center">
        {children}
      </div>
    </main>
  );
};

export default ProjectPage;
