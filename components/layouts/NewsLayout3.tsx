/* eslint-disable unused-imports/no-unused-vars */
import React from 'react';

import OpinionBody from 'components/body/OpinionBody';
import Footer from 'components/footers/footer';
import SmallFooter from 'components/footers/SmallFooter';
import MainNewsHeader from 'components/headers/MainNewsHeader';
import SectionHero from 'components/sections/cards/SectionHero';
import Carousel from 'components/tiles/Carousel';
import HeroTwoRows from 'components/tiles/HeroTwoRows';
import LargeArticleCard from 'components/tiles/LargeCard';
import { ArticleResultAll } from 'lib/queries';

import style from './NewsLayout3.module.scss';

type Props = {
  articles: ArticleResultAll;
  // children?: ReactNode;
};

const NewsLayout = ({ articles }: Props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.pageHeader}>
        <MainNewsHeader />
      </div>
      <div className={style.pageBody}>
        <div className={style.bodyContainer}>
          <SectionHero articles={articles.slice(0, 5)} />
          <OpinionBody opinionArticles={articles}>
            <Carousel articles={articles.slice(0, 3)} />
            {/* <HeroTwoRows articles={articles.slice(0, 5)} /> */}
            <LargeArticleCard article={articles[3]} />
            <Carousel articles={articles.slice(0, 4)} />
          </OpinionBody>
          <Carousel articles={articles.slice(0, 4)} tileLayout="row" />
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

export default NewsLayout;
