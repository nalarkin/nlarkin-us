import React from 'react';
import style from './SectionHero.module.css';
import * as Schema from '../../../lib/schema';
import { ImageBuilder } from '../../ImageBuilder';

type Props = {
  articles?: Array<
    Pick<
      Schema.Article,
      '_id' | 'authors' | 'date' | 'excerpt' | 'image' | 'title'
    > & {
      slug: string;
      authors: Array<Pick<Schema.Author, 'name'> & { slug: string }>;
    }
  >;
};

type CardProps = {
  article: Pick<
    Schema.Article,
    '_id' | 'authors' | 'date' | 'excerpt' | 'image' | 'title'
  > & {
    slug: string;
    authors: Array<Pick<Schema.Author, 'name'> & { slug: string }>;
  };
};

const HeroTile = ({ article }: CardProps) => {
  return (
    // <div className={style.hero}>
    <>
      <div className={style.heroContent}>
        <div className='font-semibold my-2'>{article.title}</div>
        <div>{article.excerpt}</div>
      </div>
      <div className={style.heroImage}>
        {' '}
        <ImageBuilder image={article.image} />
      </div>
    </>
  );
};

const SecondTile = ({ article }: CardProps) => {
  return (
    <div className={style.tile}>
      <div className={style.second}>
        <div className='font-semibold'> {article.title}</div>
      </div>
    </div>
  );
};
const ThirdTile = ({ article }: CardProps) => {
  return (
    <div className={style.tile}>
      <div className={style.third}>
        <div className='font-semibold mb-2 block'>{article.title}</div>
      </div>
    </div>
  );
};
const FourthChild = ({ article }: CardProps) => {
  return (
    <div className={style.tile}>
      <div className={style.fourth}>
        <div className='font-semibold mb-2'>{article.title}</div>
      </div>
    </div>
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
