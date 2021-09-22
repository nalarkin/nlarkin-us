import React from 'react';
import { NextPage } from 'next';
import Layout from '../../components/layout';
import NewsLayout from '../../components/newsLayout';

const NewsSEO = {
  description:
    'This is a purely educational attempt to clone of the New York Times. Disclaimer....',
  title: "Nathan's News",
};

const News: NextPage = () => {
  return (
    <div>
      <NewsLayout seo={NewsSEO}>
        <div className='text-center'>This is where I would put the news</div>
      </NewsLayout>
    </div>
  );
};

export default News;
