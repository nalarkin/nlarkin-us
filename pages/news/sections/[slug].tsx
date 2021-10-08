import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import Disclaimer from 'components/disclaimer/disclaimer';
import SectionLayout from 'components/layouts/SectionLayout';
import SectionHero from 'components/sections/cards/SectionHero';
import LatestList from 'components/sections/latest/LatestList';
import LargeArticleCard from 'components/tiles/LargeCard';
import {
  sectionSlugsQuery,
  sectionArticlesQuery,
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
  ).fetch<SectionArticlesResponse>(sectionArticlesQuery, queryParams);
  return {
    props: {
      data: {
        articles,
        title,
        slug,
      },
      // data:  {
      //   articles: articles,
      //   title: title,
      // },
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
  // if (data) {
  //   shuffle(data);
  // }
  if (data === undefined) {
    return <div></div>;
  }
  // console.log(`data: ${JSON.stringify(data)}`);
  const { articles, title, slug } = data;

  const handleNoArticles = () => {
    return (
      <div className="flex text-center mx-auto normal-case">
        {`There are currently no articles in this cateogry "${title}"`}
      </div>
    );
  };

  return (
    <SectionLayout
      seo={{ title: '', description: 'all world news in 1 place' }}
      sectionTitle={title}
      slug={slug}
    >
      <div className="flex flex-col pt-7">
        {/* <div className='text-3xl font-bold'> {title}</div> */}
        <SectionHero articles={articles} />
        <div className={style.body}>
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
        <Disclaimer />
      </div>
    </SectionLayout>
  );
};

export default NewsCategoryMain;
