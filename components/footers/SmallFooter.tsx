import React, { useState } from 'react';

import classNames from 'classnames';
import Link from 'next/link';

import { allFooterTopNavLinks, SiteLink } from '../../links';
import { List } from '../shared/list';
import style from './SmallFooter.module.scss';

type Props = {
  text: string;
  url: string;
  onClick: () => void;
};

const FooterLink = ({ text, url, onClick }: Props) => {
  return (
    <Link href={url} key={text}>
      <a
        onClick={() => onClick()}
        className=" text-sm  flex hover:underline focus:underline text-black "
      >
        {text}
      </a>
    </Link>
  );
};

type CategoryProps = {
  name: string;
  categoryLinks: SiteLink[];
};

const SmallFooterCategory = ({ name, categoryLinks }: CategoryProps) => {
  const [isOpen, setOpenStatus] = useState<boolean>(false);
  const categoryClass = classNames([
    'font-bold',
    'uppercase',
    'text-sm',
    'text-gray-900',
    'mb-2',
    'mt-5',
    'py-2',
    'flex w-full',
    { 'text-gray-400': isOpen },
  ]);

  const closeAfterClick = () => {
    setOpenStatus(false);
  };

  return (
    <div className="flex flex-col w-full">
      <button onClick={() => setOpenStatus(!isOpen)} className={categoryClass}>
        {name && name}
      </button>
      {isOpen ? (
        <ul className="flex flex-row flex-wrap pb-4">
          <List
            items={categoryLinks}
            renderItem={([text, url]) => (
              <li key={url} className="w-6/12 ">
                <FooterLink text={text} url={url} onClick={closeAfterClick} />
              </li>
            )}
          />
        </ul>
      ) : null}
    </div>
  );
};

const SmallFooter = () => {
  return (
    <div className="block">
      <div className={style.container}>
        <div className="flex flex-col lg:hidden items-start divide-y-2 divide-solid divide-gray-200">
          <List
            items={allFooterTopNavLinks}
            renderItem={({ name, categoryLinks }) => (
              <div key={name} className="flex flex-col w-full ">
                <SmallFooterCategory
                  name={name}
                  categoryLinks={categoryLinks}
                />
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default SmallFooter;
