import Link from 'next/link';
import React, { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { FiMenu } from 'react-icons/fi';
import style from './MinimalHeader.module.scss';
import { IoMdPerson } from 'react-icons/io';
import { List } from '../shared/list';
import { headerCategoryLinks } from '../../links';
import NewsButton from '../shared/newsButton';
import Menu from '../menu/Menu';
import DateComponent from '../shared/Date';
import MobileMenu from '../menu/MobileMenu';
import SearchBar from 'components/search/SearchBar';
import classNames from 'classnames';

type NavProps = {
  submit?: () => void;
};

const NavigationBar = ({ submit }: NavProps) => {
  const [searchIsOpen, changeSearchStatus] = useState(false);
  const btnClass = classNames([
    style.searchBtn,
    { [style.activeMod]: searchIsOpen },
    { [style.inactiveMod]: !searchIsOpen },
  ]);

  return (
    <div className={style.headerContainer}>
      <div className={style.leftBtnGroup}>
        <div className={style.menuBtn}>
          <Menu />
          <MobileMenu />
        </div>
        <button
          className={btnClass}
          type='button'
          aria-label='search button'
          onClick={() => changeSearchStatus(!searchIsOpen)}
        >
          <div className={style.searchIcon}>
            <ImSearch size={15} />
          </div>
        </button>
        <div className={style.searchBar}>
          {searchIsOpen ? <SearchBar submit={submit} /> : null}
        </div>
      </div>
      <div className={style.title}>
        <Link href='/news'>
          <a>
            <h1 className=''>The Nathan Times</h1>
          </a>
        </Link>
      </div>

      <div className={style.rightBtnGroup}>
        <div className={style.login}>
          <NewsButton>
            <div className=''>log in</div>
          </NewsButton>
        </div>
        <div className={style.profile}>
          <Link href='/news/profile'>
            <a className=''>
              <IoMdPerson size={25} className='' />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const MinimalHeader = ({ submit }: NavProps) => {
  return (
    <>
      <div className={style.siteHeader}>
        <NavigationBar submit={submit} />
      </div>
    </>
  );
};

export default MinimalHeader;
