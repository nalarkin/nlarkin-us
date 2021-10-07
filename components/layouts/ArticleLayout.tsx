/* eslint-disable unused-imports/no-unused-vars */
import React, { ReactNode } from 'react';

import Footer from 'components/footers/footer';
import SmallFooter from 'components/footers/SmallFooter';
import MainNewsHeader from 'components/headers/MainNewsHeader';

import style from './NewsLayout3.module.scss';

type Props = {
  children?: ReactNode;
};

const ArticleLayout = ({ children }: Props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.pageHeader}>
        <MainNewsHeader />
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

export default ArticleLayout;
