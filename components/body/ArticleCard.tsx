import React from 'react';
import style from './ArticleCard.module.css';
import Link from 'next/link';

type ArticleCardProps = {
  title: string;
  description: string;
  author: string;
  imageId: string;
  slug: string;
};

const ArticleCard = ({
  title,
  description,
  imageId,
  slug,
}: ArticleCardProps) => {
  return (
    <Link href={`/news/articles/${slug}`}>
      <a>
        <article className='flex flex-col pr-4 '>
          <h3 className='font-bold mb-2 font-serif'>{title}</h3>
          <div className='text-gray-700 font-serif'>{description}</div>
        </article>
      </a>
    </Link>
  );
};

export default ArticleCard;
