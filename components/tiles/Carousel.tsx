import React from 'react';

import Link from 'next/link';
import { Navigation, SwiperOptions } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { Article } from 'interfaces';
import { buildArticleSlug, editExcerptToSize } from 'lib/utils';

import { ImageCropBuilder } from '../shared/ImageCropBuilder';
import style from './Carousel.module.scss';

import 'swiper/css';
// import 'swiper/css/navigation';

type TileLayout = 'row' | 'column';
type Props = {
  articles: Article[];
  tileLayout?: TileLayout;
};

const ColumnTileBuilder = ({ article }: { article: Article }) => {
  const { title, image, slug } = article;
  return (
    <section className="h-full">
      <Link href={buildArticleSlug(slug)}>
        <a className={style.tileContainer}>
          {/* <div className={style.image}> */}
          <ImageCropBuilder image={image} width={300} height={200} />
          {/* </div> */}

          <h3 className={style.title}>{title}</h3>
        </a>
      </Link>
    </section>
  );
};
const RowTileBuilder = ({ article }: { article: Article }) => {
  const { title, image, slug, excerpt } = article;
  const shortenedExcerpt = editExcerptToSize(excerpt ?? '');

  return (
    <section className="h-full">
      <Link href={buildArticleSlug(slug)}>
        <a className={style.hover}>
          <div className={style.tileRowContainer}>
            <div className={style.rowTileContent}>
              <h3 className={style.rowTileTitle}>{title}</h3>
              <p className={style.rowTileExcerpt}>{shortenedExcerpt}</p>
            </div>
            <div>
              <ImageCropBuilder image={image} width={300} height={300} />
            </div>
          </div>
        </a>
      </Link>
    </section>
  );
};

const buildSwiperOptionsBasedOnSize = (size: number) => {
  const options: SwiperOptions = {
    slidesPerView: 2,
    breakpoints: {
      '320': {
        slidesPerView: 2,
        // spaceBetween: 0,
      },
      '769': {
        slidesPerView: 3,
        // spaceBetween: 0,
      },
      '993': {
        slidesPerView: Math.min(size, 5),
        // spaceBetween: 0,
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
  article: Article;
  tileLayout: TileLayout;
};

const BuildTile = ({ article, tileLayout }: BuildTileProps) => {
  if (tileLayout === 'column') {
    return <ColumnTileBuilder article={article} />;
  }
  return <RowTileBuilder article={article} />;
};

/**
 * Have to use this bad design because library doesn't allow Higher Order Components or Generics
 * to create list. Using HOC causes the items to be rendered outside the wrapper necesary to apply
 * style  to the elements. For me to allow a dynamic number of items, I need to do all the ternary
 * tests.
 */
const Carousel = ({ articles, tileLayout = 'column' }: Props) => {
  const n = articles.length;
  const options = buildSwiperOptionsBasedOnSize(n);
  return (
    <div className={style.container}>
      <div className={style.categoryHeader}>Section Category Here</div>
      <div className={style.flexTile}>
        <Swiper
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          {...options}
        >
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
          {/* <div className='swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-autoheight'>
          <div className='swiper-wrapper'>
            <List
              items={articles}
              renderItem={(item) => (
                <SwiperSlide key={item._id}>
                  <TileBuilder article={item} />
                </SwiperSlide>
              )}
            />
          </div>
        </div> */}

          {n > 4 && (
            <SwiperSlide key={articles[4]._id}>
              <BuildTile article={articles[4]} tileLayout={tileLayout} />
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
