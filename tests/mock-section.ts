import { faker } from '@faker-js/faker';

import * as Schema from 'lib/schema';

import { getMockDate, getMockRev, getMockSlug, populate } from './utils';

export const getMockSection = (
  overrides?: Partial<Schema.Section>
): Schema.Section => {
  return {
    _updatedAt: getMockDate(),
    _createdAt: getMockDate(),
    _id: faker.datatype.uuid(),
    _rev: getMockRev(),
    slug: getMockSlug(),
    title: faker.unique(faker.lorem.word),
    _type: 'section',
    ...overrides,
  };
};

export const getMockSectionArray = (
  size: number,
  overrides?: Partial<Schema.Section>
): Schema.Section[] => {
  return populate<Schema.Section>(size, () => getMockSection(overrides));
};

// console.log(getMockSectionArray(4));
