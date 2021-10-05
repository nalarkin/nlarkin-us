import React from 'react';

import NewsButton from '../shared/newsButton';
import style from './CookieNotice.module.css';

const CookieNotice = () => {
  return (
    <div className={style.container}>
      <div className="flex flex-row items-center justify-around">
        <div>
          By clicking allow, you agree to the storing of cookies on your device
          that are used to improve the navigation experience.
        </div>
        <div className="my-2">
          <NewsButton color="bg-green-600">Accept All</NewsButton>
        </div>
      </div>
    </div>
  );
};

export default CookieNotice;
