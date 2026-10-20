import React from 'react';

import Link from 'next/link';

import Date from 'components/shared/Date';
import { ArticleDetailedImageAuthors } from 'lib/interfaces';
import { formatAuthors, getAuthorName } from 'lib/utils';

import { ImageBuilder } from '../shared/ImageBuilder';
import style from './ResultTile.module.scss';

type Props = {
  article: ArticleDetailedImageAuthors;
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
              <div className={style.title}>{article.title}</div>
              <div className={style.body}>{article.excerpt}</div>
              <div className={style.authors}>{formattedAuthorNames}</div>
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
