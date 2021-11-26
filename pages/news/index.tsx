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
  const grid3 = Array.from(carouselColumn);
  const grid4 = carouselColumn;

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

  // const transformedArticles = await Promise.all(
  //   query.hero.articles.sideArticles.map(async (src) => {
  //     const image = await convertImage(src);
  //     const transformed = {
  //       ...src,
  //       image,
  //     };
  //     return transformed;
  //   })
  // );

  // console.log(`carouselColumn: ${JSON.stringify(carouselColumn)}`);
  // console.log(`carouselRow: ${JSON.stringify(carouselRow)}`);
  return {
    props: {
      data: { ...query, carouselColumn, carouselRow, grid3, grid4 },
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
    grid3,
    // grid4,
  } = data;
  console.log(`carouselColumn: ${JSON.stringify(carouselColumn, null, 2)}`);
  console.log(
    '========================================================================'
  );
  console.log(`grid3: ${JSON.stringify(grid3, null, 2)}`);

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
            bodyArticles={grid3}
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
