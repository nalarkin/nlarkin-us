import React, { ReactNode } from 'react';

import Link from 'next/link';

import SEO, { SEOProps } from 'components/shared/seo';

import style from './layout.module.scss';

type Props = {
  seo: SEOProps;
  children?: ReactNode;
};

const Layout = ({ seo, children }: Props) => (
  <>
    <SEO description={seo.description} title={seo.title} />
    <div className={style.wrapper}>
      <header className={style.nav}>
        <nav className="flex flex-row">
          <Link href="/">
            {/* <a>Nathan&apos;s website</a> */}
            <a className={style.logoText}>
              <div>NL</div>
              <div className={style.lowercase}>ARKIN</div>
            </a>
          </Link>
          {/* <Link href="/about">
            <a>About</a>
          </Link> */}
        </nav>
      </header>
      {children}

      <footer className={style.footer}>
        <div className="flex flex-col pl-5 pb-5">
          <div>Designed and created by Nathan Larkin</div>
        </div>
        <div></div>
        <address className="flex flex-col pr-5">
          Nathan Larkin <br />
          <a href="mailto:nlarkin.us@gmail.com">nlarkin.us@gmail.com </a>
          <br />
          <a href="tel:7045334302">(704) 533-4302</a>
          <br />
          <a href="https://github.com/nalarkin">Link to my GitHub</a>
        </address>
      </footer>
    </div>
  </>
);

export default Layout;
