import React from 'react';

import Link from 'next/link';

import * as Schema from '../../../lib/schema';
import Date from '../../shared/Date';
import { ImageBuilder } from '../../shared/ImageBuilder';
import style from './SectionListCard.module.scss';

type ArticleCardProps = {
  title?: string;
  description: string;
  authors: Array<Pick<Schema.Author, 'name'> & { slug: string }>;
  image: Schema.ArticleImage | undefined;
  slug: string;
  date?: string;
};

const SectionListCard = ({
  title,
  description,
  image,
  slug,
  date,
}: ArticleCardProps) => {
  return (
    <Link href={`/news/articles/${slug}`}>
      <a className={style.listCard}>
        <div className={style.date}>
          <Date dateString={date} />
        </div>
        <div className={style.listContent}>
          <article className={style.article}>
            <h3 className="font-bold mb-2 font-serif">{title}</h3>
            <div className="text-gray-700 font-serif normal-case">
              {description}
            </div>
          </article>
          <div className={style.image}>
            <div className="block w-full my-auto">
              <ImageBuilder image={image} />
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default SectionListCard;
