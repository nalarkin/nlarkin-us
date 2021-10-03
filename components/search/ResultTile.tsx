import React from 'react';
import style from './ResultTile.module.scss';
import * as Schema from 'lib/schema';
import Date from 'components/shared/Date';
import { ImageBuilder } from '../shared/ImageBuilder';
import Link from 'next/link';
import { formatAuthors, getAuthorName } from 'lib/utils';

type Props = {
  article: Pick<
    Schema.Article,
    '_id' | 'date' | 'excerpt' | 'image' | 'title'
  > & {
    authors: Array<Pick<Schema.Author, 'name' | 'picture'> & { slug: string }>;
    slug: string;
  };
};

const ResultTile = ({ article }: Props) => {
  const formattedAuthorNames = formatAuthors(article.authors, getAuthorName);
  return (
    <div className={style.resultRow}>
      <div className={style.resultCard}>
        <div className={style.layoutMod}>
          <div className={style.date}>
            <Date dateString={article.date} />
          </div>
          <div className={style.content}>
            <Link href={`/news/articles/${article.slug}`}>
              <a>
                <div className={style.title}>{article.title}</div>
                <div className={style.body}>{article.excerpt}</div>
                <div className={style.authors}>{formattedAuthorNames}</div>
              </a>
            </Link>
          </div>
        </div>
        <div className={style.img}>
          <ImageBuilder image={article.image} />
        </div>
      </div>
    </div>
  );
};

export default ResultTile;
