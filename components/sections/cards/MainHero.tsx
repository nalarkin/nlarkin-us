import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import type { ArticleDetailedImage, CategoryHero } from 'lib/interfaces';
import { ArticleDetailed } from 'lib/interfaces';

import style from './MainHero.module.scss';

type ArticleWrapperProps = {
  slug?: string;
  children: React.ReactNode;
};

const ArticleLinkWrapper = ({ slug = '', children }: ArticleWrapperProps) => {
  return (
    <Link href={`/news/articles/${slug}`}>
      <a className={style.articleLink}>{children}</a>
    </Link>
  );
};

type Props = {
  data: CategoryHero;
};

type CardProps = {
  article: ArticleDetailedImage;
};

const HeroTile = ({ article }: CardProps) => {
  const { image, excerpt, slug, title } = article;
  // console.log(`${JSON.stringify(image, null, 2)}`);
  return (
    // <div className={style.hero}>
    <>
      <ArticleLinkWrapper slug={slug}>
        <div className={style.heroGrid}>
          <div className={style.heroText}>
            <div className={style.heroTitle}>{title}</div>
            <div className={style.excerpt}>{excerpt}</div>
          </div>
          <div className={style.heroImage}>
            {' '}
            <Image {...image} />
            {/* <ImageBuilder image={image} /> */}
          </div>
        </div>
      </ArticleLinkWrapper>
    </>
  );
};

type SideArticleProps = {
  article: ArticleDetailed;
};

const SecondTile = ({ article }: SideArticleProps) => {
  const { slug, title } = article;
  return (
    <div className={style.tile}>
      <div className={style.second}>
        <ArticleLinkWrapper slug={slug}>
          <div className={style.articleTile}> {title}</div>
        </ArticleLinkWrapper>
      </div>
    </div>
  );
};
const ThirdTile = ({ article }: SideArticleProps) => {
  const { slug, title } = article;
  return (
    <div className={style.tile}>
      <div className={style.third}>
        <ArticleLinkWrapper slug={slug}>
          <div className={style.articleTile}>{title}</div>
        </ArticleLinkWrapper>
      </div>
    </div>
  );
};
const FourthChild = ({ article }: SideArticleProps) => {
  const { slug, title, excerpt } = article;
  return (
    <div className={style.fourth}>
      <ArticleLinkWrapper slug={slug}>
        <div className={style.articleTile}>{title}</div>

        <div className={style.excerpt}>{excerpt}</div>
      </ArticleLinkWrapper>
    </div>
  );
};

const MainHero = ({ data }: Props) => {
  const { main, sideArticles } = data.articles;
  const [second, third, fourth] = sideArticles;
  return (
    <div className={style.outerContainer}>
      <div className={style.container}>
        <div className={style.hero}>
          <HeroTile article={main} />
        </div>
        <div className={style.groupTwo}>
          <div className={style.groupThree}>
            <SecondTile article={second} />
            <ThirdTile article={third} />
          </div>
          <FourthChild article={fourth} />
        </div>
      </div>
    </div>
  );
};

export default MainHero;
