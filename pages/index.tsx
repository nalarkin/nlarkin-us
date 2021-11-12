/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable unused-imports/no-unused-vars */
import React from 'react';

import Link from 'next/link';

import { allProjects, Project } from 'lib/projectInfo';

import Layout from '../components/layouts/layout';
import style from './index.module.scss';

interface BuildListProps {
  values: string[];
}
const BuildList = ({ values }: BuildListProps) => {
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

interface LinkWrapperProps {
  href: string;
  children: React.ReactNode;
}

/** Wraps the children with a link. Uses next link if the link destination
 * is within this domain, otherwise use a traditional <a> link */
const LinkWrapper = ({ href, children }: LinkWrapperProps) => {
  if (href.includes('https:')) {
    return (
      <a target="_blank" href={href} rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  if (href.length === 0) {
    return <>{children}</>;
  }
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};

interface ProjectTileProps {
  project: Project;
}

const ProjectTile = ({ project }: ProjectTileProps) => {
  const { title, href, bullets, subtitle, technologies } = project;
  let buttonText = 'See on GitHub';
  let isDisabled = false;
  if (href.length === 0) {
    buttonText = 'Private source code';
    isDisabled = true;
  } else if (!href.includes('https:')) {
    buttonText = 'See the Site';
  }
  return (
    <section className={style.tileContainer}>
      <div className={style.cardText}>
        <h3 className={style.tileHeader}>{title}</h3>
        {/* <h4 className={style.subtitle}>{subtitle}</h4> */}
        <h4 className={style.technologies}>{technologies}</h4>
        <div className={style.body}>
          <BuildList values={bullets} />
        </div>
      </div>
      <div className="flex mx-auto">
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
  description: "Welcome to Nathan Larkin's personal website.",
  title: 'Home',
};

const HomeContents = () => {
  return (
    <div>
      <h2 className={style.welcomeMessage}>Personal Projects</h2>
      <div className={style.homeContainer}>
        <div className={style.tileGroup}>
          <ProjectTile project={allProjects[0]} />
          <ProjectTile project={allProjects[3]} />
        </div>
        <div className={style.tileGroupMiddle}>
          <ProjectTile project={allProjects[4]} />
        </div>
        <div className={style.tileGroup}>
          <ProjectTile project={allProjects[2]} />

          <ProjectTile project={allProjects[1]} />
        </div>
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
