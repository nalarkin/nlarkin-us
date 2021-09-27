import React from 'react';
import style from './LatestList.module.css';
import * as Schema from '../../../lib/schema';
import SectionListCard from '../cards/SectionListCard';
import LatestHeader from './LatestHeader';

type Props = {
  articles: Array<
    Pick<
      Schema.Article,
      '_id' | 'authors' | 'date' | 'excerpt' | 'image' | 'title'
    > & { slug: string; authors: Array<Schema.Author> }
  >;
};

const LatestList = ({ articles }: Props) => {
  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
        <LatestHeader />
        {articles.map((article, index) => {
          return (
            <div key={article._id + index}>
              <div className=' '>
                <SectionListCard
                  description={article.excerpt ?? ''}
                  image={article.image}
                  title={article.title}
                  slug={article.slug}
                  authors={article.authors}
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
