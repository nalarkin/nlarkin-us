import type * as Schema from './schema';
import groq from 'groq';

import axios from 'axios';

const articleFields = `
  _id,
  title,
  date,
  excerpt,
  image,
  "slug": slug.current,
  authors[]-> {name, "slug": slug.current}
`;
// 	authors[]-> {name, "slug": slug.current}

//   "author": author->{name, picture},

/** Get all slugs for all sections / categories.
 * @returns  string[ ]
 */
export const sectionSlugsQuery = groq`
*[_type == "section" && defined(slug.current)][].slug.current
`;
export type sectionSlugsResult = Array<string>;

/** Get all slugs for all articles.
 * @returns Returns string[ ]
 */
export const articleSlugsQuery = groq`
*[_type == "article" && defined(slug.current)][].slug.current`;
export type ArticleSlugsResult = Array<string>;

// This shoudl work, but params are causing an issue
export const articleQuery = groq`
    *[_type == "article" && slug.current == $slug][0] {
      text,
      ${articleFields}
    }
  `;
export type ArticleQueryResult = Pick<
  Schema.Article,
  '_id' | 'date' | 'excerpt' | 'image' | 'title' | 'text'
> & {
  authors: Array<Pick<Schema.Author, 'name'> & { slug: string }>;
  slug: string;
};

export const articleQueryAll = groq`
  *[_type == "article"] {
    ${articleFields}
  }`;
export type ArticleResultAll = Array<
  Pick<Schema.Article, '_id' | 'date' | 'excerpt' | 'image' | 'title'> & {
    authors: Schema.Author;
    slug: string;
  }
>;

// export const sectionArticlesQuery = groq`
// *[_type == 'article' && references(*[_type == "section" && slug.current == $slug][0]._id)][] {
//   ${articleFields}
// }
// `;

export const sectionArticlesQuery = groq`
*[ _type == "section" && slug.current == $slug ]{
  title,
  "articles": *[ _type == "article" && references(^._id)] {
    ${articleFields}
  }
}[0]`;
export type SectionArticlesResponse = {
  articles: Array<
    Pick<
      Schema.Article,
      '_id' | 'authors' | 'date' | 'excerpt' | 'image' | 'title'
    > & { slug: string }
  >;
  title: string;
};

export async function getArticleSlugs(): Promise<ArticleSlugsResult | null> {
  try {
    const response = await axios.get(
      'https://azbpy7e5.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%22article%22%20%26%26%20defined(slug.current)%5D%5B%5D.slug.current'
      // {
      //   // params: {
      //   //   query:
      //   //     '*%5B_type%20%3D%3D%20%22article%22%20%26%26%20defined(slug.current)%5D%5B%5D.slug.current',
      //   // },
      // }
    );
    return response.data.result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getArticleData(
  slug: string
): Promise<ArticleQueryResult | null> {
  try {
    const response = await axios.get(
      'https://azbpy7e5.api.sanity.io/v1/data/query/production/',
      {
        params: {
          query:
            '%20%20%20%20*%5B_type%20%3D%3D%20%22article%22%20%26%26%20slug.current%20%3D%3D%20%24slug%5D%5B0%5D%20%7B%0A%20%20%20%20%20%20text%2C%0A%20%20%20%20%20%20%20%20_id%2C%0A%20%20title%2C%0A%20%20date%2C%0A%20%20excerpt%2C%0A%20%20image%2C%0A%20%20%22slug%22%3A%20slug.current%2C%0A%20%20authors%5B%5D-%3E%20%7Bname%2C%20%22slug%22%3A%20slug.current%7D%0A%20%20%20%20%7D',
          '%24slug': `${slug}`,
        },
      }
    );
    // console.log(response.data);
    return response.data.result;
  } catch (error) {
    console.error(error);
    return null;
  }
}
