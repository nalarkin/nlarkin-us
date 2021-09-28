import React from 'react';
import Disclaimer from './disclaimer';
import style from './newsBody.module.css';
import NewsHero from './body/NewsHero';
import ArticleCardLarge from './body/ArticleCardLarge';
import OpinionColumn from './body/OpinionColumn';

type Props = {
  children: React.ReactNode;
};

const NewsBody = ({ children }: Props) => {
  return (
    <main className={style.content}>
      {/* <NewsHero /> */}
      {children}

      <div className={style.opinionBlock}>
        {/* <div className='flex flex-row pr-4'>
          <ArticleCardLarge />
        </div> */}
        <OpinionColumn />
      </div>

      <Disclaimer />
    </main>
  );
};

export default NewsBody;
