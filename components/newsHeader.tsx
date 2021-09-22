import Link from 'next/link';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import style from './newsHeader.module.css';
import { IoMdPerson } from 'react-icons/io';
import List from './list';

type links = [string, string];

const headerCategories: links[] = [
  ['World', '/world'],
  ['U.S.', '/'],
  ['Politics', '/politics'],
  ['N.Y.', '/ny'],
  ['Business', '/business'],
  ['Opinion', '/opinion'],
  ['Tech', '/tech'],
  ['Science', '/science'],
  ['Health', '/health'],
  ['Sports', '/sports'],
  ['Arts', '/arts'],
  ['Books', '/books'],
  ['Business', '/business'],
  ['Style', '/style'],
  ['Food', '/food'],
  ['Travel', '/travel'],
  ['T Magazine', '/t-magazine'],
  ['Real Estate', '/real-estate'],
  ['Video', '/video'],
];

/** View transforms between screensize xl and lg */
const TopNavigationBar = () => {
  return (
    <>
      <div className={style.topNav}>
        <div className='flex items-center'>
          <div className='mr-3 py-2 pr-2'>
            <FiMenu />
          </div>
          <div className='mr-3 hidden xl:flex p-2'>
            <FaSearch />
          </div>
        </div>
        <div>
          <h1 className='font-bold block xl:hidden text-3xl text-center font-serif'>
            The Nathan Times
          </h1>
          <div className=' justify-self-center hidden xl:flex'>
            <div className='w-80 flex justify-between'>
              <Link href='/news'>
                <a className='px-2 py-1 news-nav-link'>U.S</a>
              </Link>
              <Link href='/news/international'>
                <a className='px-2 py-1 news-nav-link'>INTERNATIONAL</a>
              </Link>
              <Link href='/news/canada'>
                <a className='px-2 py-1 news-nav-link'>CANADA</a>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className='hidden xl:flex'>
            <div className='btn-blue ml-auto'>login</div>
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
          <div className=' flex flex-col'>
            <div className=' font-bold text-sm '>
              Wednesday, September 22, 2021
            </div>
            <div className=' '>Today’s Paper</div>
          </div>
        </div>

        <h1 className='font-bold hidden xl:block  xl:text-6xl text-center font-serif'>
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
      <div className={style.bottomNav}>
        <ul className='hidden xl:flex flex-row text-sm justify-between w-full'>
          <List
            items={headerCategories}
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
