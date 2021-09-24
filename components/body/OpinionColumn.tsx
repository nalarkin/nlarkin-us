import React from 'react';
import OpinionCard from './OpinionCard';

const OpinionHeader = () => {
  return (
    <div className='border-t-2 border-black pt-2 text-xs mb-2 font-bold font-sans'>
      Opinion
    </div>
  );
};

const OpinionColumn = () => {
  return (
    <div className='flex flex-col  pl-4 border-l-2 border-gray-200 '>
      <OpinionHeader />
      <div className='flex flex-col divide-y-2 '>
        <OpinionCard />
        <OpinionCard />
        <OpinionCard />
        <OpinionCard />
        <OpinionCard />
      </div>
    </div>
  );
};

export default OpinionColumn;
