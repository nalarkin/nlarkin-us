import React from 'react';
import style from './LargeCard.module.scss';
import Link from 'next/link';
import { ImageBuilder } from '../../ImageBuilder';
import * as Schema from '../../../lib/schema';

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
            <div className={style.excerpt}>{excerpt}</div>
          </ArticleLinkWrapper>
        </article>
        <div className={style.image}>
          <ArticleLinkWrapper slug={slug} isImage={true}>
            <ImageBuilder image={image} />
          </ArticleLinkWrapper>
        </div>
      </div>
    </div>
  );
};

export default LargeArticleCard;
