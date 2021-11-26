import React from 'react';

import { GetStaticProps } from 'next';

import OpinionBody from 'components/body/OpinionBody';
import Footer from 'components/footers/footer';
import SmallFooter from 'components/footers/SmallFooter';
import MainNewsHeader from 'components/headers/MainNewsHeader';
import MainHero from 'components/sections/cards/MainHero';
import { convertImage } from 'components/shared/convertImage';
import Carousel from 'components/tiles/Carousel';
import { HomeQuery, HomeProps, ArticleDetailedImage } from 'lib/interfaces';
import { homeQuery } from 'lib/queries';
import { getClient } from 'lib/sanity.server';
import { shuffle, shuffleCopy } from 'lib/utils';

import style from './index.module.scss';

// import NewsLayout from '../../components/layouts/NewsLayout3';

// const NewsSEO = {
//   description:
//     'This is a purely educational attempt to clone of the New York Times. Disclaimer....',
//   title: "Nathan's News",
// };
export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const query = await getClient(preview).fetch<HomeQuery>(homeQuery);
  query.hero.articles.main.image = await convertImage(
    query.hero.articles.main.image
  );
  const hero1 = {
    ...query.opinionBody.articles[2],
    image: await convertImage(query.opinionBody.articles[2].image),
  };

  const carouselColumn: ArticleDetailedImage[] = await Promise.all(
    query.opinionBody.articles.map(async (src) => {
      const image = await convertImage(src.image, { height: 200, width: 300 });
      const transformed = {
        ...src,
        image,
      };
      return transformed;
    })
  );
  shuffle(carouselColumn);
  const carouselRow: ArticleDetailedImage[] = await Promise.all(
    query.opinionBody.articles.map(async (src) => {
      const image = await convertImage(src.image, { height: 300, width: 300 });
      const transformed = {
        ...src,
        image,
      };
      return transformed;
    })
  );
  shuffle(carouselRow);

  // const row1 = Array.from(carouselColumn);
  const row1 = shuffleCopy(carouselColumn);
  const row2 = shuffleCopy(carouselColumn);

  // console.log(`hero1: ${JSON.stringify(hero1, null, 2)}`);

  query.opinionBody.articles = await Promise.all(
    query.opinionBody.articles.map(async (src) => {
      const image = await convertImage(src.image);
      const transformed = {
        ...src,
        image,
      };
      return transformed;
    })
  );
  return {
    props: {
      data: { ...query, carouselColumn, carouselRow, row1, row2, hero1 },
    },
  };
};

type Props = {
  data?: HomeProps;
};

const NewsHome = ({ data }: Props) => {
  if (data === undefined) {
    return <div></div>;
  }
  const {
    hero,
    opinionColumn,
    // opinionBody,
    carouselColumn,
    carouselRow,
    row1,
    hero1,
    // culture
    // grid4,
  } = data;

  // const size3 = opinionBody.articles.slice(0, 3);
  const size4 = carouselRow.slice(0, 4);
  const size5 = carouselColumn.slice(0, 5);
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
            bodyArticles={row1}
            centerArticle={hero1}
          />
          <Carousel
            articles={size4}
            tileLayout="row"
            categoryHeader="Staff Favorites"
          />
          <MainHero data={hero} />
          <Carousel articles={size5} categoryHeader="Dive Deeper" />
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
