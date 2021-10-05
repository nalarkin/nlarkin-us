import React, { ReactNode } from 'react';
import SEO, { SEOProps } from '../shared/seo';
import style from './SectionLayout.module.scss';
import Link from 'next/link';
import NewsHeader from '../headers/MainNewsHeader';
import Footer from '../footers/footer';
import { NextSeo } from 'next-seo';
import SmallFooter from '../footers/SmallFooter';
import MinimalHeader from 'components/headers/MinimalHeader';

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
