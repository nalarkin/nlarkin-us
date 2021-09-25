import React from 'react';
import { GetStaticProps } from 'next';
import { getSortedArticlesData } from '../../lib/articles';
import { Article } from '../../interfaces';
import ArticleCard from '../../components/body/ArticleCard';
import NewsLayout from '../../components/layouts/newsLayout';
import { shuffle } from '../../lib/utils';

type Props = {
  data: Article[] | null;
  error: string;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    // const id = params?.id;
    const allPosts = getSortedArticlesData();
    return {
      props: {
        data: allPosts,
        error: '',
      },
    };
  } catch (err) {
    return { props: { data: null, errors: 'an error occured.' } };
  }
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = getAllCategoriesIds();
//   return {
//     paths,
//     fallback: false,
//   };
// };

const NewsCategoryMain = ({ data }: Props) => {
  if (data) {
    shuffle(data);
  }

  return (
    <NewsLayout
      seo={{ title: 'world news', description: 'all world news in 1 place' }}
    >
      <div className='flex flex-row'>
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
    </NewsLayout>
  );
};

export default NewsCategoryMain;
