import React, { useId, useRef, useState } from 'react';

import ClickAwayListener from '@mui/material/ClickAwayListener';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';

import { headerCategoryLinks } from 'lib/links';

import { List } from '../shared/list';
import style from './Menu.module.scss';

const Menu = () => {
  const [isActive, setMenu] = useState<boolean>(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeMenu = () => {
    setMenu(false);
    buttonRef.current?.focus();
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape' && isActive) {
      event.preventDefault();
      closeMenu();
    }
  };
  const handleClick = () => {
    setMenu((active) => !active);
  };
  const button = (
    <button
      type="button"
      ref={buttonRef}
      className={style.btn}
      aria-label="Toggle news menu"
      aria-expanded={isActive}
      aria-controls={isActive ? menuId : undefined}
      onClick={handleClick}
    >
      <FiMenu size={18} className={isActive ? style.btnAnimation : ''} />
    </button>
  );

  const content = (
    <ClickAwayListener
      onClickAway={() => {
        setMenu(false);
      }}
    >
      <div id={menuId} className={style.menu}>
        <List
          items={headerCategoryLinks}
          renderItem={([text, url]): React.JSX.Element => {
            return (
              <li key={url} className="list-none font-semibold font-sans ">
                <Link
                  href={url}
                  key={text}
                  className=" py-1 flex hover:bg-gray-100 "
                  onClick={() => handleClick()}
                >
                  {text}
                </Link>
              </li>
            );
          }}
        />
      </div>
    </ClickAwayListener>
  );

  return (
    <div className="hidden lg:flex" onKeyDown={handleKeyDown}>
      {isActive ? content : null}
      {button}
    </div>
  );
};

export default Menu;
