import { faker } from '@faker-js/faker';

import * as Schema from '../lib/schema';
import {
  getMockDate,
  getMockFullName,
  getMockImage,
  getMockRev,
  getMockSlug,
  populate,
} from './utils';

export const getMockAuthor = (
  overrides?: Partial<Schema.Author>
): Schema.Author => {
  return {
    _type: 'author',
    bio: faker.lorem.sentence(),
    _id: faker.datatype.uuid(),
    name: getMockFullName(),
    slug: getMockSlug(),
    _createdAt: getMockDate(),
    picture: getMockImage(),
    _rev: getMockRev(),
    _updatedAt: getMockDate(),
    ...overrides,
  };
};

export const getMockAuthorArray = (
  size: number,
  overrides?: Partial<Schema.Author>
): Schema.Author[] => {
  return populate<Schema.Author>(size, () => getMockAuthor(overrides));
};
