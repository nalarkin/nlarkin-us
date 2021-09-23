import React, { ReactNode } from 'react';
import SEO, { SEOProps } from '../seo';
import style from './newsLayout.module.css';
import Link from 'next/link';
import NewsHeader from '../headers/newsHeader';
import Footer from '../footers/footer';

type Props = {
  seo: SEOProps;
  children?: ReactNode;
};

const NewsLayout = ({ seo, children }: Props) => {
  return (
    <div className={style.wrapper}>
      {/* SEO */}
      <SEO description={seo.description} title={seo.title} />
      <NewsHeader />
      {children}
      <Footer />
    </div>
  );
};

export default NewsLayout;
