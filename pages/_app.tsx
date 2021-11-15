import '../styles/globals.css';
import '../styles/globals.scss';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

import { SEO } from '../appConfig';

import 'components/tiles/Swiper.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
