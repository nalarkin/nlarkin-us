import React from 'react';

import Link from 'next/link';

import { Article } from 'interfaces';

import { ImageBuilder } from '../../shared/ImageBuilder';
import style from './SectionHero.module.scss';

type ArticleWrapperProps = {
  slug: string;
  children: React.ReactNode;
};

const ArticleLinkWrapper = ({ slug, children }: ArticleWrapperProps) => {
  return (
    <Link href={`/news/articles/${slug}`}>
      <a className={style.articleLink}>{children}</a>
    </Link>
  );
};

type Props = {
  articles?: Article[];
};

type CardProps = {
  article: Article;
};

const HeroTile = ({ article }: CardProps) => {
  return (
    // <div className={style.hero}>
    <>
      <div className={style.heroGrid}>
        <div className={style.heroText}>
          <ArticleLinkWrapper slug={article.slug}>
            <div className={style.heroTitle}>{article.title}</div>
            <div className={style.excerpt}>{article.excerpt}</div>
          </ArticleLinkWrapper>
        </div>
        <div className={style.heroImage}>
          {' '}
          <ImageBuilder image={article.image} />
        </div>
      </div>
    </>
  );
};

const SecondTile = ({ article }: CardProps) => {
  return (
    <div className={style.tile}>
      <div className={style.second}>
        <ArticleLinkWrapper slug={article.slug}>
          <div className={style.articleTile}> {article.title}</div>
        </ArticleLinkWrapper>
      </div>
    </div>
  );
};
const ThirdTile = ({ article }: CardProps) => {
  return (
    <div className={style.tile}>
      <div className={style.third}>
        <ArticleLinkWrapper slug={article.slug}>
          <div className={style.articleTile}>{article.title}</div>
        </ArticleLinkWrapper>
      </div>
    </div>
  );
};
const FourthChild = ({ article }: CardProps) => {
  return (
    // <div className={style.tile}>
    <div className={style.fourth}>
      <ArticleLinkWrapper slug={article.slug}>
        <div className={style.articleTile}>{article.title}</div>
        <div className={style.excerpt}>{article.excerpt}</div>
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
        {/* <div className={style.third}>third</div> */}
        {/* <div className={style.fourth}>fourth</div> */}
      </div>
    </div>
  );
};

export default SectionHero;
