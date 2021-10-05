import React from 'react';

import cn from 'classnames';

type BtnProps = {
  color?: string;
  hoverColor?: string;
  children: React.ReactNode;
};

const NewsButton = ({
  color = 'bg-blue-800',
  // hoverColor = 'bg-blue-700',
  children,
}: BtnProps) => {
  const btnClass = cn([
    color,
    'py-2',
    'px-4',
    'text-white',
    'font-semibold',
    'rounded-sm',
    'shadow-md',
    `hover:bg-blue-700`,
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-blue-400',
    'focus:ring-opacity-75',
    'uppercase',
  ]);
  return <div className={btnClass}>{children}</div>;
};

export default NewsButton;
