import React, { useMemo } from 'react';

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

type SearchProps = {
  data: ArticleDetailedImageAuthors[];
};

export default function SearchPage({ data }: SearchProps) {
  const { query, isReady } = useRouter();
  const search = query.all;
  const text = (Array.isArray(search) ? search.join(' ') : search ?? '').trim();
  const fuse = useMemo(
    () =>
      new Fuse(data, {
        includeScore: true,
        threshold: 0.3,
        distance: 500,
        keys: ['title', 'excerpt', 'authors.name'],
      }),
    [data]
  );

  if (!isReady) return <Spinner />;

  return (
    <SearchBody
      query={text}
      fuse={fuse}
      initialResult={text ? fuse.search(text) : []}
    />
  );
}

SearchPage.getLayout = function getLayout(page: React.ReactElement) {
  return <NewsLayout>{page}</NewsLayout>;
};
