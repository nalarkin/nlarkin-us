import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, SwiperOptions } from 'swiper';
import React from 'react';
import type { Article } from 'interfaces';
import { ImageBuilder } from 'components/shared/ImageBuilder';
import { List } from '../shared/list';
import { ImageCropBuilder } from '../shared/ImageCropBuilder';
import Link from 'next/link';
import style from './Carousel.module.scss';

type Props = {
  articles: Article[];
};

const TileBuilder = ({ article }: { article: Article }) => {
  const { title, image, slug } = article;
  return (
    <div className={style.tileContainer}>
      <Link href={slug}>
        <a className={style.image}>
          <div>
            <ImageCropBuilder image={image} width={300} height={200} />
          </div>
        </a>
      </Link>
      <Link href={slug}>
        <a className={style.image}>
          <div className={style.title}>{title}</div>
        </a>
      </Link>
    </div>
  );
};

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
      slidesPerView: 5,
      // spaceBetween: 0,
    },
  },
  spaceBetween: 31,
  navigation: true,
  modules: [Navigation],
  preloadImages: true,
  autoHeight: true,
};

/**
 * Have to use this bad design because library doesn't allow Higher Order Components or Generics
 * to create list. Using HOC causes the items to be rendered outside the wrapper necesary to apply
 * style  to the elements. For me to allow a dynamic number of items, I need to do all the ternary
 * tests.
 */
const Carousel = ({ articles }: Props) => {
  /**
   * To match scss globals
   * $size-tablet: 768px;
    $size-laptop: 992px;
   */

  const n = articles.length;
  return (
    <div className={style.container}>
      <Swiper
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        {...options}
      >
        {n > 0 ? (
          <SwiperSlide key={articles[0]._id}>
            <TileBuilder article={articles[0]} />
          </SwiperSlide>
        ) : null}
        {n > 1 ? (
          <SwiperSlide key={articles[1]._id}>
            <TileBuilder article={articles[1]} />
          </SwiperSlide>
        ) : null}
        {n > 2 ? (
          <SwiperSlide key={articles[2]._id}>
            <TileBuilder article={articles[2]} />
          </SwiperSlide>
        ) : null}
        {n > 3 ? (
          <SwiperSlide key={articles[3]._id}>
            <TileBuilder article={articles[3]} />
          </SwiperSlide>
        ) : null}
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

        {n > 4 ? (
          <SwiperSlide key={articles[4]._id}>
            <TileBuilder article={articles[4]} />
          </SwiperSlide>
        ) : null}
      </Swiper>
    </div>
  );
};

style;

export default Carousel;
