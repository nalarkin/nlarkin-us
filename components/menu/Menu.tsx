import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import style from './Menu.module.css';
import classNames from 'classnames';
import { headerCategoryLinks } from '../../links';
import { List } from '../list';
import Link from 'next/link';
import { useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

const Menu = () => {
  const [isActive, setMenu] = useState<boolean>(false);

  const btnClass = classNames([{ btn: isActive }, { btn: !isActive }]);

  const handleClick = () => {
    setMenu(!isActive);
  };
  const button = (
    <button className='' onClick={() => handleClick()}>
      <div className='mr-3 py-2 pr-2 relative '>
        <FiMenu size={18} className={isActive ? style.btn : ''} />
      </div>
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
              <li key={url} className='list-none font-semibold font-sans '>
                <Link href={url} key={text}>
                  <a
                    className=' py-1 flex hover:bg-gray-100 '
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
    <div className='hidden xl:flex'>
      {isActive ? content : null}
      {button}
    </div>
  );
};

export default Menu;
