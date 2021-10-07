import React from 'react';

import Link from 'next/link';

import * as Schema from '../../../lib/schema';
import { ImageBuilder } from '../../shared/ImageBuilder';
import style from './LargeCardCaption.module.scss';

type ArticleWrapperProps = {
  slug: string;
  isImage?: boolean;
  children: React.ReactNode;
};

const ArticleLinkWrapper = ({
  slug,
  isImage = false,
  children,
}: ArticleWrapperProps) => {
  return (
    <Link href={`/news/articles/${slug}`}>
      <a className={isImage ? '' : style.articleLink}>{children}</a>
    </Link>
  );
};
type ArticleCardProps = {
  title?: string;
  excerpt: string;
  authors: Array<Pick<Schema.Author, 'name'> & { slug: string }>;
  image: Schema.ArticleImage | undefined;
  slug: string;
};

const LargeArticleCard = ({
  title,
  excerpt,
  image,
  slug,
}: ArticleCardProps) => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <article className={style.text}>
          <ArticleLinkWrapper slug={slug}>
            <div className={style.title}>{title}</div>
          </ArticleLinkWrapper>
          <ArticleLinkWrapper slug={slug}>
            <div className={style.excerpt}>{excerpt}</div>
          </ArticleLinkWrapper>
        </article>
        <div className={style.image}>
          <ArticleLinkWrapper slug={slug} isImage={true}>
            <ImageBuilder image={image} />
          </ArticleLinkWrapper>
        </div>
        <div className={style.caption}>{image?.caption}</div>
      </div>
    </div>
  );
};

export default LargeArticleCard;
