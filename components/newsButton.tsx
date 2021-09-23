import React from 'react';

type BtnProps = {
  children: React.ReactNode;
};

const NewsButton = ({ children }: BtnProps) => {
  return (
    <div className='py-2 px-4 blue bg-blue-800 text-white font-semibold rounded-sm shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 uppercase'>
      {children}
    </div>
  );
};

export default NewsButton;
