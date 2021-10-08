import React from 'react';

import { ArticleOpinion } from 'lib/interfaces';

import { List } from '../shared/list';
import OpinionCard from './OpinionCard';
import style from './OpinionColumn.module.scss';

const OpinionHeader = () => {
  return <div className="pt-2 text-xs mb-2 font-bold font-sans">Opinion</div>;
};

type OpinionProps = {
  articles: ArticleOpinion[];
};

const OpinionColumn = ({ articles }: OpinionProps) => {
  return (
    <div className={style.container}>
      <OpinionHeader />
      <div className="flex flex-col divide-y-2 ">
        <List
          items={articles}
          renderItem={({ title, authors, slug, _id }) => {
            return (
              <div className="w-full " key={_id}>
                <OpinionCard title={title} authors={authors} slug={slug} />
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};

export default OpinionColumn;
