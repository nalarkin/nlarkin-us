/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable unused-imports/no-unused-vars */
import React from 'react';

import { academicAdvisorSummary } from 'components/projects/AcademicAdvisorImage';
import { courseRegistrationSummary } from 'components/projects/CourseRegistrationImage';
import { inventoryManagementSummary } from 'components/projects/InventoryManagementImage';
import { newYorkTimesSummary } from 'components/projects/NewYorkTimesImage';
import { storyGenSummary } from 'components/projects/StoryGenImage';
import { LinkWrapper } from 'components/shared/LinkWrapper';
import { ProjectSummary } from 'lib/projectInfo';
import { getButtonTextFromLink } from 'lib/utils';

import Layout from '../components/layouts/layout';
import style from './index.module.scss';

interface BuildListProps {
  values: string[];
}
export const BuildList = ({ values }: BuildListProps) => {
  return (
    <ul className={style.bodyList}>
      {values.map((content, idx) => {
        return (
          <li key={idx} className={style.list}>
            {content}
          </li>
        );
      })}
    </ul>
  );
};

interface ProjectTileProps {
  project: ProjectSummary;
}

const ProjectTile = ({ project }: ProjectTileProps) => {
  const { title, href, bullets, image, slug } = project;
  const [buttonText, isDisabled] = getButtonTextFromLink(href);
  return (
    <section className={style.tileContainer}>
      <div className={style.card}>
        {/* <h4 className={style.subtitle}>{subtitle}</h4> */}
        <h3 className={style.tileHeader}>{title}</h3>
        <div>
          <div className="flex w-full h-full px-10"> {image}</div>
        </div>
        <div className={style.body}>
          <BuildList values={bullets} />
        </div>
      </div>
      <div className="flex justify-evenly">
        <LinkWrapper href={`/projects/${slug}`}>
          <div className={style.learnMoreButton}>Learn More</div>
        </LinkWrapper>
        <LinkWrapper href={href}>
          <div
            className={`${style.tileButton} ${
              isDisabled && style.disabledButton
            }`}
          >
            {buttonText}
          </div>
        </LinkWrapper>
      </div>
    </section>
  );
};

const HomeSEO = {
  description: "Welcome to Nathan Larkin's Personal Website.",
  title: 'Home',
};

const HomeContents = () => {
  return (
    <div>
      <h2 className={style.welcomeMessage}>Personal Projects</h2>
      <div className={style.cards}>
        <ProjectTile project={inventoryManagementSummary} />
        <ProjectTile project={newYorkTimesSummary} />
        <ProjectTile project={storyGenSummary} />
        <ProjectTile project={courseRegistrationSummary} />
        <ProjectTile project={academicAdvisorSummary} />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <Layout seo={HomeSEO}>
      <HomeContents />
    </Layout>
  );
};

export default Home;
