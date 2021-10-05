import React from 'react';

import * as Schema from '../../lib/schema';
import style from './ArticleHeader.module.css';

type Props = {
  authors: Array<Pick<Schema.Author, 'name'> & { slug: string }>;
};

/** TODO: The name below should be for the photographer of the hero image, not the author of the */
const ArticleHeader = ({ authors }: Props) => {
  // console.log(`authors: ${JSON.stringify(authors)}`);
  return (
    <div className="flex flex-col ">
      <div className="mb-10 mx-auto">
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
