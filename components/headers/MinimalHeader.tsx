import Link from 'next/link';
import React from 'react';
import { ImSearch } from 'react-icons/im';
import { FiMenu } from 'react-icons/fi';
import style from './MinimalHeader.module.scss';
import { IoMdPerson } from 'react-icons/io';
import { List } from '../list';
import { headerCategoryLinks } from '../../links';
import NewsButton from '../newsButton';
import Menu from '../menu/Menu';
import DateComponent from '../Date';
import MobileMenu from '../menu/MobileMenu';

const CurrentDate = () => {
  const currentDate = new Date();

  return (
    <div className=''>
      <DateComponent dateString={currentDate.toISOString()} />
    </div>
  );
};

/** View transforms between screensize xl and lg */
const NavigationBar = () => {
  return (
    <div className={style.headerContainer}>
      <div className={style.leftBtnGroup}>
        <div className={style.menuBtn}>
          <Menu />
          <MobileMenu />
        </div>
        <div className={style.searchBtn}>
          <ImSearch size={15} />
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

const MinimalHeader = () => {
  return (
    <>
      <div className={style.siteHeader}>
        <NavigationBar />
      </div>
    </>
  );
};

export default MinimalHeader;
