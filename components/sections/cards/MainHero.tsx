import React from 'react';

import Image from 'components/shared/NewsImage';
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
    <Link href={`/news/articles/${slug}`} className={style.articleLink}>
      {children}
    </Link>
  );
};

type Props = {
  data: CategoryHero;
  preload?: boolean;
};

type CardProps = {
  article: ArticleDetailedImage;
  preload: boolean;
};

const HeroTile = ({ article, preload }: CardProps) => {
  const { image, excerpt, slug, title } = article;
  return (
    <>
      <ArticleLinkWrapper slug={slug}>
        <div className={style.heroGrid}>
          <div className={style.heroText}>
            <div className={style.heroTitle}>{title}</div>
            <div className={style.excerpt}>{excerpt}</div>
          </div>
          <div className={style.heroImage}>
            <Image
              {...image}
              alt={image.alt}
              style={{ maxWidth: '100%', height: 'auto' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 57vw, 480px"
              preload={preload}
            />
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

const MainHero = ({ data, preload = false }: Props) => {
  const { main, sideArticles } = data.articles;
  const [second, third, fourth] = sideArticles;
  return (
    <div className={style.outerContainer}>
      <div className={style.container}>
        <div className={style.hero}>
          <HeroTile article={main} preload={preload} />
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
