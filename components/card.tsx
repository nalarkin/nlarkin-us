import React, { ReactNode } from 'react';
import Link from 'next/link';
import style from './layout.module.css';
import { IconType } from 'react-icons';

type Props = {
  text?: ReactNode;
  href?: string;
  btnText?: string;
  Icon?: IconType;
};

const Card = ({ text, href = '/', btnText = 'no text given', Icon }: Props) => (
  <div className=' m-5 w-72  md:w-96 h-64 '>
    <div className='hero-card '>
      <h2 className='text-center'>{text}</h2>
      {Icon}
      <div className='mt-5'>
        <Link href={href}>
          <a className='btn-blue'>{btnText}</a>
        </Link>
      </div>
    </div>
  </div>
);

export default Card;
