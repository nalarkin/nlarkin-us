import React from 'react';

import { GetStaticProps } from 'next';

import OpinionBody from 'components/body/OpinionBody';
import Footer from 'components/footers/footer';
import SmallFooter from 'components/footers/SmallFooter';
import MainNewsHeader from 'components/headers/MainNewsHeader';
import MainHero from 'components/sections/cards/MainHero';
import Carousel from 'components/tiles/Carousel';
import { HomeQuery } from 'lib/interfaces';
import { homeQuery } from 'lib/queries';
import { getClient } from 'lib/sanity.server';

import style from './index.module.scss';

// import NewsLayout from '../../components/layouts/NewsLayout3';

// const NewsSEO = {
//   description:
//     'This is a purely educational attempt to clone of the New York Times. Disclaimer....',
//   title: "Nathan's News",
// };

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const query = await getClient(preview).fetch<HomeQuery>(homeQuery);
  return {
    props: {
      data: query,
    },
  };
};

type Props = {
  data?: HomeQuery;
};

const NewsHome = ({ data }: Props) => {
  if (data === undefined) {
    return <div></div>;
  }
  const { hero, opinionColumn, opinionBody } = data;
  // const size3 = opinionBody.articles.slice(0, 3);
  const size4 = opinionBody.articles.slice(0, 4);
  const size5 = opinionBody.articles.slice(0, 5);
  return (
    <div className={style.wrapper}>
      <div className={style.pageHeader}>
        <MainNewsHeader />
      </div>
      <div className={style.pageBody}>
        <div className={style.bodyContainer}>
          <MainHero data={hero} />
          <OpinionBody
            columnArticles={opinionColumn.articles}
            bodyArticles={opinionBody.articles}
          />
          <Carousel articles={size4} tileLayout="row" />
          <MainHero data={hero} />
          <Carousel articles={size5} />
        </div>
      </div>
      <div className={style.pageFooter}>
        <Footer />
        <SmallFooter />
      </div>
    </div>
  );
};

export default NewsHome;
