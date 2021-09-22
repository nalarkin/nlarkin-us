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
      <div className='hidden xl:flex mt-5'>
        <FiMenu className='mr-5 ml-5' />
        <FaSearch className='mr-5 hidden xl:flex' />
        <div className='w-80 flex justify-between mx-auto'>
          <Link href='/news'>
            <a>U.S</a>
          </Link>
          <Link href='/news/international'>
            <a>INTERNATIONAL</a>
          </Link>
          <Link href='/news/canada'>
            <a>CANADA</a>
          </Link>
        </div>
        <div className='btn-blue mr-5'>login</div>
      </div>
      {/* header 2 title, changes in small screen  */}
      <div className={style.titleHeader}>
        <div className='flex flex-col bg-blue-500 ml-5 justify-around'>
          <div className=''>
            <div className='font-bold text-sm'>
              Wednesday, September 22, 2021
            </div>
            <div className='text-sm'>Today’s Paper</div>
          </div>
        </div>

        <h1 className='font-bold text-6xl bg-red-500 text-center'>
          The Nathan Times
        </h1>
        <div className='flex flex-col bg-blue-500 text-right justify-around'>
          <div>
            <div className='font-bold text-sm'>72° F73° 54°</div>
            <div className='text-sm'>Nasdaq +1.05%</div>
          </div>
        </div>
      </div>
      {/* header 3 displays nav links if large, if small displays date */}
      <div className=''>
        <ul className='hidden xl:flex flex-row text-sm bg-green-500 w-5/6 justify-between mx-auto'>
          <List
            items={headerCategories}
            renderItem={([text, url]) => (
              <li key={url}>
                <Link href={url} key={text}>
                  <a>{text}</a>
                </Link>
              </li>
            )}
          />
        </ul>
      </div>
      {/* body with news content */}
      {children}
      {/* footer */}
      <div>footer here</div>
    </div>
  );
};

export default NewsLayout;
