import groq from 'groq';

import {
  Article,
  ArticleDetailedImageAuthors,
  AuthorsArray,
  PlaceholderImage,
} from 'lib/interfaces';

import type * as Schema from './schema';

const articleFields = `
  _id,
  title,
  date,
  excerpt,
  image,
  "slug": slug.current,
  authors[]-> {name, "slug": slug.current, picture}
`;

const articleNoImage = `_id,
  title,
  "slug": slug.current,
  date`;
const articleWithImage = `_id,
  title,
  "slug": slug.current,
  date,
  image,
  excerpt`;

const getArticleAuthors = `authors[]-> {
            name, 
            "slug": slug.current, 
            picture
          }`;

// 	authors[]-> {name, "slug": slug.current}

//   "author": author->{name, picture},

/** Get all slugs for all sections / categories.
 * @returns  string[ ]
 */
export const sectionSlugsQuery = groq`
*[_type == "section" && defined(slug.current)][].slug.current
`;
/** Get all Sections that exist in the Headless CMS */
export const sectionsQueryAll = groq`
*[_type == "section" && defined(slug.current)]{
  _id,
  title,
  "slug": slug.current,
}
`;
export type SectionResultAll = Array<
  Pick<Schema.Section, '_id' | 'title'> & { slug: string }
>;

export type SectionSlugsResult = Array<string>;

/** Get all slugs for all articles.
 * @returns Returns string[ ]
 */
export const articleSlugsQuery = groq`
*[_type == "article" && defined(slug.current)][].slug.current
`;

export const authorSlugQuery = groq`
*[_type == "author" && defined(slug.current)][].slug.current
`;

export type ArticleSlugsResult = Array<string>;

export const articleQuery = groq`
    *[_type == "article" && slug.current == $slug][0] {
      text,
      ${articleFields}
    }
  `;
// export type ArticleQueryResult = Pick<
//   Schema.Article,
//   '_id' | 'date' | 'excerpt' | 'title' | 'text'
// > & {
//   authors: AuthorsArray;
//   slug: string;
//   image: IGetImageReturn['img'] & { blurDataURL: string; alt: string };
// };

export type ArticleProps = Omit<ArticleQueryResult, 'image'> & {
  image: PlaceholderImage;
};

export type SanityImage = Schema.Article['image'];

export type ArticleQueryResult = Pick<
  Schema.Article,
  '_id' | 'date' | 'excerpt' | 'image' | 'title' | 'text'
> & {
  authors: AuthorsArray;
  slug: string;
};

// export type ArticleQueryR =

export const articleQueryAll = groq`
  *[_type == "article"] {
    ${articleFields}
  }`;
export type ArticleResultAll = Array<Article>;

export const sectionArticlesQuery = groq`
*[ _type == "section" && slug.current == $slug ]{
  title,
  "slug": slug.current,
  "articles": *[ _type == "article" && references(^._id)] {
    ${articleFields}
  } | order(date desc)
}[0]`;

export type SectionArticleQuery = Omit<ArticleDetailedImageAuthors, 'image'> & {
  image: Schema.Article['image'];
};

export type SectionArticleProps = {
  articles: Array<SectionArticleQuery>;
  title: string;
  slug: string;
};
export type SectionArticlesResponse = {
  articles: Array<ArticleDetailedImageAuthors>;
  title: string;
  slug: string;
};

interface GetSortedProps {
  start?: number;
  desiredSize: number;
}
const getSorted = ({ start = 0, desiredSize }: GetSortedProps) =>
  `| order(date desc)[${start}..${desiredSize - 1 + start}]`;

// const articleNoImage = `
//   _id,
//   title,
//   "slug": slug.current,
//   date
// `;
// const getArticleAuthors = `
// authors[]-> {
//             name,
//             "slug": slug.current,
//             picture
//           }
// `;

export const authorQuery = groq`
*[_type == "author" && slug.current == $slug][0] {
  bio,
  picture,
  name,
  "articles": *[_type=="article" && references(^._id)] {
    ${articleNoImage},
    ${getArticleAuthors},
    excerpt,
    image
  } | order(date desc)
}
`;
export type AuthorQueryResult = {
  name: Schema.Author['name'];
  picture: Schema.Author['picture'];
  bio: Schema.Author['bio'];
  articles: ArticleDetailedImageAuthors[];
};

// export const homeQuery = groq`
// {
//   "hero": {
//     "uid": "Hero",
//     "articles": {
//       "main": *[_type=="article" ] {
//         ${articleNoImage},
//         excerpt,
//         image,
//       }| order(date desc)[0],
//       "sideArticles": *[_type=="article" ] {
//         ${articleNoImage},
//         excerpt
//       }${getSorted({ start: 1, desiredSize: 3 })}
//     }
// 	},
// 	"opinionColumn": {
// 	  "uid": "Opinion Column",
//     "title": "Opinion",
//     "articles": *[_type=="article"]{
//       ${articleNoImage},
//       ${getArticleAuthors}
//     }${getSorted({ start: 5, desiredSize: 14 })}
// 	},
// 	"opinionBody": {
//     "uid": "OpinionBody",
//     "articles": *[_type=="article"]{
//       ${articleNoImage},
//     	excerpt,
//       image
// 		}${getSorted({ start: 5, desiredSize: 14 })}
//   },
// 	"moreNews": {
//     "uid": "More News",
//     "title": "More News",
//     "articles": {
//       "main": *[_type=="article"] {
//           ${articleNoImage},
//           excerpt
//        }${getSorted({ desiredSize: 4 })},
//       "headlines": *[_type=="article"] {
//         ${articleNoImage}
//       }${getSorted({ desiredSize: 6 })}
//   	}
// 	},
// 	"culture": {
//     "uid": "Culture",
//     "title": "Culture",
//     "articles": *[_type=="article"] {
//       ${articleNoImage},
//       excerpt,
//       image,
//   	}${getSorted({ desiredSize: 5 })}
// 	},
// 	"cooking": {
//     "uid": "Cooking",
//     "title": "Cooking",
//     "articles": *[_type=="article"] {
//       ${articleNoImage}
//     }${getSorted({ desiredSize: 5 })}
// 	}
// }`;

