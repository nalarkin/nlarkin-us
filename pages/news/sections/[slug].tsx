import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

import NewsLayout from 'components/layouts/NewsLayout';
import SectionHero from 'components/sections/cards/SectionHero';
import LatestList from 'components/sections/latest/LatestList';
import { convertImage } from 'components/shared/convertImage';
import LargeArticleCard from 'components/tiles/LargeCard';
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
  const { title, articles, slug } = await getClient(
    preview
  ).fetch<SectionArticleProps>(sectionArticlesQuery, queryParams);
  const transformedArticles = await Promise.all(
    articles.map(async (src) => {
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
      data: {
        articles: transformedArticles,
        title,
        slug,
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

const NewsCategoryMain = ({
  data,
}: {
  data: SectionArticlesResponse | undefined;
}) => {
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
          {articles.length === 0
            ? handleNoArticles()
            : articles.map((article) => {
                return (
                  // <div className='flex flex-row flex-wrap  ' key={article._id}>
                  <LargeArticleCard article={article} key={article._id} />
                  // </div>
                );
              })}
        </div>
        <LatestList articles={articles} />
      </div>
    </NewsLayout>
  );
};

export default NewsCategoryMain;
