import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { PlaceholderImage } from 'lib/interfaces';
import { formatAuthors, getAuthorName } from 'lib/utils';

import * as Schema from '../../../lib/schema';
import Date from '../../shared/Date';
// import { ImageBuilder } from '../../shared/ImageBuilder';
import style from './SectionListCard.module.scss';

type ArticleCardProps = {
  title?: string;
  description: string;
  authors: Array<Pick<Schema.Author, 'name'> & { slug: string }>;
  image: PlaceholderImage;
  slug: string;
  date?: string;
};

const SectionListCard = ({
  title,
  description,
  image,
  slug,
  date,
  authors,
}: ArticleCardProps) => {
  const formattedAuthors = formatAuthors(authors, getAuthorName).toUpperCase();
  return (
    <Link href={`/news/articles/${slug}`} className={style.listCard}>
      <div className={style.date}>
        <Date dateString={date} />
      </div>
      <div className={style.listContent}>
        <article className={style.article}>
          <h3 className="font-bold mb-2 font-serif">{title}</h3>
          <div className="text-gray-700 font-serif normal-case">
            {description}
          </div>
          <div>
            <div className=" text-gray-400 text-xs mt-3 font-sans font-semibold">
              By {formattedAuthors}
            </div>
          </div>
        </article>
        <div className={style.image}>
          <div className="block w-full my-auto">
            <Image {...image} />
            {/* <ImageBuilder image={image} /> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SectionListCard;
