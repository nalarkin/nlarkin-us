import React, { useState } from 'react';

import classNames from 'classnames';
import Link from 'next/link';
import { ImSearch } from 'react-icons/im';
import { IoMdPerson } from 'react-icons/io';

import SearchBar from 'components/search/SearchBar';

import { buildSectionSlug } from '../../lib/utils';
import Menu from '../menu/Menu';
import MobileMenu from '../menu/MobileMenu';
import NewsButton from '../shared/newsButton';
import style from './MinimalHeader.module.scss';

type NavProps = {
  sectionTitle?: string;
  slug?: string;
  submit?: () => void;
};

const MinimalHeader = ({ submit, sectionTitle, slug }: NavProps) => {
  const [searchIsOpen, changeSearchStatus] = useState(false);
  const btnClass = classNames([
    style.searchBtn,
    { [style.activeMod]: searchIsOpen },
    { [style.inactiveMod]: !searchIsOpen },
  ]);

  let possibleSectionTitle: JSX.Element | null = null;
  if (sectionTitle) {
    possibleSectionTitle = (
      <div className={style.sectionTitle}>{sectionTitle}</div>
    );
    if (slug) {
      possibleSectionTitle = (
        <Link href={buildSectionSlug(slug)}>
          <a>{possibleSectionTitle}</a>
        </Link>
      );
    }
  }

  return (
    <header className="w-full">
      <div className={style.siteHeader}>
        <section className={style.topContainer}>
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
              <div className={''}>
                <ImSearch size={15} />
              </div>
            </button>
            <div className={style.responsiveSectionTitle}>
              {possibleSectionTitle}
            </div>
            <div className={style.searchBar}>
              {searchIsOpen ? <SearchBar submit={submit} /> : null}
            </div>
          </div>

          <div className={style.title}>
            <Link href="/news">
              <a>
                <h1 className="">The Nathan Times</h1>
              </a>
            </Link>
          </div>

          <div className={style.rightBtnGroup}>
            <div className={style.login}>
              <NewsButton>
                <div className="">log in</div>
              </NewsButton>
            </div>

            <Link href="/news/profile">
              <a className={style.profile}>
                <IoMdPerson size={25} />
              </a>
            </Link>
          </div>
        </section>
      </div>
      <section className={style.rowTwoContainer}>
        <Link href={'/news/login'}>
          <a className={style.tabletLogin}>log in</a>
        </Link>
      </section>
    </header>
  );
};

// const MinimalHeader = ({ submit, sectionTitle, slug }: NavProps) => {
//   return (
//     <>
//       <div className={style.siteHeader}>
//         <NavigationBar
//           submit={submit}
//           sectionTitle={sectionTitle}
//           slug={slug}
//         />
//       </div>
//     </>
//   );
// };

export default MinimalHeader;
