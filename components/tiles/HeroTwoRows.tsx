import style from './HeroTwoRows.module.scss';
import React from 'react';
import type { Article } from 'interfaces';
import { List } from 'components/shared/list';
import {
  getAuthorName,
  formatAuthors,
  buildArticleSlug,
} from '../../lib/utils';
import { ImageBuilder } from 'components/shared/ImageBuilder';
import { ImageCropBuilder } from 'components/shared/ImageCropBuilder';
import Link from 'next/link';
import Carousel from './Carousel';

type Props = {
  articles: Article[];
};

const RowBuilder = ({ articles }: Props) => {
  // const { title, image, authors, slug } = item;
  return (
    <div className={style.itemRowContainer}>
      <div className={style.listWrapper}>
        <List
          items={articles}
          renderItem={({ image, authors, title, excerpt, slug }) => {
            return (
              <div className={style.itemContainer}>
                <Link href={buildArticleSlug(slug)}>
                  <a className={style.imageContainer}>
                    <ImageBuilder image={image} />
                  </a>
                </Link>
                <Link href={buildArticleSlug(slug)}>
                  <a className={style.textContent}>
                    <div className={style.title}>{title}</div>
                    <div className={style.excerpt}> {excerpt}</div>
                  </a>
                </Link>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};

/** TODO: At  < laptop size, hero tile turns into 1 large card on top, and 4 items on carousel below with two tiles per screen
 * Can use this package to implement.
 * https://www.npmjs.com/package/react-responsive-carousel
 * At <tablet size, it just overflows with a scroll going to the right. I don't like this design.
 * Could either make the carousel hold more items off to the side, or could turn the Items into Column,
 * but would need excerpts to fill out image card (two columns, title + excerpt on left, image on right)
 *  */
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
          <Link href={buildArticleSlug(firstArticle.slug)}>
            <a className={style.heroTileLink}>
              <ImageBuilder image={firstArticle.image} />
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
