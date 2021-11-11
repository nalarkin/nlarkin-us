import React from 'react';

import { footerBottomLinks, allFooterTopNavLinks } from 'lib/links';

import { List } from '../shared/list';
import style from './footer.module.scss';
import { FooterLinkBottom, FooterLinkTop } from './footerLink';

// { name: 'Subscribe', categoryLinks: footerSubscribeLinksTop },
// { name: '', categoryLinks: footerSubscribeLinksBottom },

const FooterUpper = () => {
  return (
    <div className="block ">
      <div className={style.container}>
        <div className="flex flex-col w-full   justify-center items-center flex-wrap">
          <div className="flex text-center w-max text-xs text-gray-800 "></div>
          <div className="flex flex-row justify-between flex-wrap items-baseline text-gray-600 w-full mb-3">
            <List
              items={allFooterTopNavLinks}
              renderItem={({ name, categoryLinks }) => (
                <div key={name}>
                  <div className="font-bold uppercase text-xs text-gray-900 mb-2 mt-5">
                    {name && name}
                  </div>
                  <ul>
                    <List
                      items={categoryLinks}
                      renderItem={([text, url]) => (
                        <li key={url}>
                          <FooterLinkTop text={text} url={url} />
                        </li>
                      )}
                    />
                  </ul>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FooterLower = () => {
  return (
    <div className="mb-10">
      <div className={style.container}>
        <div className="flex flex-col w-full   justify-center items-center flex-wrap">
          <div className="flex text-center w-max text-xs text-gray-600 mb-2 ">
            &copy; 2021 The Nathan Times Company
          </div>
          <ul className="flex flex-row justify-around flex-wrap items-center text-gray-700 w-full ">
            <List
              items={footerBottomLinks}
              renderItem={([text, url]) => (
                <li key={url}>
                  <FooterLinkBottom text={text} url={url} />
                </li>
              )}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

const FooterHeader = () => {
  return (
    <div className={style.container}>
      <div className="font-serif font-bold text-xl flex flex-row border-t-2 border-double border-gray-400  ">
        The Nathan Times
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="">
      <FooterHeader /> <FooterUpper /> <FooterLower />
    </footer>
  );
};

export default Footer;
