import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

import NewsLayout from 'components/layouts/NewsLayout';
import LatestList from 'components/sections/latest/LatestList';
import { ImageBuilder } from 'components/shared/ImageBuilder';
import { authorQuery, AuthorQueryResult, authorSlugQuery } from 'lib/queries';
import { getClient } from 'lib/sanity.server';

import style from './author.module.scss';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getClient(false).fetch<Array<string> | undefined>(
    authorSlugQuery
  );
  if (paths === undefined) {
    throw Error(`Error. Paths within AuthorPage getStaticPaths was: ${paths}`);
  }
  return {
    paths: paths.map((author: string) => ({ params: { slug: author } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  if (params === undefined || params.slug === undefined) {
    throw Error(
      `getStaticProps is given params with undefined in AuthorPage. params was: ${JSON.stringify(
        params
      )}`
    );
  }
  let { slug } = params;
  if (Array.isArray(slug)) {
    [slug] = slug;
  }
  const queryParams = { slug };

  const result = await getClient(preview).fetch<AuthorQueryResult>(
    authorQuery,
    queryParams
  );
  return {
    props: {
      preview,
      data: result,
    },
  };
};

type PageProps = {
  data: AuthorQueryResult;
  preview?: boolean;
};

export default function AuthorPage({ data }: PageProps) {
  if (data === undefined) {
    return <div></div>;
  }

  const { name, bio, picture, articles } = data;
  const seo = {
    title: `${name} Author Page`,
  };
  return (
    <>
      <NextSeo {...seo} />
      <div className={style.bioContainer}>
        <div>
          <div className={style.profileImg}>
            <ImageBuilder image={picture} classes="rounded-full" />
            {/* <ImageCropBuilder image={picture} height={105} width={105} /> */}
          </div>
        </div>
        <div className={style.bioContent}>
          <h1 className={style.authorName}>{name}</h1>
          <h2 className={style.authorBioText}>
            <p>{bio}</p>
          </h2>
        </div>
      </div>
      <div className={style.latestList}>
        <LatestList articles={articles} />
      </div>
    </>
  );
}

AuthorPage.getLayout = function getLayout(page: React.ReactElement) {
  return <NewsLayout>{page}</NewsLayout>;
};
