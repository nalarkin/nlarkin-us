import React, { useState, useEffect } from 'react';

import Fuse from 'fuse.js';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import NewsLayout from 'components/layouts/NewsLayout';
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

export default function SearchPage({ data }: SearchProps) {
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
    threshold: 0.3,
    distance: 500,
    // useExtendedSearch: false,
    // ignoreLocation: true,
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
      <SearchBody
        query={query.all as string}
        fuse={fuse}
        initialResult={initialResult}
      />
    );
  }

  return <Spinner />;
}

SearchPage.getLayout = function getLayout(page: React.ReactElement) {
  return <NewsLayout>{page}</NewsLayout>;
};
