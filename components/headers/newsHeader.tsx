import Link from 'next/link';
import React from 'react';
import { ImSearch } from 'react-icons/im';
import { FiMenu } from 'react-icons/fi';
import style from './newsHeader.module.css';
import { IoMdPerson } from 'react-icons/io';
import List from '../list';
import { headerCategoryLinks } from '../../links';
import NewsButton from '../newsButton';

const CurrentDate = () => {
  return (
    <div className=' font-bold text-xs '>Wednesday, September 22, 2021</div>
  );
};

/** View transforms between screensize xl and lg */
const TopNavigationBar = () => {
  return (
    <>
      <div className={style.topNav}>
        <div className='flex items-center'>
          <div className='mr-3 py-2 pr-2'>
            <FiMenu size={18} />
          </div>
          <div className='mr-3 hidden xl:flex p-2'>
            <ImSearch size={15} />
          </div>
        </div>
        <div>
          <h1 className='font-bold block xl:hidden text-3xl text-center font-serif'>
            The Nathan Times
          </h1>
          <div className=' justify-self-center hidden xl:flex'>
            <div className='w-80 flex justify-between'>
              <Link href='/news'>
                <a className='px-2 py-1 news-nav-link text-xs'>U.S</a>
              </Link>
              <Link href='/news/international'>
                <a className='px-2 py-1 news-nav-link text-xs'>INTERNATIONAL</a>
              </Link>
              <Link href='/news/canada'>
                <a className='px-2 py-1 news-nav-link text-xs'>CANADA</a>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className='hidden xl:flex'>
            <NewsButton>
              <div className='ml-auto text-xs font-bold'>log in</div>
            </NewsButton>
          </div>
          <div className='flex xl:hidden justify-end'>
            <Link href='profile'>
              <a className='news-nav-link px-2 py-1'>
                <IoMdPerson size={25} className='' />
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
  return (
    <>
      <div className={style.middleNav}>
        <div className='flex flex-col'>
          <div className=' hidden xl:flex flex-col '>
            <CurrentDate />
            <div className='text-xs '>Today’s Paper</div>
          </div>
        </div>

        <h1 className='font-bold hidden xl:block  xl:text-5xl text-center font-serif'>
          The Nathan Times
        </h1>
        <div className=''>
          <div className='hidden xl:flex flex-col text-right justify-around'>
            <div className='font-bold text-sm'>72° F73° 54°</div>
            <div className='text-sm'>Nasdaq +1.05%</div>
          </div>
        </div>
      </div>
    </>
  );
};

const BottomNavigationBar = () => {
  return (
    <>
      <div>
        <div className='hidden xl:flex'>
          <div className={style.bottomNav}>
            <ul className='hidden xl:flex flex-row text-sm justify-between w-full'>
              <List
                items={headerCategoryLinks}
                renderItem={([text, url]) => (
                  <li key={url}>
                    <Link href={url} key={text}>
                      <a className='px-1 py-2 news-nav-link'>{text}</a>
                    </Link>
                  </li>
                )}
              />
            </ul>
          </div>
        </div>
        <div className='flex xl:hidden justify-center border-t-2 border-b-2 border-gray-200 border-solid py-3'>
          <CurrentDate />
        </div>
      </div>
    </>
  );
};

const NewsHeader = () => {
  return (
    <>
      <div className={style.siteHeader}>
        <TopNavigationBar />
        {/* header 2 title, changes in small screen  */}
        <MiddleNavigationBar />
        {/* header 3 displays nav links if large, if small displays date */}
        <BottomNavigationBar />
      </div>
    </>
  );
};

export default NewsHeader;
