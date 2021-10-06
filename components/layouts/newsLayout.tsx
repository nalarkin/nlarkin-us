/* eslint-disable unused-imports/no-unused-vars */
import React from 'react';

import Footer from 'components/footers/footer';
import SmallFooter from 'components/footers/SmallFooter';
import MainNewsHeader from 'components/headers/MainNewsHeader';
import Carousel from 'components/tiles/Carousel';
import HeroTwoRows from 'components/tiles/HeroTwoRows';
import { ArticleResultAll } from 'lib/queries';

import style from './NewsLayout.module.scss';

type Props = {
  articles: ArticleResultAll;
  // children?: ReactNode;
};

export const NewsLayout = ({ articles }: Props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.pageHeader}>
        <MainNewsHeader />
      </div>
      <div className={style.pageBody}>
        <div className={style.bodyContainer}>
          <Carousel articles={articles.slice(0, 4)} />
          <HeroTwoRows articles={articles.slice(0, 5)} />
          <Carousel articles={articles.slice(0, 4)} />
        </div>
      </div>
      <div className={style.pageFooter}>
        <Footer />
        <SmallFooter />
      </div>
    </div>
  );
};
