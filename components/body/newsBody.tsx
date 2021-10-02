import React from 'react';
import Disclaimer from '../disclaimer';
import style from './newsBody.module.scss';
import NewsHero from './NewsHero';
import ArticleCardLarge from './ArticleCardLarge';
import OpinionColumn from './OpinionColumn';
import { ArticleResultAll } from '../../lib/queries';

type Props = {
  opinionArticles: ArticleResultAll | undefined;
  children: React.ReactNode;
};

const NewsBody = ({ opinionArticles, children }: Props) => {
  return (
    <main className={style.content}>
      {/* <NewsHero /> */}
      <div>{children}</div>

      <div className={style.opinionBlock}>
        {/* <div className='flex flex-row pr-4'>
          <ArticleCardLarge />
        </div> */}
        <OpinionColumn articles={opinionArticles} />
      </div>

      <Disclaimer />
    </main>
  );
};

export default NewsBody;
