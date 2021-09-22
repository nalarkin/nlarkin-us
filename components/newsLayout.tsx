import React, { ReactNode } from 'react';
import SEO, { SEOProps } from './seo';
import { NextPage } from 'next';
import style from './newsLayout.module.css';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import NavList, { NavListProps } from './navList';
import List from './list';

type Props = {
  seo: SEOProps;
  children?: ReactNode;
};

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

const NewsLayout = ({ seo, children }: Props) => {
  return (
    <div className={style.wrapper}>
      {/* SEO */}
      <SEO description={seo.description} title={seo.title} />
      {/* header 1 only seen in desktop */}
      <div className={style.siteHeader}>
        <div className={style.topNav}>
          <div className='hidden xl:flex items-center'>
            <div className='mr-3 py-2 pr-2'>
              <FiMenu />
            </div>
            <div className='mr-3 hidden xl:flex p-2'>
              <FaSearch />
            </div>
          </div>
          <div className=' justify-self-center hidden xl:flex'>
            <div className='w-80 flex justify-between'>
              <Link href='/news'>
                <a className='px-2 py-1 hover:focus:bg-gray-100 rounded-md'>
                  U.S
                </a>
              </Link>
              <Link href='/news/international'>
                <a className='px-2 py-1'>INTERNATIONAL</a>
              </Link>
              <Link href='/news/canada'>
                <a className='px-2 py-1'>CANADA</a>
              </Link>
            </div>
          </div>
          <div className='hidden xl:flex'>
            <div className='btn-blue ml-auto'>login</div>
          </div>
        </div>

        {/* header 2 title, changes in small screen  */}
        <div className={style.middleNav}>
          <div className=' flex-col justify-around'>
            <div className=' hidden xl:flex'>
              <div className='font-bold text-sm'>
                Wednesday, September 22, 2021
              </div>
              <div className='text-sm'>Today’s Paper</div>
            </div>
          </div>

          <h1 className='font-bold text-6xl  text-center'>The Nathan Times</h1>
          <div className='flex flex-col text-right justify-around'>
            <div>
              <div className='font-bold text-sm'>72° F73° 54°</div>
              <div className='text-sm'>Nasdaq +1.05%</div>
            </div>
          </div>
        </div>
        {/* header 3 displays nav links if large, if small displays date */}
        <div className={style.bottomNav}>
          <ul className='hidden xl:flex flex-row text-sm justify-between w-full'>
            <List
              items={headerCategories}
              renderItem={([text, url]) => (
                <li key={url}>
                  <Link href={url} key={text}>
                    <a className='px-2 py-2'>{text}</a>
                  </Link>
                </li>
              )}
            />
          </ul>
        </div>
      </div>
      {/* body with news content */}
      {children}
      {/* footer */}
      <div>footer here</div>
    </div>
  );
};

export default NewsLayout;
