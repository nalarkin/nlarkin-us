import React from 'react';
import style from './ArticleCard.module.css';
import Link from 'next/link';
import { ImageBuilder } from '../ImageBuilder';
import * as Schema from '../../lib/schema';

type ArticleCardProps = {
  title: string;
  description: string;
  author: string;
  image: Schema.ArticleImage;
  slug: string;
};

const ArticleCard = ({ title, description, image, slug }: ArticleCardProps) => {
  return (
    <Link href={`/news/articles/${slug}`}>
      <a className='flex flex-row  align-items-center'>
        <article className='flex flex-col pr-4 '>
          <h3 className='font-bold mb-2 font-serif'>{title}</h3>
          <div className='text-gray-700 font-serif'>{description}</div>
        </article>
        <div className='flex w-64 pr-4'>
          <div className='block w-full my-auto'>
            <ImageBuilder image={image} />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ArticleCard;
