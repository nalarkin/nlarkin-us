import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Article } from '../../../interfaces';
import ArticleCard from '../../../components/body/ArticleCard';
import NewsLayout from '../../../components/layouts/newsLayout';
import { shuffle } from '../../../lib/utils';
import { getClient } from '../../../lib/sanity.server';
import {
  sectionSlugsQuery,
  sectionArticlesQuery,
  SectionArticlesResponse,
} from '../../../lib/queries';
import Disclaimer from '../../../components/disclaimer';

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const queryParams = { slug: params?.slug };
  const { title, articles } = await getClient(
    preview
  ).fetch<SectionArticlesResponse>(sectionArticlesQuery, queryParams);
  return {
    props: {
      data: {
        articles: articles,
        title: title,
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
  const { articles, title } = data;

  const handleNoArticles = () => {
    return (
      <div className='flex text-center mx-auto normal-case'>
        {`There are currently no articles in this cateogry "${title}"`}
      </div>
    );
  };

  return (
    <NewsLayout seo={{ title: '', description: 'all world news in 1 place' }}>
      <div className='flex flex-col mt-4 capitalize'>
        <div className='flex flex-row flex-wrap '>
          {articles.length === 0
            ? handleNoArticles()
            : articles.map((article) => {
                return (
                  <div className='flex flex-row flex-wrap ' key={article._id}>
                    <ArticleCard
                      description={article.excerpt ?? ''}
                      image={article.image}
                      title={title}
                      slug={article.slug}
                      author={''}
                    />
                  </div>
                );
              })}
        </div>
        <Disclaimer />
      </div>
    </NewsLayout>
  );
};

export default NewsCategoryMain;
