import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'components/tiles/Swiper.scss';
import type { ReactElement, ReactNode } from 'react';

import type { NextPage } from 'next';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

import { SEO } from '../appConfig';
import '../styles/globals.css';
import '../styles/globals.scss';

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
