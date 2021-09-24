import React from 'react';
import Disclaimer from './disclaimer';
import style from './newsBody.module.css';
import NewsHero from './body/NewsHero';
import ArticleCardLarge from './body/ArticleCardLarge';
import OpinionColumn from './body/OpinionColumn';

const NewsBody = () => {
  return (
    <main className={style.content}>
      <NewsHero />
      <div className={style.opinionBlock}>
        <div className='flex flex-row pr-4'>
          <ArticleCardLarge />
        </div>
        <OpinionColumn />
      </div>
      <div>story 2</div>
      <div>story 3</div>
      <Disclaimer />
    </main>
  );
};

export default NewsBody;
