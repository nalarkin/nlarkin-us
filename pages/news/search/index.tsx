import Fuse from 'fuse.js';
import { articleQueryAll, ArticleResultAll } from 'lib/queries';
import { getClient } from 'lib/sanity.server';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import MinimalHeader from 'components/headers/MinimalHeader';

import React, { useRef, useState } from 'react';
import SearchBody from 'components/search/SearchBody';
import { Article } from 'interfaces';

type ResultProp = {}[];

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const articles = await getClient(preview).fetch<ArticleResultAll>(
    articleQueryAll
  );
  return {
    props: {
      data: articles,
    },
  };
};

type SearchProps = {
  data: ArticleResultAll;
};

type ResultInitial = undefined | Fuse.FuseResult<ArticleResultAll>;

export default function Search({ data }: SearchProps) {
  const { query } = useRouter();
  // const myIndex = Fuse.createIndex(['title', 'author.firstName'], mockData);
  const options: Fuse.IFuseOptions<Article> = {
    // isCaseSensitive: false,
    includeScore: true,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    keys: ['title', 'excerpt', 'authors.name'],
  };
  const fuse = new Fuse(data, options);
  const { text } = query;
  if (text) {
    const initial = text;
    const initialResult = fuse.search(text as string);

    return (
      <div>
        <MinimalHeader />
        <SearchBody
          query={initial.toString()}
          fuse={fuse}
          initialResult={initialResult}
        />
      </div>
    );
  }

  return <div>Not found or loading</div>;
}
