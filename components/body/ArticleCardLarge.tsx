import React from 'react';
import Image from 'next/image';
import ArticleCard from './ArticleCard';

const ArticleCardLarge = () => {
  return (
    <div>
      <div className='flex flex-row divide-x-2 max-h'>
        <div className='pr-2'>{/* <ArticleCard /> */}</div>
        <div className='px-2'>{/* <ArticleCard /> */}</div>
        <div className='px-2'>{/* <ArticleCard /> */}</div>
      </div>
    </div>
  );
};

export default ArticleCardLarge;
