import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import type { ArticleDetailedImage } from 'lib/interfaces';

import style from './LargeCard.module.scss';

type ArticleWrapperProps = {
  slug: string;
  isImage?: boolean;
  children: React.ReactNode;
};

const ArticleLinkWrapper = ({ slug, children }: ArticleWrapperProps) => {
  return (
    <Link href={`/news/articles/${slug}`} className={style.articleLink}>
      {children}
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
            <Image {...image} placeholder="blur" />
          </div>
        </div>
      </ArticleLinkWrapper>
    </div>
  );
};

export default LargeArticleCard;
