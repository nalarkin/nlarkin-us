import React from 'react';
import style from './ArticleCard.module.css';

const ArticleCard = () => {
  return (
    <article className='flex flex-col '>
      <h3 className='font-bold mb-2 font-serif'>
        The World is Flat!! Says the scientist in the Loony Bin
      </h3>
      <div className='text-gray-700 font-serif'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
        aliquid modi minus natus deleniti dignissimos incidunt nostrum velit ex
        amet sed maxime, autem tenetur nam temporibus debitis voluptatum enim
        sit.
      </div>
    </article>
  );
};

export default ArticleCard;
