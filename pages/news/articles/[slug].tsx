// @ts-nocheck

import React from 'react';
import {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  GetServerSideProps,
} from 'next';
import Layout from '../../../components/layouts/layout';
import NewsLayout from '../../../components/layouts/newsLayout';
import Disclaimer from '../../../components/disclaimer';
import {
  getAllArticlesIds,
  getArticleData,
  getSortedArticlesData,
} from '../../../lib/articles';
import { Article } from '../../../interfaces';
import Date from '../../../components/Date';
import { getClient, sanityClient } from '../../../lib/sanity.server';
import { articleQuery, articleSlugsQuery } from '../../../lib/queries';
import ErrorPage from 'next/error';
import { usePreviewSubscription, PortableText } from '../../../lib/sanity';
import { useRouter } from 'next/router';
import { groq } from 'next-sanity';
import ArticleBody from '../../../components/body/ArticleBody';
import ArticleHeader from '../../../components/article/ArticleHeader';
import ArticleHeaderSocial from '../../../components/article/ArticleHeaderSocial';
import ArticleHeaderInfo from '../../../components/article/ArticleHeaderInfo';
import style from './article.module.css';

/**
 * Fake data generator
 * https://www.plot-generator.org.uk/fairytale/
 *
 * Headline generator
 * https://www.plot-generator.org.uk/headlines/
 */

type Props = {
  data: {
    article: object;
    moreArticles: object[];
  };
  errors?: string;
};
export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const queryParams = { slug: params.slug };
  const article = await getClient(preview).fetch(articleQuery, queryParams);

  return {
    props: {
      preview,
      data: {
        article,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // const paths = await sanityClient.fetch(articleSlugsQuery);
  const paths = await getClient().fetch(articleSlugsQuery);
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
};

const NewsSEO = {
  description:
    'This is a purely educational attempt to clone of the New York Times. Disclaimer....',
  title: "Nathan's News",
};

const ArticlePage = ({ data }) => {
  const router = useRouter();
  const { data: article } = usePreviewSubscription(articleQuery, {
    params: { slug: data.article?.slug },
    initialData: data.article,
    enabled: data.preview && data.article?.slug,
  });
  if (!router.isFallback && !data.article?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  const { title, text, authors, date } = article;
  return (
    <div>
      <NewsLayout seo={NewsSEO}>
        <div className='flex flex-col '>
          {/* optional hero here with title over image */}

          <h1 className='text-xl font-bold mt-5 mb-5 mx-auto'>{title}</h1>
          <ArticleHeader authors={authors} />
          <div className={style.body}>
            <ArticleHeaderSocial />
            <ArticleHeaderInfo authors={authors} date={date} />
            <ArticleBody text={text} />
          </div>
          <Disclaimer />

          {/* <div>author: {data?.authorId}</div>
          <div>
            <Date dateString={data ? data.date : ''} />{' '}
          </div>
          <div
            className='font-serif'
            dangerouslySetInnerHTML={{ __html: data ? data.contentHtml : '' }}
          /> */}
        </div>
      </NewsLayout>
    </div>
  );
};

export default ArticlePage;
