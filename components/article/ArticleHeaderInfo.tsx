import React from 'react';

import Link from 'next/link';

import * as Schema from '../../lib/schema';
import Date from '../shared/Date';
import { ImageBuilder } from '../shared/ImageBuilder';

type Props = {
  authors: (Pick<Schema.Author, 'name' | 'picture'> & { slug: string })[];
  date?: string;
};

const ArticleHeaderInfo = ({ authors, date }: Props) => {
  const secondAuthor = () => {
    return (
      <div>
        and
        <Link
          href={`/news/authors/${authors[1].slug}`}
          className="underline hover:no-underline focus:no-underline"
        >
          {authors[1].name}
        </Link>
      </div>
    );
  };

  const authorElement = (
    <div>
      <div className="font-bold ">
        {`By `}
        <Link
          href={`/news/authors/${authors[0].slug}`}
          className="underline hover:no-underline focus:no-underline "
        >
          {authors[0].name}
        </Link>
        <div className="w-20 p-2">
          <ImageBuilder image={authors[0].picture} classes={'rounded-full'} />
        </div>
        {authors.length < 2 ? null : secondAuthor()}
      </div>
    </div>
  );

  return (
    <div className="my-7">
      {authorElement}

      <Date dateString={date} />
    </div>
  );
};

export default ArticleHeaderInfo;
