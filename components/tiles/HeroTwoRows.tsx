import React from 'react';

import Link from 'next/link';

import { ImageBuilder } from 'components/shared/ImageBuilder';
import { List } from 'components/shared/list';
import { ArticleDetailedImage } from 'lib/interfaces';

import { buildArticleSlug, editExcerptToSize } from '../../lib/utils';
import Carousel from './Carousel';
import style from './HeroTwoRows.module.scss';

type Props = {
  articles: ArticleDetailedImage[];
};

const RowBuilder = ({ articles }: Props) => {
  // const { title, image, authors, slug } = item;
  return (
    <div className={style.itemRowContainer}>
      <div className={style.listWrapper}>
        <List
          items={articles}
          renderItem={({ image, title, excerpt, slug, _id }) => {
            return (
              <section className={style.itemContainer} key={_id}>
                <Link href={buildArticleSlug(slug ?? '')}>
                  <a className={style.hover}>
                    <div className="w-full">
                      <ImageBuilder image={image} />
                    </div>
                    <div className={style.textContent}>
                      <h3 className={style.title}>{title}</h3>
                      <p className={style.excerpt}>
                        {' '}
                        {editExcerptToSize(excerpt)}
                      </p>
                    </div>
                  </a>
                </Link>
              </section>
            );
          }}
        />
      </div>
    </div>
  );
};

const HeroTwoRows = ({ articles }: Props) => {
  if (articles.length !== 5) {
    console.error(
      `You tried to create an ImageRow with ${articles.length} articles instead of 5.`
    );
    return <div></div>;
  }
  const firstArticle = articles[0];
  const columnTwoArticles = articles.slice(1, 3);
  const columnThreeArticles = articles.slice(3, 5);
  const carouselArticles = columnTwoArticles.concat(columnThreeArticles);

  return (
    <section className={style.container}>
      <div className={style.categoryHeader}>Section Category Here</div>
      <div className={style.sectionGrid}>
        <div className={style.tileHero}>
          <Link href={buildArticleSlug(firstArticle.slug ?? '')}>
            <a className={style.heroTileLink}>
              <div className="w-full">
                <ImageBuilder image={firstArticle.image} />
              </div>
              <div className={style.heroContent}>
                <div className={style.heroTitle}>{firstArticle.title}</div>
                <div className={style.heroExcerpt}>{firstArticle.excerpt}</div>
              </div>
            </a>
          </Link>
        </div>
        <div className={style.groupTwo}>
          <RowBuilder articles={columnTwoArticles} />
          <RowBuilder articles={columnThreeArticles} />
        </div>
      </div>
      <div className={style.carousel}>
        {/* <div className={style.container}> */}
        <Carousel articles={carouselArticles} />
        {/* </div> */}
      </div>
    </section>
  );
};

export default HeroTwoRows;
