import React from 'react';

import { GetStaticProps, GetStaticPaths } from 'next';

import ArticleHeader from 'components/article/ArticleHeader';
import ArticleHeaderInfo from 'components/article/ArticleHeaderInfo';
import ArticleHeaderSocial from 'components/article/ArticleHeaderSocial';
import ArticleBody from 'components/body/ArticleBody';
import Disclaimer from 'components/disclaimer/disclaimer';
import ArticleLayout from 'components/layouts/ArticleLayout';
import { ImageBuilder } from 'components/shared/ImageBuilder';
import {
  articleQuery,
  ArticleQueryResult,
  articleSlugsQuery,
  ArticleSlugsResult,
} from 'lib/queries';
import { getClient } from 'lib/sanity.server';

import style from './article.module.scss';

/**
 * Fake data generator
 * https://www.plot-generator.org.uk/fairytale/
 *
 * Headline generator
 * https://www.plot-generator.org.uk/headlines/
 */

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  let slug = params?.slug;
  if (Array.isArray(slug)) {
    slug = slug[0] ?? '';
  }
  if (slug === undefined) {
    slug = '';
  }
  const queryParams = { slug };

  const result = await getClient(preview).fetch<ArticleQueryResult>(
    articleQuery,
    queryParams
  );
  // console.log(`slug: ${slug}  result: ${JSON.stringify(result)}`);

  // const result = await getArticleData(slug);

  return {
    props: {
      preview,
      data: result,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getClient(false).fetch<ArticleSlugsResult | undefined>(
    articleSlugsQuery
  );
  if (paths === null) {
    throw Error('paths was null');
  } else if (paths === undefined) {
    throw Error('paths was undefined');
  }
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: false,
  };
};

// const NewsSEO = {
//   description:
//     'This is a purely educational attempt to clone of the New York Times. Disclaimer....',
//   title: "Nathan's News",
// };

export default function ArticlePage({
  data,
}: {
  data: ArticleQueryResult | undefined;
  preview: boolean;
}) {
  if (data === undefined) {
    return <div></div>;
  }
  const { title, text, authors, date, image } = data;
  return (
    <div>
      <ArticleLayout>
        <div className="flex flex-col ">
          {/* optional hero here with title over image */}
          <div className={style.image}>
            <ImageBuilder image={image} />
          </div>
          <h1 className="text-xl font-bold mt-5 mb-5 mx-auto">{title}</h1>
          <ArticleHeader authors={authors} />
          <div className={style.body}>
            <ArticleHeaderSocial />
            <ArticleHeaderInfo authors={authors} date={date} />
            <ArticleBody text={text} />
          </div>
          <Disclaimer />
        </div>
      </ArticleLayout>
    </div>
  );
}
