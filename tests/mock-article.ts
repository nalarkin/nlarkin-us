import { faker } from '@faker-js/faker';
import { SanityBlock, SanityKeyedReference } from 'sanity-codegen';

import * as Schema from 'lib/schema';

import {
  getMockDate,
  getMockImage,
  getMockRev,
  getMockSlug,
  populate,
} from './utils';

const getMockKey = () => {
  return faker.unique(faker.datatype.hexadecimal, [12]);
};

const getMockParagraph = (): Paragraph => {
  return {
    _type: 'block',
    _key: getMockKey(),
    style: 'normal',
    markDefs: [],
    children: [
      {
        _key: getMockKey(),
        _type: 'span',
        marks: [],
        text: faker.lorem.paragraphs(1),
      },
    ],
  };
};

const getMockText = (paragraphs: number = 5): Schema.Article['text'] => {
  return populate<Paragraph>(paragraphs, () => getMockParagraph());
};

export const getMockArticle = (
  overrides?: Partial<Schema.Article>
): Schema.Article => {
  return {
    _type: 'article',
    _rev: getMockRev(),
    _id: faker.datatype.uuid(),
    _createdAt: getMockDate(),
    _updatedAt: getMockDate(),
    date: getMockDate(), // @TODO: This date should be slightly different than other dates, ex: "2021-09-27T23:28:02.280Z"
    excerpt: faker.lorem.sentences(2),
    title: faker.lorem.sentence(8),
    text: getMockText(),
    image: getMockImage(),
    slug: getMockSlug(),
    sections: [], // related sections
    ...overrides,
  };
};

export const addSectionToArticle = (
  article: Schema.Article,
  section: Schema.Section
): Schema.Article => {
  return {
    ...article,
    sections: [
      ...(article.sections || []),
      { _key: getMockKey(), _type: 'reference', _ref: section._id },
    ],
  };
};

const getSectionReference = (
  section: Schema.Section
): SanityKeyedReference<Schema.Section> => {
  return {
    _key: getMockKey(),
    _type: 'reference',
    _ref: section._id,
  };
};

export const addSectionToArticleMutate = (
  article: Schema.Article,
  section: Schema.Section
): void => {
  const newSection = getSectionReference(section);
  if (article.sections === undefined) {
    // eslint-disable-next-line no-param-reassign
    article.sections = [];
  }
  article.sections.push(newSection);
};

export const getMockArticleArray = (
  size: number,
  overrides?: Partial<Schema.Article>
): Schema.Article[] => {
  return populate<Schema.Article>(size, () => getMockArticle(overrides));
};

type Unarray<T> = T extends Array<infer U> ? U : T;

type Paragraph = SanityBlock & { _key: string };
// type Paragraph = Unarray<Schema.Article["text"]>;
