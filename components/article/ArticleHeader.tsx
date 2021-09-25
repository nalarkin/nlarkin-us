import React from 'react';
import style from './ArticleHeader.module.css';

type Props = {
  authors: {
    name: string;
    slug: string;
  }[];
};

/** TODO: The name below should be for the photographer of the hero image, not the author of the article */
const ArticleHeader = ({ authors }: Props) => {
  return (
    <div className='flex flex-col '>
      <div className='mb-10'>
        <div className={style.author}>
          {' '}
          {authors.map((author) => (
            <div key={author.slug}>{`${author.name} for The Nathan Times`}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;
