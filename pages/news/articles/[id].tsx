import React from 'react';
import {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  GetServerSideProps,
} from 'next';
import Layout from '../../../components/layouts/layout';
import NewsLayout from '../../../components/layouts/newsLayout';
import NewsBody from '../../../components/newsBody';
import Disclaimer from '../../../components/disclaimer';
import {
  getAllArticlesIds,
  getArticleData,
  getSortedArticlesData,
} from '../../../lib/articles';
import { Article } from '../../../interfaces';
import Date from '../../../components/Date';

type Error = {
  message: string;
};

type postData = {
  id: string;
  contentHtml: any;
};

type Props = {
  data?: Article;
  errors?: string;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const postData = await getArticleData(id as string);
    return {
      props: {
        data: postData,
      },
    };
  } catch (err) {
    return { props: { errors: 'an error occured.' } };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllArticlesIds();
  return {
    paths,
    fallback: false,
  };
};

const NewsSEO = {
  description:
    'This is a purely educational attempt to clone of the New York Times. Disclaimer....',
  title: "Nathan's News",
};

const ArticlePage = ({ data, errors }: Props) => {
  return (
    <div>
      <NewsLayout seo={NewsSEO}>
        <div>
          <div>author: {data?.authorId}</div>
          <div>
            <Date dateString={data ? data.date : ''} />{' '}
          </div>
          <div
            className='font-serif'
            dangerouslySetInnerHTML={{ __html: data ? data.contentHtml : '' }}
          />
        </div>
      </NewsLayout>
    </div>
  );
};

export default ArticlePage;
