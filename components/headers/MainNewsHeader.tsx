import React, { useState } from 'react';

import classNames from 'classnames';
import Link from 'next/link';
import { ImSearch } from 'react-icons/im';
import { IoMdPerson } from 'react-icons/io';

import SearchBar from 'components/search/SearchBar';

import { headerCategoryLinks } from '../../links';
import Menu from '../menu/Menu';
import MobileMenu from '../menu/MobileMenu';
import DateComponent from '../shared/Date';
import { List } from '../shared/list';
import NewsButton from '../shared/newsButton';
import style from './MainNewsHeader.module.scss';

const CurrentDate = () => {
  const currentDate = new Date();

  return (
    <div className=" font-bold text-xs ">
      <DateComponent dateString={currentDate.toISOString()} />
    </div>
  );
};

/** View transforms between screensize xl and lg */
const TopNavigationBar = () => {
  const [searchIsOpen, changeSearchStatus] = useState(false);
  const btnClass = classNames([
    style.searchBtn,
    { [style.activeMod]: searchIsOpen },
    { [style.inactiveMod]: !searchIsOpen },
  ]);
  const bigTitleClass = classNames([
    'font-bold',
    'block',
    style.title,
    'text-center',
    'font-serif',
  ]);

  // const imgClass = classNames(['mr-3', 'p-2', style.hideIfSmall]);
  const headerBanners = classNames(['justify-self-center', style.hideIfSmall]);
  // const profileClass = classNames(['flex', 'justify-end', style.hideIfLarge]);
  return (
    <>
      <div className={style.topNav}>
        <div className={style.leftBtnGroup}>
          <div className={style.menuBtn}>
            <Menu />
            <MobileMenu />
          </div>
          <button
            className={btnClass}
            type="button"
            aria-label="search button"
            onClick={() => changeSearchStatus(!searchIsOpen)}
          >
            <div className={style.searchIcon}>
              <ImSearch size={15} />
            </div>
          </button>
          <div className={style.searchBar}>
            {searchIsOpen ? <SearchBar /> : null}
          </div>
        </div>
        <div>
          <Link href="/news">
            <a>
              <h1 className={bigTitleClass}>The Nathan Times</h1>
            </a>
          </Link>
          <div className={headerBanners}>
            <div className="w-80 flex justify-between font-sans">
              <Link href="/news/u-s">
                <a className="px-2 py-1 news-nav-link text-xs">U.S</a>
              </Link>
              <Link href="/news/international">
                <a className="px-2 py-1 news-nav-link text-xs">INTERNATIONAL</a>
              </Link>
              <Link href="/news/canada">
                <a className="px-2 py-1 news-nav-link text-xs">CANADA</a>
              </Link>
            </div>
          </div>
        </div>

        <div className={style.rightBtnGroup}>
          <div className={style.login}>
            <NewsButton>
              <div className="">log in</div>
            </NewsButton>
          </div>
          <div className={style.profile}>
            <Link href="/news/profile">
              <a className="">
                <IoMdPerson size={25} className="" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

/** TODO:Fix wrapping on left side (large view)
 * View transforms between screensize xl and lg
 */
const MiddleNavigationBar = () => {
  const stockClass = classNames([
    'flex',
    'flex-col',
    style.hideIfSmall,
    'text-right',
    'justify-around',
  ]);
  const bigTitleClass = classNames([
    'font-bold',
    style.hideIfSmall,
    'text-5xl',
    'text-center',
    'font-serif',
  ]);
  const dateClass = classNames(['flex', 'flex-col', style.hideIfSmall]);
  return (
    <>
      <div className={style.middleNav}>
        <div className="flex flex-col">
          <div className={dateClass}>
            <CurrentDate />
            <div className="text-xs ">Today’s Paper</div>
          </div>
        </div>
        <Link href="/news">
          <a>
            <h1 className={bigTitleClass}>The Nathan Times</h1>
          </a>
        </Link>

        <div className="">
          <div className={stockClass}>
            <div className="font-bold text-sm">72° F73° 54°</div>
            <div className="text-sm">Nasdaq +1.05%</div>
          </div>
        </div>
      </div>
    </>
  );
};

const LoginButton = () => {
  return (
    <Link href="news/login">
      <a className={style.loginBtn}>log in</a>
    </Link>
  );
};

const BottomNavigationBar = () => {
  const navList = classNames([style.navList, 'justify-between', 'w-full']);
  return (
    <>
      <div>
        <div className={style.hideIfSmall}>
          <div className={style.bottomNav}>
            <ul className={navList}>
              <List
                items={headerCategoryLinks}
                renderItem={([text, url]): JSX.Element => {
                  return (
                    <li key={url}>
                      <Link href={url} key={text}>
                        <a className="px-1 py-2 news-nav-link text-xxs">
                          {text}
                        </a>
                      </Link>
                    </li>
                  );
                }}
              />
            </ul>
          </div>
        </div>
        <div className={style.mobileHeader2}>
          <CurrentDate />
          <LoginButton />
        </div>
      </div>
    </>
  );
};

const NewsHeader = () => {
  return (
    <>
      <div className="block">
        <div className={style.siteHeader}>
          <TopNavigationBar />
          {/* header 2 title, changes in small screen  */}
          <MiddleNavigationBar />
          {/* header 3 displays nav links if large, if small displays date */}
          <BottomNavigationBar />
        </div>
      </div>
    </>
  );
};

export default NewsHeader;
