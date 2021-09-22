import React from 'react';
import { NextPage } from 'next';
import Layout from '../../components/layout';

const NewsSEO = {
  description:
    'This is a purely educational attempt to clone of the New York Times. Disclaimer....',
  title: "Nathan's News",
};

const News: NextPage = () => {
  return (
    <div>
      <Layout seo={NewsSEO}>
        <div className='text-center'>This is where I would put the news</div>
      </Layout>
    </div>
  );
};

export default News;
