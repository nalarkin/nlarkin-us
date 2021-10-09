import React, { ReactNode } from 'react';

import Footer from 'components/footers/footer';
import SmallFooter from 'components/footers/SmallFooter';
import MinimalHeader from 'components/headers/MinimalHeader';

import style from './NewsLayout.module.scss';

type Props = {
  children?: ReactNode;
};

const NewsLayout = ({ children }: Props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.pageHeader}>
        <MinimalHeader />
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
