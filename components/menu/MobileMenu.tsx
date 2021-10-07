import React, { useState } from 'react';

import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';

import { allFooterTopNavLinks } from '../../links';
import SearchBar from '../search/SearchBar';
import { List } from '../shared/list';
import style from './MobileMenu.module.scss';

const MobileMenu = () => {
  const [isActive, setMenu] = useState<boolean>(false);

  // const btnClass = classNames([{ btn: isActive }, { btn: !isActive }]);

  const handleClick = () => {
    setMenu(!isActive);
  };
  const button = (
    <button className={style.btn} onClick={() => handleClick()}>
      <FiMenu size={18} className={isActive ? style.btnAnimation : ''} />
    </button>
  );

  const closeButton = (
    <button className={style.exit} onClick={() => handleClick()}>
      <GrClose size={22} />
    </button>
  );

  const content = (
    <div className={style.menu}>
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
            renderItem={({ name, categoryLinks }): JSX.Element => {
              return (
                <div className="flex flex-col w-full" key={name}>
                  <div className={style.sectionTitle}> {name}</div>
                  <ul className={style.sectionGrid}>
                    <List
                      items={categoryLinks}
                      renderItem={([text, url]) => (
                        <li key={url} className="list-none font-sans ">
                          <Link href={url} key={text}>
                            <a
                              className={style.sectionLink}
                              onClick={() => handleClick()}
                            >
                              {text}
                            </a>
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
    <div className="flex lg:hidden">
      {isActive ? content : null}
      {button}
    </div>
  );
};

export default MobileMenu;
