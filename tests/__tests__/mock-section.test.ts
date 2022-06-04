import { describe, it, expect } from '@jest/globals';

import { getMockSection, getMockSectionArray } from '../mock-section';

describe('Mock section', () => {
  it('generates data with expected properties', () => {
    const section = getMockSection();
    expect(section).toHaveProperty('_id', expect.any(String));
    expect(section).toHaveProperty('slug.current', expect.any(String));
    expect(section).toHaveProperty('slug._type', 'slug');
    expect(section).toHaveProperty('_updatedAt', expect.any(String));
    expect(section).toHaveProperty('_createdAt', expect.any(String));
    expect(section).toHaveProperty('_updatedAt', expect.any(String));
    expect(section).toHaveProperty('_rev', expect.any(String));
    expect(section).toHaveProperty('_type', 'section');
    expect(section).toHaveProperty('title', expect.any(String));
  });
  it('generates data with provided overrides', () => {
    const section = getMockSection();
    const override = getMockSection(section);
    expect(override).toEqual(section);
  });
  it('generates different data on each call', () => {
    const sectionOne = getMockSection();
    const sectionTwo = getMockSection();
    expect(sectionOne).not.toEqual(sectionTwo);
  });
  it('generates an array', () => {
    const sections = getMockSectionArray(3);
    expect(Array.isArray(sections)).toEqual(true);
    expect(sections.length).toEqual(3);
  });
});
