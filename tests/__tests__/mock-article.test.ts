import { describe, it, expect } from '@jest/globals';
import { SanityKeyedReference } from 'sanity-codegen';

import * as Schema from '../../lib/schema';
import {
  addSectionToArticle,
  addSectionToArticleMutate,
  getMockArticle,
  getMockArticleArray,
} from '../mock-article';
import { getMockSection } from '../mock-section';

describe('Mock article', () => {
  it('generates data with expected properties', () => {
    const section = getMockArticle();
    expect(section).toHaveProperty('_id', expect.any(String));
    expect(section).toHaveProperty('_type', 'article');
    expect(section).toHaveProperty('slug.current', expect.any(String));
    expect(section).toHaveProperty('slug._type', 'slug');
    expect(section).toHaveProperty('_updatedAt', expect.any(String));
    expect(section).toHaveProperty('_createdAt', expect.any(String));
    expect(section).toHaveProperty('date', expect.any(String));
    expect(section).toHaveProperty('title', expect.any(String));
    expect(section).toHaveProperty('excerpt', expect.any(String));
    expect(section).toHaveProperty('_rev', expect.any(String));
    expect(section).toHaveProperty('sections', expect.any(Array));
  });
  it('getMockArticle generates data with provided overrides', () => {
    const author = getMockArticle();
    const override = getMockArticle(author);
    expect(override).toEqual(author);
  });
  it('getMockArticle generates different data on each call', () => {
    const authorOne = getMockArticle();
    const authorTwo = getMockArticle();
    expect(authorOne).not.toEqual(authorTwo);
  });
  it('getMockArticleArray generates an array', () => {
    const authors = getMockArticleArray(3);
    expect(Array.isArray(authors)).toEqual(true);
    expect(authors.length).toEqual(3);
  });
  it('addSectionToArticle creates a copy with a new article', () => {
    const article = getMockArticle();
    const section = getMockSection();
    const sectionsMatchingId = (a: SanityKeyedReference<Schema.Section>) =>
      a._ref === section._id;
    expect(article.sections).toBeDefined();
    expect(article.sections!.filter(sectionsMatchingId).length).toEqual(0);

    const newArticle = addSectionToArticle(article, section);
    expect(newArticle.sections!.filter(sectionsMatchingId).length).toEqual(1);
  });
  it('addSectionToArticleMutate appends section to existing article', () => {
    const article = getMockArticle();
    const section = getMockSection();
    const sectionsMatchingId = (a: SanityKeyedReference<Schema.Section>) =>
      a._ref === section._id;
    expect(article.sections).toBeDefined();
    expect(article.sections!.filter(sectionsMatchingId).length).toEqual(0);

    addSectionToArticleMutate(article, section);
    expect(article.sections!.filter(sectionsMatchingId).length).toEqual(1);
  });
});
