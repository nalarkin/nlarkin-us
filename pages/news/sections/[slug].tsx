// @ts-nocheck
import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getSortedArticlesData } from '../../../lib/articles';
import { Article } from '../../../interfaces';
import ArticleCard from '../../../components/body/ArticleCard';
import NewsLayout from '../../../components/layouts/newsLayout';
import { shuffle } from '../../../lib/utils';
import { getAllSectionsIds } from '../../../lib/sections';
import { getClient } from '../../../lib/sanity.server';
import { sectionSlugsQuery, sectionArticlesQuery } from '../../../lib/queries';
import Disclaimer from '../../../components/disclaimer';

type Props = {
  data: Article[] | null;
  error: string;
  section: string;
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const queryParams = { slug: params?.slug };
  const { title, articles } = await getClient(preview).fetch(
    sectionArticlesQuery,
    queryParams
  );
  return {
    props: {
      preview,
      data: {
        articles: articles,
        title: title,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // const paths = await sanityClient.fetch(articleSlugsQuery);
  const paths = await getClient(false).fetch(sectionSlugsQuery);
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
};

const NewsCategoryMain = ({ data, preview }: Props) => {
  // if (data) {
  //   shuffle(data);
  // }
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
        {/* <h1 className='font-bold text-5xl'>{section}</h1> */}
        <div className='flex flex-row flex-wrap '>
          {articles.length === 0
            ? handleNoArticles()
            : articles.map((article) => {
                return (
                  <div className='flex flex-row flex-wrap ' key={article._id}>
                    <ArticleCard
                      description={article.excerpt}
                      image={article.image}
                      title={title}
                      slug={article.slug}
                    />
                  </div>
                );
              })}
          {/*data?.map((article: Article) => {
            return (
              <div className='' key={article.id}>
                <ArticleCard
                  author={article.authorId}
                  description={article.description}
                  imageId=''
                  title={article.title}
                  id={article.id}
                />
              </div>
            );
          })} */}
        </div>
        <Disclaimer />
      </div>
    </NewsLayout>
  );
};

export default NewsCategoryMain;
