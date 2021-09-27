import React from 'react';
import style from './ArticleCard.module.css';
import Link from 'next/link';
import { ImageBuilder } from '../ImageBuilder';
import * as Schema from '../../lib/schema';

type ArticleCardProps = {
  title?: string;
  description: string;
  authors: Array<Schema.Author>;
  image: Schema.ArticleImage | undefined;
  slug: string;
};

const ArticleCard = ({ title, description, image, slug }: ArticleCardProps) => {
  return (
    <Link href={`/news/articles/${slug}`}>
      <a className={style.smallCard}>
        <article className='flex flex-col pr-4 '>
          <h3 className='font-bold mb-2 font-serif'>{title}</h3>
          <div className='text-gray-700 font-serif normal-case'>
            {description}
          </div>
        </article>
        <div className='flex pr-4'>
          <div className='block w-full my-auto'>
            <ImageBuilder image={image} />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ArticleCard;
