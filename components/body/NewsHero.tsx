import React from 'react';

import Image from 'next/image';

import style from './NewsHero.module.css';

const NewsHero = () => {
  return (
    <div className={style.heroContainer}>
      <div>column 1</div>
      <div className=" border-r-2 border-gray-200 px-4">
        <div className="flex flex-col">
          <Image
            src="/images/articles/science-vials.webp"
            about="science using micropippet"
            alt="science using micropippet"
            height={768}
            width={1225}
          />
          <div className="text-xs mt-1">
            Scientists seen extracting the cure to cancer at LSU laboratory.
          </div>
        </div>
      </div>

      <div>column 3</div>
    </div>
  );
};

export default NewsHero;
