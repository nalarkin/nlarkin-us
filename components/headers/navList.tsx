import React from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

export type NavListProps = {
  values: [string, string][];
};

const NavList = ({ values }: NavListProps) => {
  return (
    <>
      <ul className=''>
        {...values.map(([text, url]) => {
          <li key={uuidv4()}>
            <Link href={url}>
              <a>{text}</a>
            </Link>
          </li>;
        })}
      </ul>
    </>
  );
};

export default NavList;
