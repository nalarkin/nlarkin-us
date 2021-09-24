import React from 'react';

const OpinionCard = () => {
  return (
    <div className='flex flex-row py-2 font-serif '>
      <div className='flex flex-col'>
        <div className='text-xs text-gray-700 uppercase mb-1 '>Author Name</div>
        <div className='font-bold'>
          Article Header Article Header Article Header Article Header
        </div>
      </div>
      <div>profile image or article image</div>
    </div>
  );
};

export default OpinionCard;
