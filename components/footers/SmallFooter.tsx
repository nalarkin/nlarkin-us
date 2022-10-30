import React, { useEffect, useState } from 'react';

import classNames from 'classnames';
import Link from 'next/link';

import { FooterCategory, allFooterTopNavLinks, SiteLink } from 'lib/links';

import { List } from '../shared/list';
import style from './SmallFooter.module.scss';

type Props = {
  text: string;
  url: string;
  onClick: () => void;
};

const FooterLink = ({ text, url, onClick }: Props) => {
  return (
    <Link
      href={url}
      key={text}
      onClick={() => onClick()}
      className=" text-sm  flex hover:underline focus:underline text-black "
    >
      {text}
    </Link>
  );
};

type FooterGroups = {
  [index: string]: boolean;
};
function buildInitialState(arr: FooterCategory[]) {
  const newObject: FooterGroups = {};
  arr.forEach(({ name }) => {
    newObject[name] = false;
  });
  return newObject;
}

const initialState = buildInitialState(allFooterTopNavLinks);

type CategoryProps = {
  name: string;
  categoryLinks: SiteLink[];
  handleClick: (val: string, x: boolean) => void;
  isOpen: boolean;
};

const SmallFooterCategory = ({
  name,
  categoryLinks,
  handleClick,
  isOpen,
}: CategoryProps) => {
  useEffect(() => {
    return () => {};
  }, [isOpen]);

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
  const clickedHeader = (
    _e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    handleClick(name, !isOpen);
  };

  return (
    <div className="flex flex-col w-full">
      <button onClick={clickedHeader} className={categoryClass}>
        {name && name}
      </button>
      {isOpen ? (
        <ul className="flex flex-row flex-wrap pb-4">
          <List
            items={categoryLinks}
            renderItem={([text, url]) => (
              <li key={url} className="w-6/12 ">
                <FooterLink text={text} url={url} onClick={() => null} />
              </li>
            )}
          />
        </ul>
      ) : null}
    </div>
  );
};

const SmallFooter = () => {
  const [categoriesOpenState, setCategoriesState] = useState(initialState);

  const handleClick = (categoryName: string, isOpen: boolean) => {
    if (!isOpen) {
      setCategoriesState(initialState);
    } else {
      const copyCategories = {
        ...initialState,
      };
      copyCategories[categoryName] = isOpen;
      setCategoriesState(copyCategories);
    }
  };

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
                  handleClick={handleClick}
                  categoryLinks={categoryLinks}
                  isOpen={categoriesOpenState[name]}
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
