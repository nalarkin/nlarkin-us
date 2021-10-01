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

export type ArticleDetailed = Pick<
  Schema.Article,
  '_id' | 'date' | 'excerpt' | 'image' | 'title'
> & {
  authors: Array<Pick<Schema.Author, 'name' | 'picture'> & { slug: string }>;
  slug: string;
  text: Pick<Schema.Article, 'text'>;
};
