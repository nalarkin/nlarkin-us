import React from 'react';

import { Article, ArticleDetailedImageAuthors } from 'lib/interfaces';

import SectionListCard from '../cards/SectionListCard';
import LatestHeader from './LatestHeader';
import style from './LatestList.module.scss';

type Props = {
  articles: Article[];
};

const testArticles = (
  article: Article
): article is ArticleDetailedImageAuthors => {
  return (article as ArticleDetailedImageAuthors).authors !== undefined;
};

const LatestList = ({ articles }: Props) => {
  const convertedArticles = articles.filter(testArticles);
  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
        <LatestHeader />
        {convertedArticles.map((article, index) => {
          return (
            <div key={article._id + index}>
              <div className=" ">
                <SectionListCard
                  description={article.excerpt ?? ''}
                  image={article.image}
                  title={article.title}
                  slug={article.slug ?? ''}
                  authors={article.authors}
                  date={article.date}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestList;
