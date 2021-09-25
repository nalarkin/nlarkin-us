import type * as Schema from './schema';
import groq from 'groq';

const articleFields = `
  _id,
  name,
  title,
  date,
  excerpt,
  image,
  "slug": slug.current,
  authors[]-> {name, "slug": slug.current}

`;
// 	authors[]-> {name, "slug": slug.current}

//   "author": author->{name, picture},

/** Get all slugs for all sections / categories. Returns string[ ] */
export const sectionSlugsQuery = groq`
*[_type == "section" && defined(slug.current)][].slug.current
`;
export type sectionSlugsResult = Array<string>;

/** Get all slugs for all articles. Returns string[ ] */
export const articleSlugsQuery = groq`
*[_type == "article" && defined(slug.current)][].slug.current`;
export type articleSlugsResult = Array<string>;
/** Get all slugs for all articles. Returns string[ ] */

// This shoudl work, but params are causing an issue
export const articleQuery = groq`
  *[_type == "article" && slug.current == $slug][0] {
    text,
  ${articleFields}
}
`;
export type articleQueryResult = Pick<
  Schema.Article,
  '_id' | 'date' | 'excerpt' | 'image' | 'slug' | 'title'
> & { authors: Schema.Author };

export const articleQueryAll = groq`
*[_type == "article"] {
  text
${articleFields}
}`;
export type articleResultAll = Array<
  Pick<
    Schema.Article,
    '_id' | 'date' | 'excerpt' | 'image' | 'slug' | 'title'
  > & { authors: Schema.Author }
>;

// export type articleQuery = Array<Pick<Schema.Article, 'title'>, 'author'>;
// export const articleQuery = `
// {
//   "article": *[_type == "article" && slug.current == $slug] | [0] {
//     content,
//     ${articleFields}
//   },
//   "moreArticles": *[_type == "article" && slug.current != $slug] | order(date desc) | [0...2] {
//     content,
//     ${articleFields}
//   }
// }`;
