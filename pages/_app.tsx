import '../styles/globals.css';
// import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { SEO } from '../appConfig';
import TagManager, { TagManagerArgs } from 'react-gtm-module';
import { useEffect } from 'react';
// import 'swiper/scss';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';
// import 'components/tiles/Carousel.scss';
import 'components/tiles/Swiper.scss';

function MyApp({ Component, pageProps }: AppProps) {
  // const tagManagerArgs: TagManagerArgs = {
  //   gtmId: 'GTM-TNXSPX5',
  // };
  // useEffect(() => {
  //   TagManager.initialize(tagManagerArgs);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
