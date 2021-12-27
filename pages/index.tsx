/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable unused-imports/no-unused-vars */
import React from 'react';

import { academicAdvisorSummary } from 'components/projects/AcademicAdvisorImage';
import { courseRegistrationSummary } from 'components/projects/CourseRegistrationImage';
import { inventoryManagementSummary } from 'components/projects/InventoryManagementImage';
import { newYorkTimesSummary } from 'components/projects/NewYorkTimesImage';
import { storyGenSummary } from 'components/projects/StoryGenImage';
import { LinkWrapper } from 'components/shared/LinkWrapper';
import SEO from 'components/shared/seo';
import { ProjectSummary } from 'lib/projectInfo';

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
  const { title, href, bullets, image, slug, buttonText } = project;
  // const [buttonText, isDisabled] = getButtonTextFromLink(href);
  const isDisabled = false; // keeping this here in case I want to uncomment line above this
  return (
    <section className={style.tileContainer}>
      <div className={style.card}>
        <h3 className={style.tileHeader}>{title}</h3>
        <div>
          <div className="flex w-full h-full px-10"> {image}</div>
        </div>
        <div className={style.body}>
          <BuildList values={bullets} />
        </div>
      </div>
      <div className="flex  justify-evenly flex-wrap gap-2 px-2">
        <LinkWrapper
          href={`/projects/${slug}`}
          classStyle={style.linkWrapperLearn}
        >
          <div className={style.learnMoreButton}>Learn More</div>
        </LinkWrapper>
        <LinkWrapper href={href} classStyle={style.linkWrapperGithub}>
          <div
            className={`${style.tileButton} ${
              isDisabled && style.disabledButton
            } ${!isDisabled && style.enabledButton}`}
          >
            <div
              className={`${
                buttonText.includes('API') ? style.smallerText : ''
              }`}
            >
              {buttonText}
            </div>
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
      <h1 className={style.welcomeMessage}>Personal Projects</h1>
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
    <>
      <SEO description={HomeSEO.description} title={HomeSEO.title} />{' '}
      <HomeContents />
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
