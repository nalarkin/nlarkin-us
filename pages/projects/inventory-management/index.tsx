import React from 'react';

import { NextSeo } from 'next-seo';

import Layout from 'components/layouts/layout';
import { inventoryManagementSummary } from 'components/projects/InventoryManagementImage';
import ProjectPage from 'components/projects/ProjectPage';
import { LinkWrapper } from 'components/shared/LinkWrapper';
import { SEOProps } from 'components/shared/seo';
import { inventoryBullets } from 'lib/projectInfo';

import style from '../buttons.module.scss';

const seo: SEOProps = {
  title: inventoryManagementSummary.title,
  description:
    'A full-stack inventory management application for 30+ GSU graduate researchers.',
};

const longerInventorySummary = {
  ...inventoryManagementSummary,
  bullets: inventoryBullets,
};

const InventoryMagagementPage = () => {
  return (
    <>
      <NextSeo {...seo} />
      <ProjectPage project={longerInventorySummary}>
        <div className="w-max mx-auto">
          <LinkWrapper
            href="https://github.com/nalarkin/prisma-morse"
            classStyle={style.buttonFocusWrapperGithub}
          >
            <div className={style.githubButton}>
              See Created API
              {/* {getButtonTextFromLink('/news')} */}
            </div>
          </LinkWrapper>
        </div>{' '}
      </ProjectPage>
    </>
  );
};

export default InventoryMagagementPage;

InventoryMagagementPage.getLayout = function getLayout(
  page: React.ReactElement
) {
  return <Layout>{page}</Layout>;
};
