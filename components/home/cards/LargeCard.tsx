import React from 'react';

import Link from 'next/link';

import type { Article } from 'interfaces';

import { ImageBuilder } from '../../shared/ImageBuilder';
import style from './LargeCard.module.scss';

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
  article: Article;
};

const LargeArticleCard = ({ article }: ArticleCardProps) => {
  const { slug, title, excerpt, image } = article;
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
