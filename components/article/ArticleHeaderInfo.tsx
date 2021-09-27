import React from 'react';
import Link from 'next/link';
import { parseISO } from 'date-fns';
import Date from '../Date';

type Props = {
  authors: {
    name?: string;
    slug: string;
  }[];
  date?: string;
};

const ArticleHeaderInfo = ({ authors, date }: Props) => {
  const secondAuthor = () => {
    return (
      <div>
        and
        <Link href={`/news/authors/${authors[1].slug}`}>
          <a className='underline hover:no-underline focus:no-underline'>
            {authors[1].name}
          </a>
        </Link>
      </div>
    );
  };

  const authorElement = (
    <div>
      <div className='font-bold'>
        {`By `}
        <Link href={`/news/authors/${authors[0].slug}`}>
          <a className='underline hover:no-underline focus:no-underline'>
            {authors[0].name}
          </a>
        </Link>
        {authors.length < 2 ? null : secondAuthor()}
      </div>
    </div>
  );

  return (
    <div className='my-7'>
      {authorElement}

      <Date dateString={date} />
    </div>
  );
};

export default ArticleHeaderInfo;
