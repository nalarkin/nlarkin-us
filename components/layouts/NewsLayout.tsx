import React, { ReactNode } from 'react';

import Footer from 'components/footers/footer';
import SmallFooter from 'components/footers/SmallFooter';
import MinimalHeader from 'components/headers/MinimalHeader';

import style from './NewsLayout.module.scss';

type Props = {
  title?: string;
  slug?: string;
  children?: ReactNode;
};

const NewsLayout = ({ title, slug, children }: Props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.pageHeader}>
        <MinimalHeader sectionTitle={title} slug={slug} />
      </div>
      <div className={style.pageBody}>
        <div className={style.bodyContainer}>{children}</div>
      </div>
      <div className={style.pageFooter}>
        <Footer />
        <SmallFooter />
      </div>
    </div>
  );
};

export default NewsLayout;
