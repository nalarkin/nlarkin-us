import React, { useState } from 'react';
import style from './disclaimer.module.css';
import cn from 'classnames';
import NewsButton from './newsButton';
import Cookies from 'js-cookie';

const Disclaimer = () => {
  const getDismissalStatus = () => {
    const cookieIsPresent = Cookies.get('disclaimerDismissed');
    console.log(`cookieIsPresent: ${cookieIsPresent}`);
    if (cookieIsPresent) {
      return true;
    }
    return false;
  };

  const [isDismissed, dismissMessage] = useState<boolean>(getDismissalStatus());

  const handleClick = () => {
    Cookies.set('disclaimerDismissed', 'true', { sameSite: 'strict' });
    console.log(`isDismissed: ${isDismissed}`);
    dismissMessage(getDismissalStatus());
  };

  if (isDismissed) {
    return <div></div>;
  }
  const dismissClass = cn([
    'flex',
    'flex-col',
    'justify-center',
    'items-center',
    'border-2',
    'border-black',
    'p-1',
    'shadow-xl',
    'bg-white',
    'mx-10',
    'w-60',
    'lg:w-96',
  ]);

  return (
    <div className={isDismissed ? `hidden` : ''}>
      <div className={style.alert}>
        <div className={dismissClass}>
          <div className='flex flex-col text-center gap-y-5 '>
            <div>Disclaimer</div>
            <div className=' '>
              This site is purely for educational purposes. This site has no
              affilitiation with the NYT.
            </div>
            <div>{JSON.stringify(dismissClass)}</div>
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
