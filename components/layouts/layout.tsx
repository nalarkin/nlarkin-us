/* eslint-disable unused-imports/no-unused-imports */
import React, { ReactNode } from 'react';

import ToggleColorMode from 'components/mui/theme';
import SEO, { SEOProps } from 'components/shared/seo';

import { HomeLayout } from './HomeLayout';

type Props = {
  seo?: SEOProps;
  children?: ReactNode;
};

const Layout = ({ seo, children }: Props) => (
  <>
    {seo && <SEO description={seo.description} title={seo.title} />}
    <ToggleColorMode>
      <HomeLayout>{children}</HomeLayout>
    </ToggleColorMode>
  </>
);

export default Layout;
