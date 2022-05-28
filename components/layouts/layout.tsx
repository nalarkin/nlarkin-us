/* eslint-disable unused-imports/no-unused-imports */
import React, { ReactNode } from 'react';

import SEO, { SEOProps } from 'components/shared/seo';

import { HomeLayout } from './HomeLayout';
import ToggleColorMode from '@/styles/theme';

// import style from './layout.module.scss';

type Props = {
  seo?: SEOProps;
  children?: ReactNode;
};

// const Footer = () => {
//   return (
//     <footer className={style.footer}>
//       <div className="flex flex-col pl-5 pb-5">
//         <div>Designed and Created by Nathan Larkin</div>
//       </div>
//       <address className="flex flex-col pr-5 gap-2">
//         Nathan Larkin <br />
//         <a href="mailto:nlarkin.us@gmail.com">nlarkin.us@gmail.com </a>
//         <a href="tel:7045334302">(704) 533-4302</a>
//         <a href="https://github.com/nalarkin">Link to my GitHub</a>
//       </address>
//     </footer>
//   );
// };
// const Footer = () => {
//   return (
//     <footer className={style.footer}>
//       <div className="flex flex-col pl-5 pb-5">
//         <div>Designed and created by Nathan Larkin</div>
//       </div>
//       <div></div>
//       <address className="flex flex-col pr-5">
//         Nathan Larkin <br />
//         <a href="mailto:nlarkin.us@gmail.com">nlarkin.us@gmail.com </a>
//         <br />
//         <a href="tel:7045334302">(704) 533-4302</a>
//         <br />
//         <a href="https://github.com/nalarkin">Link to my GitHub</a>
//       </address>
//     </footer>
//   );
// };

const Layout = ({ seo, children }: Props) => (
  <>
    {seo && <SEO description={seo.description} title={seo.title} />}
    <ToggleColorMode>
      <HomeLayout>{children}</HomeLayout>
    </ToggleColorMode>
  </>
);

export default Layout;
