import React from 'react';

import { GetStaticProps } from 'next';

import OpinionBody from 'components/body/OpinionBody';
import Footer from 'components/footers/footer';
import SmallFooter from 'components/footers/SmallFooter';
import MainNewsHeader from 'components/headers/MainNewsHeader';
import MainHero from 'components/sections/cards/MainHero';
import { convertImage } from 'components/shared/convertImage';
import Carousel from 'components/tiles/Carousel';
import { HomeProps, HomeCategory } from 'lib/interfaces';
import { homeQuery } from 'lib/queries';
import { getClient } from 'lib/sanity.server';

import style from './index.module.scss';

async function convertCategoryToBlurImages(category: HomeCategory) {
  console.log(
    `Making BLUR IMAGE for category withinfo.... ${JSON.stringify(
      category.uid,
      null,
      2
    )}`
  );
  switch (category.uid) {
    case 'diveDeeper':
    case 'latestNews':
    case 'popularArticles':
    case 'staffFavorites': {
      return {
        ...category,
        articles: await Promise.all(
          category.articles.map(async (article) => {
            return {
              ...article,
              image: await convertImage(article.image, {
                height: 200,
                width: 300,
              }),
            };
          })
        ),
      };
    }
    case 'Hero':
    case 'secondHeroTile': {
      const sideArticles = await Promise.all(
        category.articles.sideArticles.map(async (article) => {
          return {
            ...article,
            image: await convertImage(article.image),
          };
        })
      );
      const main = {
        ...category.articles.main,
        image: await convertImage(category.articles.main.image),
      };
      // const result = { ...articles, main, sideArticles };
      return { ...category, articles: { sideArticles, main } };
    }
    case 'MidHero': {
      return {
        ...category,
        articles: {
          ...category.articles,
          image: await convertImage(category.articles.image),
        },
      };
    }
    case 'Opinion Column':
      return {
        ...category,
      };

    default:
      throw new Error('This should never happen');
  }
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const query = await getClient(preview).fetch<HomeProps>(homeQuery);
  const diveDeeper = await convertCategoryToBlurImages(query.diveDeeper);
  const hero = await convertCategoryToBlurImages(query.hero);
  const latestNews = await convertCategoryToBlurImages(query.latestNews);
  const midHero = await convertCategoryToBlurImages(query.midHero);
  const opinionColumn = await convertCategoryToBlurImages(query.opinionColumn);
  const popularArticles = await convertCategoryToBlurImages(
    query.popularArticles
  );
  const secondHeroTile = await convertCategoryToBlurImages(
    query.secondHeroTile
  );
  const staffFavorites = await convertCategoryToBlurImages(
    query.staffFavorites
  );
  return {
    props: {
      data: {
        diveDeeper,
        hero,
        latestNews,
        midHero,
        opinionColumn,
        popularArticles,
        secondHeroTile,
        staffFavorites,
      },
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
    diveDeeper,
    hero,
    latestNews,
    midHero,
    opinionColumn,
    popularArticles,
    secondHeroTile,
    staffFavorites,
  } = data;

  return (
    <div className={style.wrapper}>
      <div className={style.pageHeader}>
        <MainNewsHeader />
      </div>
      <div className={style.pageBody}>
        <div className={style.bodyContainer}>
          <MainHero data={hero} />
          <OpinionBody
            opinionColumn={opinionColumn.articles}
            latestNews={latestNews.articles}
            popular={popularArticles.articles}
            centerArticle={midHero.articles}
          />

          <Carousel
            articles={staffFavorites.articles}
            tileLayout="row"
            categoryHeader={staffFavorites.title}
          />

          <MainHero data={secondHeroTile} />

          <Carousel
            articles={diveDeeper.articles}
            categoryHeader={diveDeeper.title}
          />
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
