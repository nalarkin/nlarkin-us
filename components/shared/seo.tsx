import Head from 'next/head';

export type SEOProps = {
  description: string;
  title?: string;
};

export default function SEO({ description, title }: SEOProps) {
  const siteName = 'nlarkin.us';
  return (
    <Head>
      <title>{`${title} | ${siteName}`}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Nathan Larkin" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="nlarkin.us" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Head>
  );
}
