import React, { ReactNode } from 'react';

import Footer from '../footers/footer';
import SmallFooter from '../footers/SmallFooter';
import { SEOProps } from '../shared/seo';
import style from './SectionLayout.module.scss';

type Props = {
  seo?: SEOProps;
  sectionTitle?: string;
  slug?: string;
  children?: ReactNode;
};

const SectionLayout = ({ children }: Props) => {
  return (
    <>
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
