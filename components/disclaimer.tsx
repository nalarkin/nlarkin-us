import React, { useState } from 'react';
import style from './disclaimer.module.css';
import cn from 'classnames';
import NewsButton from './newsButton';

const Disclaimer = () => {
  const [isDissmissed, dismissMessage] = useState<boolean>(false);

  const handleClick = () => {
    dismissMessage(true);
  };

  const dismissClass = cn([
    { hidden: isDissmissed, 'bg-blue-500': true, 'border-2': true },
  ]);
  return (
    <div className={dismissClass}>
      <div className={style.alert}>
        <div className='flex flex-col justify-center items-center border-2 border-black p-1 shadow-xl bg-white mx-10 w-60 lg:w-96'>
          <div className='flex flex-col text-center gap-y-5 '>
            <div>Disclaimer</div>
            <div className=' '>
              This site is purely for educational purposes. This site has no
              affilitiation with the NYT.
            </div>
            <div> I am making this to learn Next.js.</div>
          </div>
          <button
            className='flex w-max mb-3 mt-9'
            onClick={() => handleClick()}
          >
            <NewsButton>Dismiss</NewsButton>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
