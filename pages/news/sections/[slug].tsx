import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

import NewsLayout from 'components/layouts/NewsLayout';
import SectionHero from 'components/sections/cards/SectionHero';
import LatestList from 'components/sections/latest/LatestList';
import { convertImage } from 'components/shared/convertImage';
import Carousel from 'components/tiles/Carousel';
import LargeArticleCard from 'components/tiles/LargeCard';
import { ArticleDetailedImageAuthors } from 'lib/interfaces';
import {
  sectionSlugsQuery,
  sectionArticlesQuery,
  SectionArticleProps,
  SectionArticlesResponse,
} from 'lib/queries';
import { getClient } from 'lib/sanity.server';

import style from './[slug].module.scss';

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const queryParams = { slug: params?.slug };
  const query = await getClient(preview).fetch<SectionArticleProps>(
    sectionArticlesQuery,
    queryParams
  );

  const transformedArticles = await Promise.all(
    query.articles.map(async (article) => {
      return {
        ...article,
        image: await convertImage(article.image),
      };
    })
  );

  return {
    props: {
      data: {
        ...query,
        articles: transformedArticles,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // const paths = await sanityClient.fetch(articleSlugsQuery);
  const paths = await getClient(false).fetch(sectionSlugsQuery);
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: false,
  };
};

function getCarouselArticles(articles: ArticleDetailedImageAuthors[]) {
  switch (articles.length) {
    case 1:
      throw new Error(
        'Carousel format breaks when there is 1 item on carousel'
      );
    case 2:
      return [...articles];
    default:
      return articles.slice(1, 5);
  }
}

const SectionBody = ({
  articles,
  section,
}: {
  articles: ArticleDetailedImageAuthors[];
  section: string;
}) => {
  // const carouselA = articles.slice(1, 5);
  const carouselA = getCarouselArticles(articles);
  const carouselB = articles.slice(0, 4);
  return (
    <>
      <Carousel
        articles={carouselA}
        categoryHeader={`${section} News Latest Stories`}
        tileLayout="row"
      />
      <LargeArticleCard article={articles[articles.length - 1]} />
      <Carousel
        articles={carouselB}
        categoryHeader={`${section} News Developing Stories`}
        tileLayout="column"
      />
      <Carousel
        articles={[...carouselB].reverse()}
        categoryHeader={`${section} News Opinion Pieces`}
        tileLayout="row"
      />
    </>
  );
};

const NewsCategoryMain = ({ data }: { data?: SectionArticlesResponse }) => {
  if (data === undefined) {
    return <div></div>;
  }
  const { articles, title, slug } = data;

  const handleNoArticles = () => {
    return (
      <div className="flex text-center mx-auto normal-case">
        {`There are currently no articles in this cateogry "${title}"`}
      </div>
    );
  };

  const seo = {
    title: `${title} News`,
    description: `All ${title} news in 1 place`,
  };

  return (
    <NewsLayout title={title} slug={slug}>
      <NextSeo {...seo} />
      {/* <MinimalHeader sectionTitle={title} slug={slug} /> */}
      <div className={style.heroContainer}>
        {/* <div className='text-3xl font-bold'> {title}</div> */}
        <SectionHero articles={articles} />
        <div className={``}>
          {articles.length === 0 ? (
            handleNoArticles()
          ) : (
            <SectionBody articles={articles} section={title} />
          )}
        </div>
        <LatestList articles={articles} />
      </div>
    </NewsLayout>
  );
};

export default NewsCategoryMain;
