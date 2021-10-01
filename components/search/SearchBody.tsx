import { ArticleResultAll } from 'lib/queries';
import ResultTile from './ResultTile';
import Fuse from 'fuse.js';
import React, { useCallback, useState } from 'react';
import style from './SearchBody.module.scss';
import { ImSearch } from 'react-icons/im';
import { Article } from 'interfaces';
import { useEffect } from 'react';

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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = fuse.search(text);
    changeResult(result);
  };

  const initialLoad = useCallback(
    (query: string) => {
      const result = fuse.search(query);
      changeResult(result);
    },
    [fuse]
  );

  useEffect(() => {
    changeText(query);
    initialLoad(query);
  }, [query, initialLoad]);

  /**
   * TODO: Add date range, section filtering.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeText(e.target.value);
  };
  return (
    <div>
      <div className={style.background}>
        <div className={style.searchContainer}>
          <div
            className={style.resultCount}
          >{`Showing ${result.length} results for:`}</div>
          <form className={style.searchBar} onSubmit={handleSubmit}>
            <div className={style.input}>
              <input
                className={style.textInput}
                type='text'
                placeholder='search'
                value={text}
                onChange={handleChange}
              />
              <button type='submit' className={style.btn}>
                <ImSearch size={20} />
              </button>
            </div>
          </form>
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
