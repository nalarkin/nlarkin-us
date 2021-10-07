import React, { useState } from 'react';

import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import OutsideClickHandler from 'react-outside-click-handler';

import { headerCategoryLinks } from '../../links';
import { List } from '../shared/list';
import style from './Menu.module.scss';

const Menu = () => {
  const [isActive, setMenu] = useState<boolean>(false);
  const handleClick = () => {
    setMenu(!isActive);
  };
  const button = (
    <button className={style.btn} onClick={() => handleClick()}>
      <FiMenu size={18} className={isActive ? style.btnAnimation : ''} />
    </button>
  );

  // function handleClosing(this: Document, ev: MouseEvent) {
  //   // if (e.target) {
  //   // }
  //   console.log(ev.target);
  // }

  // useEffect
  // useEffect(() => {
  //   document.addEventListener('click', handleClosing);
  // });
  const content = (
    <OutsideClickHandler
      onOutsideClick={() => {
        setMenu(false);
      }}
    >
      <div className={style.menu}>
        <List
          items={headerCategoryLinks}
          renderItem={([text, url]): JSX.Element => {
            return (
              <li key={url} className="list-none font-semibold font-sans ">
                <Link href={url} key={text}>
                  <a
                    className=" py-1 flex hover:bg-gray-100 "
                    onClick={() => handleClick()}
                  >
                    {text}
                  </a>
                </Link>
              </li>
            );
          }}
        />
      </div>
    </OutsideClickHandler>
  );

  return (
    <div className="hidden lg:flex">
      {isActive ? content : null}
      {button}
    </div>
  );
};

export default Menu;
