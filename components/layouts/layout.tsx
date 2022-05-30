/* eslint-disable unused-imports/no-unused-imports */
import React, { ReactNode } from 'react';

import SEO, { SEOProps } from 'components/shared/seo';

import { HomeLayout } from './HomeLayout';
import ToggleColorMode from '@/styles/theme';

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
