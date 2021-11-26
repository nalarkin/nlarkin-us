import React from 'react';

import Carousel from 'components/tiles/Carousel';
import LargeArticleCard from 'components/tiles/LargeCard';
import { ArticleDetailedImage, ArticleOpinion } from 'lib/interfaces';

// import Disclaimer from '../disclaimer/disclaimer';
import style from './OpinionBody.module.scss';
import OpinionColumn from './OpinionColumn';

type Props = {
  columnArticles: ArticleOpinion[];
  bodyArticles: ArticleDetailedImage[];
  centerArticle: ArticleDetailedImage;
};

const OpinionBody = ({
  columnArticles,
  bodyArticles,
  centerArticle,
}: Props) => {
  const size3 = bodyArticles.slice(0, 3);
  const size4 = bodyArticles.slice(0, 4);
  return (
    <main className={style.content}>
      {/* <NewsHero /> */}
      <div className={style.contentBody}>
        <Carousel articles={size3} categoryHeader="Latest News" />
        <LargeArticleCard article={centerArticle} />
        <Carousel articles={size4} categoryHeader="Most Popular Articles" />
      </div>

      <div className={style.opinionSpacer}>
        <div className={style.opinionBlock}>
          <OpinionColumn articles={columnArticles} />
        </div>
      </div>

      {/* <Disclaimer /> */}
    </main>
  );
};

export default OpinionBody;
