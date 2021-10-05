import React, { ReactNode } from 'react';

import { NextSeo } from 'next-seo';

import Footer from '../footers/footer';
import SmallFooter from '../footers/SmallFooter';
import MainNewsHeader from '../headers/MainNewsHeader';
import { SEOProps } from '../shared/seo';
import style from './newsLayout.module.css';

type Props = {
  seo: SEOProps;
  children?: ReactNode;
};

const NewsLayout = ({ seo, children }: Props) => {
  return (
    <div className={style.wrapper}>
      {/* SEO */}
      {/* <SEO description={seo.description} title={seo.title} /> */}
      <NextSeo {...seo} />
      <MainNewsHeader />
      {children}
      <Footer />
      <SmallFooter />
    </div>
  );
};

export default NewsLayout;
