import groq from 'groq';

import { Article } from 'lib/interfaces';

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
// 	authors[]-> {name, "slug": slug.current}

//   "author": author->{name, picture},

/** Get all slugs for all sections / categories.
 * @returns  string[ ]
 */
export const sectionSlugsQuery = groq`
*[_type == "section" && defined(slug.current)][].slug.current
`;
export type SectionSlugsResult = Array<string>;

/** Get all slugs for all articles.
 * @returns Returns string[ ]
 */
export const articleSlugsQuery = groq`
*[_type == "article" && defined(slug.current)][].slug.current`;
export type ArticleSlugsResult = Array<string>;

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
export type ArticleResultAll = Array<Article>;

// export const sectionArticlesQuery = groq`
// *[_type == 'article' && references(*[_type == "section" && slug.current == $slug][0]._id)][] {
//   ${articleFields}
// }
// `;

export const sectionArticlesQuery = groq`
*[ _type == "section" && slug.current == $slug ]{
  title,
  "slug": slug.current,
  "articles": *[ _type == "article" && references(^._id)] {
    ${articleFields}
  }
}[0]`;
export type SectionArticlesResponse = {
  articles: Array<Article>;
  title: string;
  slug: string;
};

const getSorted = (desiredSize: number) =>
  `| order(date desc)[0..${desiredSize - 1}]`;

const articleNoImage = `
  _id,
  title,
  "slug": slug.current
`;
const getArticleAuthors = `
authors[]-> {
            name, 
            "slug": slug.current, 
            picture
          }
`;

export const homeQuery = groq`
{
  "hero": {
    "uid": "Hero",
    "articles": {
      "main": *[_type=="article" ] {
        ${articleNoImage},
        excerpt,
        image,
      }| order(date desc)[0],
      "sideArticles": *[_type=="article" ] {
        ${articleNoImage},
        excerpt
      }${getSorted(3)}
    }
	},
	"opinionColumn": {
	  "uid": "Opinion Column",
    "title": "Opinion",
    "articles": *[_type=="article"]{
      ${articleNoImage},
      ${getArticleAuthors}
    }${getSorted(14)}  
	},
	"opinionBody": {
    "uid": "OpinionBody",
    "articles": *[_type=="article"]{
      ${articleNoImage},
    	excerpt,
      image
		}${getSorted(14)}
  },
	"moreNews": {
    "uid": "More News",
    "title": "More News",
    "articles": {
      "main": *[_type=="article"] {
          ${articleNoImage},
          excerpt
       }${getSorted(4)},
      "headlines": *[_type=="article"] {
        ${articleNoImage}
      }${getSorted(6)}
  	}	
	},
	"culture": {
    "uid": "Culture",
    "title": "Culture",
    "articles": *[_type=="article"] {
      ${articleNoImage},
      excerpt,
      image,
  	}${getSorted(5)}
	},
	"cooking": {
    "uid": "Cooking",
    "title": "Cooking",
    "articles": *[_type=="article"] {
      ${articleNoImage}
    }${getSorted(5)}
	}
}`;
