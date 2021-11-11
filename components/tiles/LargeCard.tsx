import React from 'react';

import Link from 'next/link';

import { ImageBuilder } from 'components/shared/ImageBuilder';
import type { ArticleDetailedImage } from 'lib/interfaces';

import style from './LargeCard.module.scss';

type ArticleWrapperProps = {
  slug: string;
  isImage?: boolean;
  children: React.ReactNode;
};

const ArticleLinkWrapper = ({ slug, children }: ArticleWrapperProps) => {
  return (
    <Link href={`/news/articles/${slug}`}>
      <a className={style.articleLink}>{children}</a>
    </Link>
  );
};

type ArticleCardProps = {
  article: ArticleDetailedImage;
};

const LargeArticleCard = ({ article }: ArticleCardProps) => {
  const { slug, title, excerpt, image } = article;
  return (
    <div className={style.container}>
      <ArticleLinkWrapper slug={slug ?? ''}>
        <div className={style.card}>
          <article className={style.text}>
            <div className={style.title}>{title}</div>
            <div className={style.excerpt}>{excerpt}</div>
          </article>
          <div className={style.image}>
            <ImageBuilder image={image} />
          </div>
        </div>
      </ArticleLinkWrapper>
    </div>
  );
};

export default LargeArticleCard;
