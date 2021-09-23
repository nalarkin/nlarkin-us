import React from 'react';
import Disclaimer from './disclaimer';
import style from './newsBody.module.css';

const NewsBody = () => {
  return (
    <main className={style.content}>
      <div>story one</div>
      <div>story 2</div>
      <div>story 3</div>
      <Disclaimer />
    </main>
  );
};

export default NewsBody;
