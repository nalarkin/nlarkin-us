import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { Article } from 'interfaces';
import Link from 'next/link';
import { ImageCropBuilder } from 'components/shared/ImageCropBuilder';
import style from './Carousel.module.scss';
import { List } from '../shared/list';
type Props = {
  articles: Article[];
};

const TileBuilder = ({ article }: { article: Article }) => {
  const { title, image, slug } = article;
  return (
    <section className={style.tileContainer}>
      {/* <section className=''> */}
      <Link href={slug}>
        <a>
          <div className=''>
            <ImageCropBuilder image={image} width={300} height={200} />
          </div>
          <div className={style.title}>{title}</div>
        </a>
      </Link>
    </section>
  );
};

export default function SimpleSlider({ articles }: Props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    slide: 'section',
    adaptiveHeight: true,
    arrows: true,
    swipeToSlide: true,
  };
  if (articles === undefined) {
    return <div></div>;
  }

  return (
    <Slider {...settings}>
      <TileBuilder article={articles[0]} key={articles[0]._id} />
      <TileBuilder article={articles[1]} key={articles[1]._id} />
      <TileBuilder article={articles[2]} key={articles[2]._id} />
      <TileBuilder article={articles[3]} key={articles[3]._id} />
      <TileBuilder article={articles[4]} key={articles[4]._id} />
      {/* <List
        items={articles}
        renderItem={(item) => {
          return <TileBuilder article={item} key={item._id} />;
        }}
      /> */}
    </Slider>
  );
}
