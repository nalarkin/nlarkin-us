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

if (
  process.env.NEXT_PUBLIC_API_MOCKING !== undefined &&
  typeof process.env.NEXT_PUBLIC_API_MOCKING === 'string'
) {
  // console.log('enabled mocks 1');
  // require('../mocks');
  // console.log('enabled mocks 2');
}
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
