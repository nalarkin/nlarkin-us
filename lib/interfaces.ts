import * as Schema from 'lib/schema';

export type Author = {
  id: string;
  name: {
    first: string;
    last: string;
  };
};

export type Article = Pick<
  Schema.Article,
  '_id' | 'date' | 'excerpt' | 'image' | 'title'
> & {
  authors: Array<Pick<Schema.Author, 'name' | 'picture'> & { slug: string }>;
  slug: string;
};

// export type ArticleDetailed = Pick<
//   Schema.Article,
//   '_id' | 'date' | 'excerpt' | 'image' | 'title'
// > & {
//   authors: Array<Pick<Schema.Author, 'name' | 'picture'> & { slug: string }>;
//   slug: string;
//   text: Pick<Schema.Article, 'text'>;
// };

interface CategoryArticles<T> {
  articles: T;
}
type AuthorsArray = Array<
  Pick<Schema.Author, 'name' | 'picture'> & { slug: string }
>;

export interface ArticleBasic {
  _id: Schema.SanityDocument['_id'];
  title?: Schema.Article['title'];
  slug?: string;
}

export interface ArticleDetailed extends ArticleBasic {
  excerpt: Schema.Article['excerpt'];
}

export interface ArticleDetailedImage extends ArticleDetailed {
  // image:  Pick<Schema.Article, 'image'>;
  image: Schema.Article['image'];
}

export interface ArticleOpinion extends ArticleBasic {
  authors: AuthorsArray;
}

export interface CategoryHero {
  uid: 'Hero';
  articles: {
    main: ArticleDetailedImage;
    sideArticles: ArticleDetailed[];
  };
}

export interface CategoryOpinionColumn
  extends CategoryArticles<ArticleOpinion[]> {
  uid: 'Opinion Column';
  title?: string;
}
export interface CategoryOpinionBody
  extends CategoryArticles<ArticleDetailedImage[]> {
  uid: 'Opinion Body';
}
export interface CategoryMoreNews {
  uid: 'More News';
  title?: string;
  articles: {
    main: ArticleDetailed[];
    headlines: ArticleBasic[];
  };
}
export interface CategoryCulture
  extends CategoryArticles<ArticleDetailedImage[]> {
  uid: 'Culture';
  title?: string;
}
export interface CategoryCooking extends CategoryArticles<ArticleBasic[]> {
  uid: 'Cooking';
  title?: string;
}

export type HomeCategory =
  | CategoryHero
  | CategoryOpinionColumn
  | CategoryOpinionBody
  | CategoryMoreNews
  | CategoryCulture
  | CategoryCooking;

export type HomeQuery = {
  hero: CategoryHero;
  opinionColumn: CategoryOpinionColumn;
  opinionBody: CategoryOpinionBody;
  moreNews: CategoryMoreNews;
  culture: CategoryCulture;
  cooking: CategoryCooking;
};
