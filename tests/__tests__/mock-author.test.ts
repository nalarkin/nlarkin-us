import { describe, it, expect } from '@jest/globals';

import { getMockAuthor, getMockAuthorArray } from '../mock-author';

describe('Mock author', () => {
  it('generates data with expected properties', () => {
    const section = getMockAuthor();
    expect(section).toHaveProperty('_id', expect.any(String));
    expect(section).toHaveProperty('slug.current', expect.any(String));
    expect(section).toHaveProperty('slug._type', 'slug');
    expect(section).toHaveProperty('bio', expect.any(String));
    expect(section).toHaveProperty('_updatedAt', expect.any(String));
    expect(section).toHaveProperty('_createdAt', expect.any(String));
    expect(section).toHaveProperty('_rev', expect.any(String));
    expect(section).toHaveProperty('_type', 'author');
  });
  it('generates data with provided overrides', () => {
    const author = getMockAuthor();
    const override = getMockAuthor(author);
    expect(override).toEqual(author);
  });
  it('generates different data on each call', () => {
    const authorOne = getMockAuthor();
    const authorTwo = getMockAuthor();
    expect(authorOne).not.toEqual(authorTwo);
  });
  it('generates an array', () => {
    const authors = getMockAuthorArray(3);
    expect(Array.isArray(authors)).toEqual(true);
    expect(authors.length).toEqual(3);
  });
});
