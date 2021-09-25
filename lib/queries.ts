const articleFields = `
  _id,
  name,
  title,
  date,
  excerpt,
  image,
  "slug": slug.current,
`;
// 	authors[]-> {name, "slug": slug.current}

//   "author": author->{name, picture},

/** Get all slugs for all sections / categories. Returns string[ ] */
export const sectionSlugsQuery = `
*[_type == "section" && defined(slug.current)][].slug.current
`;
/** Get all slugs for all articles. Returns string[ ] */
export const articleSlugsQuery = `
*[_type == "article" && defined(slug.current)][].slug.current`;
/** Get all slugs for all articles. Returns string[ ] */
export const specialArticleQuery = `
*[_type == "article" && defined(slug.current)][].slug.current`;

// This shoudl work, but params are causing an issue
export const articleQuery = `
  *[_type == "article" && slug.current == $slug][0]
`;
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
