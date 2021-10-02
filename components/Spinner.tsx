import React from 'react';
import style from './Spinner.module.scss';

interface SpinnerProps {
  text?: string;
  size?: string;
}

export const Spinner = ({
  text = '',
  size = '5em',
}: SpinnerProps): JSX.Element => {
  const header = text ? <h4>{text}</h4> : null;
  return (
    <div className={style.spinner}>
      {header}
      <div className={style.loader} style={{ height: size, width: size }} />
    </div>
  );
};
