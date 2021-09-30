import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import style from './MobileMenu.module.css';
import classNames from 'classnames';
import { headerCategoryLinks, allFooterTopNavLinks } from '../../links';
import { List } from '../list';
import Link from 'next/link';
import { useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { GrClose } from 'react-icons/gr';
import SearchBar from '../search/SearchBar';

const MobileMenu = () => {
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

  const closeButton = (
    <button className={style.exit} onClick={() => handleClick()}>
      <GrClose size={22} />
    </button>
  );

  const content = (
    <div className={style.menu}>
      <div className=''>
        <div className={style.navBar}>
          <div>
            <div className={style.title}>The Nathan Times</div>

            {closeButton}
          </div>
        </div>
        <div className={style.container}>
          <SearchBar />
          <List
            items={allFooterTopNavLinks}
            renderItem={({ name, categoryLinks }): JSX.Element => {
              return (
                <div className='flex flex-col w-full'>
                  <div className={style.sectionTitle}> {name}</div>
                  <ul className={style.sectionGrid}>
                    <List
                      items={categoryLinks}
                      renderItem={([text, url]) => (
                        <li key={url} className='list-none font-sans '>
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
    <div className='flex lg:hidden'>
      {isActive ? content : null}
      {button}
    </div>
  );
};

export default MobileMenu;
