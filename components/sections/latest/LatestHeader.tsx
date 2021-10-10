import React from 'react';

import style from './LatestHeader.module.scss';

const LatestHeader = () => {
  return (
    <div className="">
      <div className="flex flex-row px-4 ">
        <div className="flex flex-row w-4/5  mx-auto border-t-2 border-b-2">
          <div className={style.btnLatest}>Latest</div>
          <div className={style.btnSearch}>Search</div>
        </div>
      </div>
    </div>
  );
};

export default LatestHeader;
