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
  const sectionArticles = await getClient(preview).fetch(
    sectionArticlesQuery,
    queryParams
  );

  return {
    props: {
      preview,
      data: {
        sectionArticles,
        slug: params?.slug,
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

  const handleNoArticles = () => {
    return (
      <div className='flex text-center mx-auto normal-case'>
        {`There are currently no articles in this cateogry "${data.slug}"`}
      </div>
    );
  };

  const { sectionArticles } = data;

  return (
    <NewsLayout seo={{ title: '', description: 'all world news in 1 place' }}>
      <div className='flex flex-col mt-4 capitalize'>
        {/* <h1 className='font-bold text-5xl'>{section}</h1> */}
        <div className='flex flex-row flex-wrap '>
          {sectionArticles.length === 0
            ? handleNoArticles()
            : sectionArticles.map((article) => {
                return (
                  <div className='flex flex-row flex-wrap ' key={article._id}>
                    <ArticleCard
                      description={article.excerpt}
                      imageId=''
                      title={article.title}
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
      </div>
    </NewsLayout>
  );
};

export default NewsCategoryMain;
