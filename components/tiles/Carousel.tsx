import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { Navigation, SwiperOptions } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { List } from 'components/shared/list';
import type { ArticleDetailedImage } from 'lib/interfaces';
import { buildArticleSlug, editExcerptToSize } from 'lib/utils';

import style from './Carousel.module.scss';

import 'swiper/css';
// import 'swiper/css/navigation';

type TileLayout = 'row' | 'column';
type Props = {
  articles: ArticleDetailedImage[];
  tileLayout?: TileLayout;
  categoryHeader?: string;
};

const ColumnTileBuilder = ({ article }: { article: ArticleDetailedImage }) => {
  const { title, slug, image } = article;
  // const croppedSrc =urlForImage(image).width(width).height(height).url();
  return (
    <section className="h-full">
      <Link href={buildArticleSlug(slug ?? '')} className={style.tileContainer}>
        <div className="w-full">
          <Image {...image} />
        </div>
        <h3 className={style.title}>{title}</h3>
      </Link>
    </section>
  );
};
const RowTileBuilder = ({ article }: { article: ArticleDetailedImage }) => {
  const { title, image, slug, excerpt } = article;
  const shortenedExcerpt = editExcerptToSize(excerpt ?? '');

  return (
    <section className="h-full">
      <Link href={buildArticleSlug(slug ?? '')} className={style.hover}>
        <div className={style.tileRowContainer}>
          <div className={style.rowTileContent}>
            <h3 className={style.rowTileTitle}>{title}</h3>
            <p className={style.rowTileExcerpt}>{shortenedExcerpt}</p>
          </div>
          <div className="w-full">
            <Image {...image} placeholder="blur" />
          </div>
        </div>
      </Link>
    </section>
  );
};

const buildSwiperOptionsBasedOnSize = (size: number, tileLayout: string) => {
  const options: SwiperOptions = {
    slidesPerView: 2,
    breakpoints: {
      '320': {
        slidesPerView: 2,
      },
      '769': {
        slidesPerView: tileLayout === 'column' ? 3 : 2,
      },
      '993': {
        slidesPerView: Math.min(size, 5),
      },
    },
    spaceBetween: 31,
    navigation: true,
    modules: [Navigation],
    preloadImages: true,
    // autoHeight: true,
  };
  return options;
};

type BuildTileProps = {
  article: ArticleDetailedImage;
  tileLayout: TileLayout;
};

const BuildTile = ({ article, tileLayout }: BuildTileProps) => {
  if (tileLayout === 'column') {
    return <ColumnTileBuilder article={article} />;
  }
  return <RowTileBuilder article={article} />;
};

const PhoneTileBuilder = ({
  articles,
}: {
  articles: ArticleDetailedImage[];
}) => {
  return (
    <List
      items={articles}
      renderItem={({ title, _id, slug, excerpt, image }) => {
        return (
          <section key={_id} className={style.phoneTile}>
            <Link href={buildArticleSlug(slug ?? '')} className={style.hover}>
              <div className={style.phoneGrid}>
                <div>
                  <div className={style.phoneTileTitle}>{title}</div>
                  <div className={style.phoneTileExcerpt}>
                    {editExcerptToSize(excerpt)}
                  </div>
                </div>
                <div className="w-full">
                  <Image {...image} placeholder="blur" />
                  {/* <ImageCropBuilder image={image} width={300} height={300} /> */}
                </div>
              </div>
            </Link>
          </section>
        );
      }}
    />
  );
};

/**
 * Have to use this bad design because library doesn't allow Higher Order Components or Generics
 * to create list. Using HOC causes the items to be rendered outside the wrapper necesary to apply
 * style  to the elements. For me to allow a dynamic number of items, I need to do all the ternary
 * tests.
 */
const Carousel = ({
  articles,
  tileLayout = 'column',
  categoryHeader = 'Section Category',
}: Props) => {
  const n = articles.length;
  const options = buildSwiperOptionsBasedOnSize(n, tileLayout);
  return (
    <div className="block w-full">
      <div className={style.container}>
        <div className={style.categoryHeader}>{categoryHeader}</div>
        <div
          className={
            tileLayout === 'column' ? style.flexTile : style.responsiveTile
          }
        >
          <Swiper {...options}>
            {n > 0 && (
              <SwiperSlide key={articles[0]._id}>
                <BuildTile article={articles[0]} tileLayout={tileLayout} />
              </SwiperSlide>
            )}
            {n > 1 && (
              <SwiperSlide key={articles[1]._id}>
                <BuildTile article={articles[1]} tileLayout={tileLayout} />
              </SwiperSlide>
            )}
            {n > 2 && (
              <SwiperSlide key={articles[2]._id}>
                <BuildTile article={articles[2]} tileLayout={tileLayout} />
              </SwiperSlide>
            )}
            {n > 3 && (
              <SwiperSlide key={articles[3]._id}>
                <BuildTile article={articles[3]} tileLayout={tileLayout} />
              </SwiperSlide>
            )}
            {n > 4 && (
              <SwiperSlide key={articles[4]._id}>
                <BuildTile article={articles[4]} tileLayout={tileLayout} />
              </SwiperSlide>
            )}
          </Swiper>
        </div>
        {tileLayout === 'row' && <PhoneTileBuilder articles={articles} />}
      </div>
    </div>
  );
};

export default Carousel;
