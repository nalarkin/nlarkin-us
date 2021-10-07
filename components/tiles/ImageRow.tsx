import React from 'react';

import Link from 'next/link';

import { ImageCropBuilder } from 'components/shared/ImageCropBuilder';
import { List } from 'components/shared/list';
import type { Article } from 'interfaces';

import {
  getAuthorName,
  formatAuthors,
  buildArticleSlug,
} from '../../lib/utils';
import style from './ImageRow.module.scss';

type Props = {
  articles: Article[];
};

const ImageTile = ({ item }: { item: Article }) => {
  const { title, image, authors, slug } = item;
  return (
    <div className={style.itemColumnContainer}>
      <div className={style.imageContainer}>
        <Link href={buildArticleSlug(slug)}>
          <a>
            <ImageCropBuilder image={image} width={300} height={200} />
          </a>
        </Link>
        {/* <ImageBuilder image={image} /> */}
        <div className={style.authors}>
          {formatAuthors(authors, getAuthorName)}
        </div>
      </div>
      <Link href={buildArticleSlug(slug)}>
        <a className={style.title}>
          <div className="">{title}</div>
        </a>
      </Link>
    </div>
  );
};

/** TODO: At >tablet < laptop size, row of 5 items turns into a carousel
 * with 3 items on home page, two viewable with carousel. Can use this package to implement.
 * https://www.npmjs.com/package/react-responsive-carousel
 * At <tablet size, it just overflows with a scroll going to the right. I don't like this design.
 * Could either make the carousel hold more items off to the side, or could turn the Items into Column,
 * but would need excerpts to fill out image card (two columns, title + excerpt on left, image on right)
 *  */
const ImageRow = ({ articles }: Props) => {
  if (articles.length < 4 || articles.length > 5) {
    console.error(
      `You tried to create an ImageRow with ${articles.length} articles instead of 4 or 5.`
    );
    return <div></div>;
  }
  return (
    <section className={style.container}>
      <div className={style.categoryHeader}>Section Category Here</div>
      <div className={style.listWrapper}>
        <List
          items={articles}
          renderItem={(article) => {
            return <ImageTile item={article} key={article._id} />;
          }}
        />
      </div>
    </section>
  );
};

export default ImageRow;
