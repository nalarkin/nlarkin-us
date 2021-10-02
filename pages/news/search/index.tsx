import Fuse from 'fuse.js';
import { articleQueryAll, ArticleResultAll } from 'lib/queries';
import { getClient } from 'lib/sanity.server';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import MinimalHeader from 'components/headers/MinimalHeader';

import React, { useRef, useState } from 'react';
import SearchBody from 'components/search/SearchBody';
import { Article } from 'interfaces';
import { Spinner } from '../../../components/shared/Spinner';
import { useEffect } from 'react';

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
  const [isLoading, setLoading] = useState(true);
  const [queryParams, setQueryParams] = useState<string | string[]>('');
  useEffect(() => {
    console.log(queryParams);
    if ('all' in query) {
      const { all } = query;
      setQueryParams(all as string);
      setLoading(false);
    }
  }, [query, queryParams]);

  // const myIndex = Fuse.createIndex(['title', 'author.firstName'], mockData);
  const options: Fuse.IFuseOptions<Article> = {
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
    let initial = '';
    let initialResult: Fuse.FuseResult<Article>[] = [];
    if (queryIsSingleString(queryParams)) {
      initial = queryParams;
      initialResult = fuse.search(queryParams);
    } else {
      const joinedQueryString = queryParams.join(' ');
      initial = joinedQueryString;
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

const queryIsSingleString = (query: string | string[]): query is string => {
  if (typeof query === 'string') {
    return true;
  }
  return false;
};
