// @ts-nocheck
import React from 'react';

import { GetStaticProps } from 'next';

import MinimalHeader from 'components/headers/MinimalHeader';
import LargeArticleCard from 'components/home/cards/LargeCard';
import Carousel from 'components/tiles/Carousel';
import HeroTwoRows from 'components/tiles/HeroTwoRows';
import ImageRow from 'components/tiles/ImageRow';
import type { Article } from 'interfaces';
import { articleQueryAll, ArticleResultAll } from 'lib/queries';
import { getClient } from 'lib/sanity.server';

import style from './index.module.scss';

// const NewsSEO = {
//   description:
//     'This is a purely educational attempt to clone of the New York Times. Disclaimer....',
//   title: "Nathan's News",
// };

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const articles = await getClient(preview).fetch<ArticleResultAll>(
    articleQueryAll
  );
  return {
    props: {
      data: articles,
    },
  };
};

type TileExample = {
  name: string;
  articleCount: number;
  items: Article[];
  renderItem: (val: Article[] | Article) => React.ReactNode;
};

type Props = {
  data?: ArticleResultAll;
};

// const logTest = (arr: ArticleResultAll) => {
//   arr.forEach((value) => {
//     console.log(JSON.stringify(value));
//   });
// };

const ExamplePage = ({ data }: Props) => {
  let content: string | JSX.Element = '';
  if (data !== undefined && data.length > 4) {
    // const example = data.slice(3);
    // console.log(example);
    // const sizeThree = data.slice(3);
    // console.log(data);
    // logTest(sizeThree);
    // const sizeTwo = data.slice(0, 2);
    // console.log(sizeTwo);
    // console.log(`sizeTwo: ${sizeTwo}`);
    const examples: TileExample[] = [
      {
        name: 'ImageRow',
        articleCount: 5,
        items: data.slice(0, 5),
        renderItem: (item) => <ImageRow articles={item} />,
      },
      {
        name: 'LargeCard',
        articleCount: 1,
        items: data[0],
        renderItem: (item) => (
          <LargeArticleCard
            authors={item.authors}
            excerpt={item.excerpt}
            image={item.image}
            slug={item.slug}
            title={item.title}
          />
        ),
      },
      {
        name: 'HeroTwoRows',
        articleCount: 5,
        items: data.slice(0, 5),
        renderItem: (item) => <HeroTwoRows articles={item} />,
      },
      {
        name: 'Carousel 5',
        articleCount: 5,
        items: data.slice(0, 5),
        renderItem: (item) => <Carousel articles={item} />,
      },
      {
        name: 'Carousel 4',
        articleCount: 4,
        items: data.slice(0, 4),
        renderItem: (item) => <Carousel articles={item} tileLayout="row" />,
      },
      {
        name: 'Carousel 3',
        articleCount: 4,
        items: data.slice(0, 3),
        renderItem: (item) => <Carousel articles={item} />,
      },
    ];

    // return <div>hi</div>;

    content = (
      <div>
        {examples.map(({ name, items, renderItem }) => {
          return (
            <div key={name} className="">
              <div className=" font-bold flex flex-row bg-gray-100">
                {' '}
                {name}
              </div>
              <div>{renderItem(items)}</div>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <>
      <MinimalHeader sectionTitle="examples" />
      <div className={style.wrapper}>
        {content}
        {/* <div>you shouldnt see this</div>
      <div>{JSON.stringify(`data: ${data}`)}</div> */}
        {/* <SectionLayout seo={NewsSEO}>{content}</SectionLayout> */}
      </div>
    </>
  );
};

export default ExamplePage;
