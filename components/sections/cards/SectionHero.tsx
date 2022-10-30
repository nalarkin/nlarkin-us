import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ArticleDetailedImage } from 'lib/interfaces';
import { buildArticleSlug } from 'lib/utils';

import style from './SectionHero.module.scss';

type ArticleWrapperProps = {
  slug?: string;
  children: React.ReactNode;
};

const ArticleLinkWrapper = ({ slug, children }: ArticleWrapperProps) => {
  return (
    <Link href={buildArticleSlug(slug ?? '')} className={style.articleLink}>
      {children}
    </Link>
  );
};

type Props = {
  articles?: ArticleDetailedImage[];
};

type CardProps = {
  article: ArticleDetailedImage;
};

const HeroTile = ({ article }: CardProps) => {
  const { slug, title, excerpt, image } = article;
  return (
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

const SecondTile = ({ article }: CardProps) => {
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
const ThirdTile = ({ article }: CardProps) => {
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
const FourthChild = ({ article }: CardProps) => {
  const { slug, title, excerpt } = article;

  return (
    // <div className={style.tile}>
    <div className={style.fourth}>
      <ArticleLinkWrapper slug={slug}>
        <div className={style.articleTile}>{title}</div>
        <div className={style.excerpt}>{excerpt}</div>
      </ArticleLinkWrapper>
    </div>

    // </div>
  );
};

const SectionHero = ({ articles }: Props) => {
  if (articles === undefined || articles.length < 4) {
    return <div></div>;
  }

  return (
    <div className={style.outerContainer}>
      <div className={style.container}>
        <div className={style.hero}>
          <HeroTile article={articles[0]} />
        </div>
        <div className={style.groupTwo}>
          <div className={style.groupThree}>
            <SecondTile article={articles[1]} />
            <ThirdTile article={articles[2]} />
          </div>
          <FourthChild article={articles[3]} />
        </div>
      </div>
    </div>
  );
};

export default SectionHero;
