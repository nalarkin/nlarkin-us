import React from 'react';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import Layout from '../../components/layouts/layout';
import NewsLayout from '../../components/layouts/newsLayout';
import NewsBody from '../../components/body/newsBody';
import Disclaimer from '../../components/disclaimer';
import CookieNotice from '../../components/disclaimer/CookieNotice';
import {
  SectionArticlesResponse,
  sectionArticlesQuery,
  sectionSlugsQuery,
  articleQueryAll,
} from '../../lib/queries';
import { getClient } from '../../lib/sanity.server';
import { ArticleResultAll } from '../../lib/queries';
import { List } from '../../components/list';
import ArticleCard from '../../components/body/ArticleCard';

const NewsSEO = {
  description:
    'This is a purely educational attempt to clone of the New York Times. Disclaimer....',
  title: "Nathan's News",
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const articles = await getClient(preview).fetch<ArticleResultAll>(
    articleQueryAll
  );
  return {
    props: {
      data: articles,
    },
  };
};

const HomeBuilder = ({
  articles,
}: {
  articles: ArticleResultAll | undefined;
}) => {
  if (articles === undefined) {
    return <div></div>;
  }
  let i = 0;

  return (
    <>
      <List
        items={articles}
        renderItem={(article) => {
          return (
            <div key={article._id}>
              <ArticleCard
                authors={article.authors}
                description={article.excerpt ?? ''}
                image={article.image}
                slug={article.slug}
                title={article.title}
              />
            </div>
          );
        }}
      />
    </>
  );
};

type Props = {
  data?: ArticleResultAll;
};

const NewsHome = ({ data }: Props) => {
  return (
    // <div className={style.content}>
    <div className=''>
      <NewsLayout seo={NewsSEO}>
        {/* <div>home</div> */}
        {/* <div className='flex flex-row'></div> */}
        <NewsBody opinionArticles={data}>
          <div className='flex flex-wrap w-full'>
            <HomeBuilder articles={data} />
          </div>
        </NewsBody>
      </NewsLayout>
      {/* <CookieNotice /> */}
    </div>
  );
};

export default NewsHome;
