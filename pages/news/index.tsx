import React from 'react';
import { NextPage } from 'next';
import Layout from '../../components/layouts/layout';
import NewsLayout from '../../components/layouts/newsLayout';
import NewsBody from '../../components/newsBody';
import Disclaimer from '../../components/disclaimer';
import CookieNotice from '../../components/disclaimer/CookieNotice';

const NewsSEO = {
  description:
    'This is a purely educational attempt to clone of the New York Times. Disclaimer....',
  title: "Nathan's News",
};

const News: NextPage = () => {
  return (
    // <div className={style.content}>
    <div className=''>
      <NewsLayout seo={NewsSEO}>
        <NewsBody />
      </NewsLayout>
      {/* <CookieNotice /> */}
    </div>
  );
};

export default News;
