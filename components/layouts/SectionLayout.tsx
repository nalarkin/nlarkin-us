import React, { ReactNode } from 'react';

import { NextSeo } from 'next-seo';

import MinimalHeader from 'components/headers/MinimalHeader';

import Footer from '../footers/footer';
import SmallFooter from '../footers/SmallFooter';
import { SEOProps } from '../shared/seo';
import style from './SectionLayout.module.scss';

type Props = {
  seo: SEOProps;
  sectionTitle?: string;
  slug?: string;
  children?: ReactNode;
};

const SectionLayout = ({ seo, sectionTitle, slug, children }: Props) => {
  return (
    <>
      {' '}
      <NextSeo {...seo} />
      <MinimalHeader sectionTitle={sectionTitle} slug={slug} />
      <div className={style.wrapper}>
        {/* SEO */}
        {/* <SEO description={seo.description} title={seo.title} /> */}

        {children}
        <Footer />
        <SmallFooter />
      </div>
    </>
  );
};

export default SectionLayout;
