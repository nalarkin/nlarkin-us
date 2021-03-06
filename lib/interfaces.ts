import { ImageProps } from 'next/image';
import type { IGetImageReturn } from 'plaiceholder/dist/get-image';

import * as Schema from 'lib/schema';

export type Author = {
  id: string;
  name: {
    first: string;
    last: string;
  };
};

// export type PlaceholderImage = IGetImageReturn['img'] &
//   Required<Pick<ImageProps, 'blurDataURL' | 'alt' | 'placeholder'>>;
// export interface PlaceholderImage
//   extends Pick<IGetImageReturn, 'img'>,
//     Required<Pick<ImageProps, 'blurDataURL' | 'alt' | 'placeholder'>> {}
export type PlaceholderImage = IGetImageReturn['img'] &
  Required<Pick<ImageProps, 'blurDataURL' | 'alt' | 'placeholder'>>;
// export type PlaceholderImage = IGetImageReturn['img'] & {
//   blurDataURL: string;
//   alt: string;
//   placeholder: 'blur';
// };

// export type Article = Pick<
//   Schema.Article,
//   '_id' | 'date' | 'excerpt' | 'title'
// > & {
//   image: Schema.Article['image'];
//   authors: Array<Pick<Schema.Author, 'name' | 'picture'> & { slug: string }>;
//   slug: string;
// };

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
  cropped?: boolean;
}
export type AuthorsArray = Array<
  Pick<Schema.Author, 'name' | 'picture'> & { slug: string }
>;

export interface ArticleBasic {
  _id: Schema.SanityDocument['_id'];
  title?: Schema.Article['title'];
  slug?: string;
  date?: Schema.Article['date'];
}

export interface ArticleDetailed extends ArticleBasic {
  excerpt: Schema.Article['excerpt'];
}

export interface ArticleDetailedImage extends ArticleDetailed {
  // image:  Pick<Schema.Article, 'image'>;
  image: PlaceholderImage;
}
// export interface ArticleDetailedImage extends ArticleDetailed {
//   // image:  Pick<Schema.Article, 'image'>;
//   image: Schema.Article['image'];
// }

export interface ArticleDetailedImageAuthors extends ArticleDetailedImage {
  authors: AuthorsArray;
}

export interface ArticleOpinion extends ArticleBasic {
  authors: AuthorsArray;
}
// export interface ArticleOpinion extends ArticleBasic {
//   authors: AuthorsArray;
// }

export type Article =
  | ArticleBasic
  | ArticleDetailed
  | ArticleDetailedImageAuthors
  | ArticleOpinion;

export type Y = Exclude<Article, ArticleDetailedImageAuthors>;

export type X = Record<string, number>;

export type Z = Omit<ArticleDetailedImageAuthors, keyof ArticleOpinion>;

export type V = Extract<Article, keyof Y>;

export interface CategoryHero {
  cropped?: boolean;
  uid: 'Hero';
  articles: {
    main: ArticleDetailedImage;
    sideArticles: ArticleDetailedImage[];
  };
}
export interface CategorySecondHeroTile {
  cropped?: boolean;
  uid: 'secondHeroTile';
  articles: {
    main: ArticleDetailedImage;
    sideArticles: ArticleDetailedImage[];
  };
}

export interface CategoryOpinionColumn
  extends CategoryArticles<ArticleOpinion[]> {
  cropped?: boolean;
  uid: 'Opinion Column';
  title: string;
}

// export interface CategoryOpinionBody
//   extends CategoryArticles<ArticleDetailedImage[]> {
//   uid: 'Opinion Body';
// }
// export interface CategoryMoreNews {
//   uid: 'More News';
//   title?: string;
//   articles: {
//     main: ArticleDetailed[];
//     headlines: ArticleBasic[];
//   };
// }
export interface CategoryDiveDeeper
  extends CategoryArticles<ArticleDetailedImage[]> {
  uid: 'diveDeeper';
  title: string;
}
// export interface CategorySecondHeroTile
//   extends CategoryArticles<ArticleDetailedImage[]> {
//   uid: 'secondHeroTile';
//   title: string;
// }
export interface CategoryStaffFavorites
  extends CategoryArticles<ArticleDetailedImage[]> {
  uid: 'staffFavorites';
  title: string;
}
export interface CategoryPopularArticles
  extends CategoryArticles<ArticleDetailedImage[]> {
  uid: 'popularArticles';
  title: string;
}
export interface CategoryLatestNews
  extends CategoryArticles<ArticleDetailedImage[]> {
  uid: 'latestNews';
  title: string;
}
export interface CategoryCulture
  extends CategoryArticles<ArticleDetailedImage[]> {
  uid: 'culture';
  title: string;
}
export interface CategoryMidHero
  extends CategoryArticles<ArticleDetailedImage> {
  uid: 'MidHero';
  title: string;
}

export type HomeCategory =
  | CategoryHero
  | CategoryOpinionColumn
  | CategoryStaffFavorites
  | CategorySecondHeroTile
  | CategoryLatestNews
  | CategoryPopularArticles
  | CategoryMidHero
  | CategoryCulture
  | CategoryDiveDeeper;
export type HomeProps = {
  hero: CategoryHero;
  opinionColumn: CategoryOpinionColumn;
  staffFavorites: CategoryStaffFavorites;
  secondHeroTile: CategoryHero;
  latestNews: CategoryLatestNews;
  popularArticles: CategoryPopularArticles;
  midHero: CategoryMidHero;
  diveDeeper: CategoryDiveDeeper;
  culture: CategoryCulture;
};
// export interface CategoryCulture
//   extends CategoryArticles<ArticleDetailedImage[]> {
//   uid: 'Culture';
//   title?: string;
// }
export interface CategoryCooking extends CategoryArticles<ArticleBasic[]> {
  uid: 'Cooking';
  title?: string;
}

// export type HomeCategory =
//   | CategoryHero
//   | CategoryOpinionColumn
//   | CategoryOpinionBody
//   | CategoryMoreNews
//   | CategoryCulture
//   | CategoryCooking;

// export type HomeQuery = {
//   hero: CategoryHero;
//   opinionColumn: CategoryOpinionColumn;
//   opinionBody: CategoryOpinionBody;
//   moreNews: CategoryMoreNews;
//   culture: CategoryCulture;
//   cooking: CategoryCooking;
// };

// export type HomeProps = HomeQuery & {
//   carouselRow: ArticleDetailedImage[];
//   carouselColumn: ArticleDetailedImage[];
//   hero1: ArticleDetailedImage;
//   hero2: ArticleDetailedImage;
//   row1: ArticleDetailedImage[];
//   row2: ArticleDetailedImage[];
// };
// export type HomeQuery = {
//   hero: CategoryHero;
//   opinionColumn: CategoryOpinionColumn;
//   opinionBody: CategoryOpinionBody;
//   moreNews: CategoryMoreNews;
//   culture: CategoryCulture;
//   cooking: CategoryCooking;
// };
