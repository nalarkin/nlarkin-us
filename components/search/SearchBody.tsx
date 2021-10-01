import { ArticleResultAll } from 'lib/queries';
import ResultTile from './ResultTile';
import Fuse from 'fuse.js';
import React, { useState } from 'react';
import style from './SearchBody.module.scss';
import { ImSearch } from 'react-icons/im';
import { Article } from 'interfaces';

type BodyProps = {
  query?: string;
  articles?: ArticleResultAll;
  fuse: Fuse<Article>;
  initialResult: Fuse.FuseResult<Article>[];
};

type SortMethod = 'relevance' | 'newest' | 'oldest';

export default function SearchBody({
  query = '',
  fuse,
  initialResult,
}: BodyProps) {
  const [result, changeResult] =
    useState<Fuse.FuseResult<Article>[]>(initialResult);
  const [text, changeText] = useState(query);
  const [sortMethod, changeSortMethod] = useState<SortMethod>('relevance');
  /**
   * TODO: Add date range, section filtering.
   */

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeText(e.target.value);
  };

  const handleSubmit = () => {
    const result = fuse.search(text);
    changeResult(result);
  };

  return (
    <div>
      <div className={style.background}>
        <div className={style.searchContainer}>
          <div
            className={style.resultCount}
          >{`Showing ${result.length} results for:`}</div>
          <div className={style.searchBar}>
            <div className={style.input}>
              <input
                className={style.textInput}
                type='text'
                placeholder='SEARCH'
                value={text}
                onChange={handleChange}
              />
              <button className={style.btn} onClick={() => handleSubmit()}>
                <div className={style.btn}>
                  <ImSearch size={25} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.container}>
        {result?.map((res) => (
          <ResultTile article={res.item} key={res.refIndex} />
        ))}
      </div>
    </div>
  );
}

function isFuseResult(
  value: unknown
): value is Fuse.FuseResult<ArticleResultAll> {
  if (typeof value === 'object' && value !== null && 'refIndex' in value) {
    return true;
  }
  return false;
}
