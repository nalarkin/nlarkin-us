import React, { useCallback, useState, useEffect } from 'react';

import Fuse from 'fuse.js';
import { ImSearch } from 'react-icons/im';

import { ArticleDetailedImageAuthors } from 'lib/interfaces';

import ResultTile from './ResultTile';
import style from './SearchBody.module.scss';

type BodyProps = {
  query?: string;
  articles?: ArticleDetailedImageAuthors;
  fuse: Fuse<ArticleDetailedImageAuthors>;
  initialResult: Fuse.FuseResult<ArticleDetailedImageAuthors>[];
};

export default function SearchBody({
  query = '',
  fuse,
  initialResult,
}: BodyProps) {
  const [result, changeResult] =
    useState<Fuse.FuseResult<ArticleDetailedImageAuthors>[]>(initialResult);
  const [text, changeText] = useState(query);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchResults = fuse.search(text);
    changeResult(searchResults);
  };

  const initialLoad = useCallback(
    (initialQuery: string) => {
      const searchResults = fuse.search(initialQuery);
      changeResult(searchResults);
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
                type="text"
                placeholder="search"
                value={text}
                onChange={handleChange}
              />
              <button type="submit" className={style.btn}>
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
