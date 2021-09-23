import React from 'react';
import Link from 'next/link';

export type NavListProps = {
  values: [string, string][];
};

const NavList = ({ values }: NavListProps) => {
  return (
    <>
      <ul>
        {...values.map(([text, url]) => {
          <li key={url}>
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