interface GetSortedProps {
  start?: number;
  desiredSize: number;
}
const getReversed = ({ start = 0, desiredSize }: GetSortedProps) =>
  `| order(date asc)[${start}..${desiredSize - 1 + start}]`;

const getNewsCategory = (
  key: string,
  title: string,
  arraySelector: string,
  cropped: boolean
) => {
  return `"${key}": {
    "uid": "${key}",
    "title": "${title}",
    "cropped": ${cropped},
    "articles": *[_type=="article"]{
      ${articleWithImage},
		}${arraySelector}
  },`;
};

export const homeQuery = `
{
  "hero": {
    "uid": "Hero",
    "articles": {
      "main": *[_type=="article" ] {
        ${articleWithImage},
      }| order(date desc)[0],
      "sideArticles": *[_type=="article" ] {
        ${articleWithImage},
      }${getSorted({ start: 1, desiredSize: 3 })}
    }
	},
	"opinionColumn": {
	  "uid": "Opinion Column",
    "title": "Opinion",
    "articles": *[_type=="article"]{
      ${articleNoImage},
      ${getArticleAuthors},
    }${getReversed({ desiredSize: 14 })}  
	},
  ${getNewsCategory(
    'latestNews',
    'Latest News',
    getSorted({ start: 4, desiredSize: 3 }),
    true
  )}
  "midHero": {
    "uid": "MidHero",
    "articles": *[_type=="article"]{
      ${articleWithImage},
		}${getSorted({ start: 7, desiredSize: 1 })}[0]
  },
    ${getNewsCategory(
      'popularArticles',
      'Popular Articles',
      getSorted({ start: 8, desiredSize: 4 }),
      true
    )}
    ${getNewsCategory(
      'staffFavorites',
      'Staff Favorites',
      getSorted({ start: 12, desiredSize: 4 }),
      true
    )}
	"secondHeroTile": {
    "uid": "secondHeroTile",
    "title": "Second Hero Tile",
    "articles": {
      "main": *[_type=="article" ] {
        ${articleWithImage},
      }| order(date asc)[2],
      "sideArticles": *[_type=="article" ] {
        ${articleWithImage},
      }${getSorted({ start: 16, desiredSize: 4 })}
    }
	},
  ${getNewsCategory(
    'diveDeeper',
    'Dive Deeper',
    getSorted({ start: 20, desiredSize: 5 }),
    true
  )}
}`;

// export const homeQuery = `
// {
//   "hero": {
//     "uid": "Hero",
//     "articles": {
//       "main": *[_type=="article" ] {
//         ${articleWithImage},
//       }| order(date desc)[0],
//       "sideArticles": *[_type=="article" ] {
//         ${articleWithImage},
//       }${getSorted({ start: 1, desiredSize: 3 })}
//     }
// 	},
// 	"opinionColumn": {
// 	  "uid": "Opinion Column",
//     "title": "Opinion",
//     "articles": *[_type=="article"]{
//       ${articleNoImage},
//       ${getArticleAuthors},
//     }${getReversed({ desiredSize: 14 })}
// 	},
// 	"latestNews": {
//     "uid": "LatestNews",
//     "articles": *[_type=="article"]{
//       ${articleWithImage},
// 		}${getSorted({ start: 4, desiredSize: 3 })}
//   },
//   "midHero": {
//     "uid": "MidHero",
//     "articles": *[_type=="article"]{
//       ${articleWithImage},
// 		}${getSorted({ start: 7, desiredSize: 1 })}
//   },
// 	"popularArticles": {
//     "uid": "PopularArticles",
//     "title": "Popular Articles",
//     "articles": *[_type=="article"] {
//         ${articleWithImage},
//     }${getSorted({ start: 8, desiredSize: 4 })},
// 	},
// 	"staffFavorites": {
//     "uid": "staffFavorites",
//     "title": "Staff Favorites",
//     "articles": *[_type=="article"] {
//       ${articleWithImage},
//   	}${getSorted({ start: 12, desiredSize: 4 })}
// 	},
// 	"secondHeroTile": {
//     "uid": "secondHeroTile",
//     "title": "Second Hero Tile",
//     "articles": {
//       "main": *[_type=="article" ] {
//         ${articleWithImage},
//       }| order(date desc)[0],
//       "sideArticles": *[_type=="article" ] {
//         ${articleWithImage},
//       }${getSorted({ start: 16, desiredSize: 4 })}
//     }
// 	},
// 	"diveDeeper": {
//     "uid": "diveDeeper",
//     "title": "Dive Deeper",
//     "articles": *[_type=="article"] {
//       ${articleWithImage}
//     }${getSorted({ start: 20, desiredSize: 5 })}
// 	},
// }`;
