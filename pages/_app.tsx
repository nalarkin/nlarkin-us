import '../styles/globals.css';
import '../styles/globals.scss';
import type { ReactElement, ReactNode } from 'react';

import type { NextPage } from 'next';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

import { SEO } from '../appConfig';
import 'components/tiles/Swiper.scss';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ??
    ((page) => (
      <>
        <DefaultSeo {...SEO} />
        {page}
      </>
    ));
  return getLayout(<Component {...pageProps} />);
}
export default MyApp;
