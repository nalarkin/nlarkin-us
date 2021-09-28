import React, { ReactNode } from 'react';
import SEO, { SEOProps } from '../seo';
import style from './newsLayout.module.css';
import Link from 'next/link';
import NewsHeader from '../headers/newsHeader';
import Footer from '../footers/footer';
import { NextSeo } from 'next-seo';
import SmallFooter from '../footers/SmallFooter';

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
      <NewsHeader />
      {children}
      <Footer />
      <SmallFooter />
    </div>
  );
};

export default NewsLayout;
