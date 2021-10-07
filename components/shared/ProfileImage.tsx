import React from 'react';

import style from 'ProfileImage.module.css';

type Props = {
  children: React.ReactNode;
};

export const ProfileImage = ({ children }: Props) => {
  return (
    <div className={style.image}>
      <div className="rounded-full">{children}</div>
    </div>
  );
};
