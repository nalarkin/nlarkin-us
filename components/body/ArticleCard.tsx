import React from 'react';
import style from './ArticleCard.module.css';
import Link from 'next/link';

type ArticleCardProps = {
  title: string;
  description: string;
  author: string;
  imageId: string;
  id: string;
};

const ArticleCard = ({
  title,
  description,
  author,
  imageId,
  id,
}: ArticleCardProps) => {
  return (
    <Link href={`/news/articles/${id}`}>
      <a>
        <article className='flex flex-col '>
          <h3 className='font-bold mb-2 font-serif'>{title}</h3>
          <div className='text-xs'>{author}</div>
          <div className='text-gray-700 font-serif'>{description}</div>
        </article>
      </a>
    </Link>
  );
};

export default ArticleCard;
