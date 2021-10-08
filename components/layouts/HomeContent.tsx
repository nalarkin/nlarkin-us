import React from 'react';

import HeroTwoRows from 'components/tiles/HeroTwoRows';
import type { Article } from 'lib/interfaces';

import style from './HomeContent.module.scss';

type Props = {
  articles: Article[];
};

// eslint-disable-next-line unused-imports/no-unused-vars
export const HomeContent = ({ articles }: Props) => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const section = articles.slice(0, 4);
  const heroes = articles.slice(0, 5);
  return (
    <div className={style.container}>
      <div className="block">
        {/* <div className="block">
        <Carousel articles={section} tileLayout="column" />
      </div>
      <HeroTwoRows articles={heroes} />
      <Carousel articles={heroes} tileLayout="row" /> */}
        <HeroTwoRows articles={heroes} />
      </div>
      <div>hello</div>
    </div>
  );
};
