import React, { useId, useRef, useState } from 'react';

import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';

import { allFooterTopNavLinks } from 'lib/links';

import SearchBar from '../search/SearchBar';
import { List } from '../shared/list';
import style from './MobileMenu.module.scss';

const MobileMenu = () => {
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

  const closeButton = (
    <button
      type="button"
      aria-label="Close news menu"
      className={style.exit}
      onClick={closeMenu}
    >
      <GrClose size={22} />
    </button>
  );

  const content = (
    <div id={menuId} className={style.menu}>
      <div className="">
        <div className={style.navBar}>
          <div>
            <div className={style.title}>The Nathan Times</div>

            {closeButton}
          </div>
        </div>
        <div className={style.container}>
          <SearchBar submit={handleClick} />
          <List
            items={allFooterTopNavLinks}
            renderItem={({ name, categoryLinks }): React.JSX.Element => {
              return (
                <div className="flex flex-col w-full" key={name}>
                  <div className={style.sectionTitle}> {name}</div>
                  <ul className={style.sectionGrid}>
                    <List
                      items={categoryLinks}
                      renderItem={([text, url]) => (
                        <li key={url} className="list-none font-sans ">
                          <Link
                            href={url}
                            key={text}
                            className={style.sectionLink}
                            onClick={() => handleClick()}
                          >
                            {text}
                          </Link>
                        </li>
                      )}
                    />
                  </ul>
                </div>
              );
            }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex lg:hidden" onKeyDown={handleKeyDown}>
      {isActive ? content : null}
      {button}
    </div>
  );
};

export default MobileMenu;
