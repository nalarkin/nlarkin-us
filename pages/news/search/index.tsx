import React, { useState, useEffect } from 'react';

import Fuse from 'fuse.js';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import MinimalHeader from 'components/headers/MinimalHeader';
import SearchBody from 'components/search/SearchBody';
import { ArticleDetailedImageAuthors } from 'lib/interfaces';
import { articleQueryAll, ArticleResultAll } from 'lib/queries';
import { getClient } from 'lib/sanity.server';

import { Spinner } from '../../../components/shared/Spinner';

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

const queryIsSingleString = (query: string | string[]): query is string => {
  if (typeof query === 'string') {
    return true;
  }
  return false;
};

type SearchProps = {
  data: ArticleDetailedImageAuthors[];
};

// type ResultInitial = undefined | Fuse.FuseResult<ArticleResultAll>;

export default function Search({ data }: SearchProps) {
  const { query } = useRouter();
  const [isLoading, setLoading] = useState(true);
  const [queryParams, setQueryParams] = useState<string | string[]>('');
  useEffect(() => {
    // console.log(queryParams);
    if ('all' in query) {
      const { all } = query;
      setQueryParams(all as string);
      setLoading(false);
    }
  }, [query, queryParams]);

  // const myIndex = Fuse.createIndex(['title', 'author.firstName'], mockData);
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
  const fuse = new Fuse(data, options);
  // const { all } = query;
  // const savedHeader = <MinimalHeader />;

  if (!isLoading && queryParams) {
    // let initial = '';
    let initialResult: Fuse.FuseResult<ArticleDetailedImageAuthors>[] = [];
    if (queryIsSingleString(queryParams)) {
      // initial = queryParams;
      initialResult = fuse.search(queryParams);
    } else {
      const joinedQueryString = queryParams.join(' ');
      // initial = joinedQueryString;
      initialResult = fuse.search(joinedQueryString);
    }
    // possibly unnecessary render of nav bar after search results have loaded
    return (
      <div>
        <MinimalHeader />
        {/* {savedHeader} */}
        <SearchBody
          query={query.all as string}
          fuse={fuse}
          initialResult={initialResult}
        />
      </div>
    );
  }

  return (
    <div>
      <MinimalHeader />
      {/* {savedHeader} */}
      <Spinner />
    </div>
  );
}
