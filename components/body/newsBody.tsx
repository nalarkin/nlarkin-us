import React from 'react';

import { ArticleResultAll } from '../../lib/queries';
import Disclaimer from '../disclaimer/disclaimer';
import style from './newsBody.module.scss';
import OpinionColumn from './OpinionColumn';

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
