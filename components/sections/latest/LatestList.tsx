import React, { useState } from 'react';

import Fuse from 'fuse.js';

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

  const latestHeader = (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row px-4 ">
        <div className="flex flex-row w-4/5  mx-auto border-t-2 border-b-2">
          <div className={style.btnLatest}>Latest</div>
          <div className={style.btnSearch}>Search</div>
          <input type="text" onChange={handleChange} value={text} />
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
