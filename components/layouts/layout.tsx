import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import style from './layout.module.css';
import SEO from '../shar../shared/seo';
import { SEOProps } from '../shar../shared/seo';

type Props = {
  seo: SEOProps;
  children?: ReactNode;
};

const Layout = ({ seo, children }: Props) => (
  <>
    {/* <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />

      <meta
        property='og:title'
        name='viewport'
        content='initial-scale=1.0, width=device-width'
      />
    </Head> */}
    <SEO description={seo.description} title={seo.title} />
    <div className={style.wrapper}>
      <header className=''>
        <nav className='flex flex-row justify-between'>
          <Link href='/'>
            <a className='nav-link'>Nathan&apos;s website</a>
          </Link>
          <Link href='/about'>
            <a className='nav-link'>About</a>
          </Link>
        </nav>
      </header>
      {children}

      <footer className={style.footer}>
        <div className='flex flex-col pl-5 pb-5'>
          <div>Designed and created by Nathan Larkin</div>
          <div>blah blah blah...</div>
        </div>
        <div></div>
        <address className='flex flex-col pr-5'>
          <div>nlarkin.us@gmail.com</div>
          <div>Nathan Larkin</div>
        </address>
      </footer>
    </div>
  </>
);

export default Layout;
