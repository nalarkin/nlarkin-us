import groq from 'groq';
import type { IGetImageReturn } from 'plaiceholder/dist/get-image';

import {
  Article,
  ArticleDetailedImageAuthors,
  AuthorsArray,
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

export type PlaceholderImage = IGetImageReturn['img'] & {
  blurDataURL: string;
  alt: string;
};

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
export type SectionArticlesResponse = {
  articles: Array<ArticleDetailedImageAuthors>;
  title: string;
  slug: string;
};

const getSorted = (desiredSize: number) =>
  `| order(date desc)[0..${desiredSize - 1}]`;

const articleNoImage = `
  _id,
  title,
  "slug": slug.current,
  date
`;
const getArticleAuthors = `
authors[]-> {
            name, 
            "slug": slug.current, 
            picture
          }
`;

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
