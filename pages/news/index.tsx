import React from 'react';

import { GetStaticProps } from 'next';

import NewsLayout from 'components/layouts/NewsLayout3';
import { articleQueryAll, ArticleResultAll } from 'lib/queries';
import { getClient } from 'lib/sanity.server';

// import NewsLayout from '../../components/layouts/NewsLayout3';

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

// const HomeBuilder = ({
//   articles,
// }: {
//   articles: ArticleResultAll | undefined;
// }) => {
//   if (articles === undefined) {
//     return <div></div>;
//   }

//   return (
//     // <>
//     <>
//       <div className={style.container}>
//         <List
//           items={articles}
//           renderItem={(article) => {
//             return (
//               <LargeArticleCard
//                 authors={article.authors}
//                 excerpt={article.excerpt ?? ''}
//                 image={article.image}
//                 slug={article.slug}
//                 title={article.title}
//                 key={article._id}
//               />
//             );
//           }}
//         />

//         {/* </> */}
//       </div>
//     </>
//   );
// };

type Props = {
  data?: ArticleResultAll;
};

const NewsHome = ({ data }: Props) => {
  return (
    <>
      <NewsLayout articles={data ?? []} />
    </>
  );
};

export default NewsHome;
