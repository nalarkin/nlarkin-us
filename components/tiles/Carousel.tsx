import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import React from 'react';
import type { Article } from 'interfaces';
import { ImageBuilder } from 'components/shared/ImageBuilder';
import { List } from '../shared/list';
import { ImageCropBuilder } from '../shared/ImageCropBuilder';
import Link from 'next/link';
import style from './Carousel.module.scss';
import SimpleSlider from './Slider';

type Props = {
  articles: Article[];
};

const TileBuilder = ({ article }: { article: Article }) => {
  const { title, image, slug } = article;
  return (
    <div className={style.tileContainer}>
      <Link href={slug}>
        <a>
          <div className=''>
            <ImageCropBuilder image={image} width={300} height={200} />
          </div>
          <div className={style.title}>{title}</div>
        </a>
      </Link>
    </div>
  );
};

const Carousel = ({ articles }: Props) => {
  // @ts-ignore
  const breakpoints = {
    '@0.00': {
      slidesPerView: 1,
      spaceBetween: 31,
    },
    '@0.75': {
      slidesPerView: 2,
      spaceBetween: 31,
    },
    '@1.00': {
      slidesPerView: 3,
      spaceBetween: 31,
    },
    '@1.50': {
      slidesPerView: 4,
      spaceBetween: 31,
    },
  };
  return (
    <div className={style.container}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={31}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        breakpoints={breakpoints}
      >
        <SwiperSlide key={articles[0]._id}>
          <TileBuilder article={articles[0]} />
        </SwiperSlide>
        <SwiperSlide key={articles[1]._id}>
          <TileBuilder article={articles[1]} />
        </SwiperSlide>
        <SwiperSlide key={articles[2]._id}>
          <TileBuilder article={articles[2]} />
        </SwiperSlide>

        <SwiperSlide key={articles[3]._id}>
          <TileBuilder article={articles[3]} />
        </SwiperSlide>
        <SwiperSlide key={articles[4]._id}>
          <TileBuilder article={articles[4]} />
        </SwiperSlide>
        {/* {contents} */}
        {/* <span slot='container-end'>Container End</span> */}
        {/* <SwiperSlide id='3'>3</SwiperSlide>
        <SwiperSlide id='33'>4</SwiperSlide>
        <SwiperSlide>5</SwiperSlide>
        <SwiperSlide>9</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Carousel;
