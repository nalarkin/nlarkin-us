import React from 'react';

import { ArticleResultAll } from '../../lib/queries';
import { List } from '../shared/list';
import OpinionCard from './OpinionCard';
import style from './OpinionColumn.module.css';

const OpinionHeader = () => {
  return <div className="pt-2 text-xs mb-2 font-bold font-sans">Opinion</div>;
};

type OpinionProps = {
  articles: ArticleResultAll | undefined;
};

const OpinionColumn = ({ articles }: OpinionProps) => {
  if (articles === undefined) {
    return <div></div>;
  }

  return (
    <div className={style.container}>
      <OpinionHeader />
      <div className="flex flex-col divide-y-2 ">
        <List
          items={articles}
          renderItem={(item) => {
            return (
              <div className="w-full " key={item._id}>
                <OpinionCard
                  title={item.title}
                  // excerpt={item.excerpt}
                  authors={item.authors}
                  date={item.date}
                  slug={item.slug}
                />
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};

export default OpinionColumn;
