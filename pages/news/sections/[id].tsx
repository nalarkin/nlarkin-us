import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getSortedArticlesData } from '../../../lib/articles';
import { Article } from '../../../interfaces';
import ArticleCard from '../../../components/body/ArticleCard';
import NewsLayout from '../../../components/layouts/newsLayout';
import { shuffle } from '../../../lib/utils';
import { getAllSectionsIds } from '../../../lib/sections';

type Props = {
  data: Article[] | null;
  error: string;
  section: string;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const allPosts = getSortedArticlesData();
    return {
      props: {
        data: allPosts,
        error: '',
        section: params?.id || '',
      },
    };
  } catch (err) {
    return {
      props: { data: null, errors: 'an error occured.', section: 'Not Found' },
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllSectionsIds();
  return {
    paths,
    fallback: false,
  };
};

const NewsCategoryMain = ({ data, section }: Props) => {
  if (data) {
    shuffle(data);
  }

  return (
    <NewsLayout
      seo={{ title: section, description: 'all world news in 1 place' }}
    >
      <div className='flex flex-col mt-4 capitalize'>
        <h1 className='font-bold text-5xl'>{section}</h1>
        <div className='flex flex-row flex-wrap '>
          {data?.map((article: Article) => {
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
          })}
          {data?.map((article: Article) => {
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
          })}
        </div>
      </div>
    </NewsLayout>
  );
};

export default NewsCategoryMain;
