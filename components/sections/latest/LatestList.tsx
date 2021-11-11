import React, { useState } from 'react';

import classNames from 'classnames';
import Fuse from 'fuse.js';
import { ImSearch } from 'react-icons/im';

import { List } from 'components/shared/list';
import { Article, ArticleDetailedImageAuthors } from 'lib/interfaces';

import SectionListCard from '../cards/SectionListCard';
import style from './LatestList.module.scss';

type Props = {
  articles: ArticleDetailedImageAuthors[];
};

const testArticles = (
  article: Article
): article is ArticleDetailedImageAuthors => {
  return (article as ArticleDetailedImageAuthors).authors !== undefined;
};
const options: Fuse.IFuseOptions<ArticleDetailedImageAuthors> = {
  // isCaseSensitive: false,
  includeScore: true,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  threshold: 0.6,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  keys: ['title', 'excerpt', 'authors.name'],
};

type GenerateProps = {
  articles: Fuse.FuseResult<ArticleDetailedImageAuthors>[];
};

const GenerateList = ({ articles }: GenerateProps) => {
  return (
    <List
      items={articles}
      renderItem={({ item }) => {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const { _id, excerpt, image, title, authors, slug, date } = item;
        return (
          <div key={_id}>
            <div className=" ">
              <SectionListCard
                description={excerpt ?? ''}
                image={image}
                title={title}
                slug={slug ?? ''}
                authors={authors}
                date={date}
              />
            </div>
          </div>
        );
      }}
    />
  );
};

const LatestList = ({ articles }: Props) => {
  const fuse = new Fuse(articles, options);
  const [userHasSearched, setUserHasSearched] = useState(false);
  const [text, changeText] = useState('');
  const [latestIsActive, setLatestActive] = useState(true);
  const [searchIsActive, setSearchActive] = useState(false);
  const [result, changeResult] = useState<
    Fuse.FuseResult<ArticleDetailedImageAuthors>[]
  >([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeText(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const searchResults = fuse.search(text);
    changeResult(searchResults);
    if (text === '') {
      setUserHasSearched(false);
    } else {
      setUserHasSearched(true);
    }
  };

  const selectLatest = (
    _e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setLatestActive(true);
    setSearchActive(false);
  };
  const selectSearch = (
    _e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setLatestActive(false);
    setSearchActive(true);
  };

  const latestClass = classNames([
    [style.btnLatest],
    { [style.active]: latestIsActive },
  ]);
  const searchClass = classNames([
    [style.btnLatest],
    { [style.active]: searchIsActive },
  ]);
  const searchContainer = classNames([
    { [style.searchContainer]: searchIsActive },
  ]);
  const latestHeader = (
    <form onSubmit={handleSubmit}>
      <div className="block">
        <div className={style.headerContainer}>
          <button className={latestClass} type="button" onClick={selectLatest}>
            Latest
          </button>
          <div className={searchClass}>
            <button
              className={style.searchBtn}
              type="button"
              onClick={selectSearch}
            >
              Search
            </button>
            <div className={searchContainer}>
              <div className={style.inputContainer}>
                <div className={style.searchIcon}>
                  <ImSearch size={16} />
                </div>
                <label
                  htmlFor="search"
                  aria-label="Search articles"
                  className={style.visuallyHidden}
                >
                  search{' '}
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  value={text}
                  className={style.inputField}
                  placeholder="Search"
                  name="search"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );

  const convertedArticles = articles.filter(testArticles);
  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
        {latestHeader}
        {userHasSearched ? (
          <GenerateList articles={result} />
        ) : (
          <List
            items={convertedArticles}
            renderItem={({
              _id,
              excerpt,
              image,
              title,
              authors,
              slug,
              date,
            }) => {
              return (
                <div key={_id}>
                  <div className=" ">
                    <SectionListCard
                      description={excerpt ?? ''}
                      image={image}
                      title={title}
                      slug={slug ?? ''}
                      authors={authors}
                      date={date}
                    />
                  </div>
                </div>
              );
            }}
          />
        )}
      </div>
    </div>
  );
};

export default LatestList;
