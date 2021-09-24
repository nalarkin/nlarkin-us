export type Article = {
  id: string;
  title: string;
  authorId: string;
  contentHtml: string;
  date: string;
};

export type Author = {
  id: string;
  name: {
    first: string;
    last: string;
  };
};
