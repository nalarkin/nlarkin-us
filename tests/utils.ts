import { faker } from '@faker-js/faker';
import { format } from 'date-fns';

import * as Schema from '../lib/schema';

export function populate<T>(size: number, generator: () => T): Array<T> {
  const newArray = new Array<T>(size);

  for (let i = 0; i < size; i++) {
    newArray[i] = generator();
  }

  return newArray;
}

export const getMockFullName = (): Schema.Author['name'] => {
  // example name: "Gabrielle Rule"
  return faker.fake('{{name.firstName}} {{name.lastName}}');
};

export const getMockDate = (): Schema.Author['_updatedAt'] => {
  // ex. "2021-09-27T23:42:56Z"
  return format(faker.date.past(), "yyyy-MM-dd'T'HH:mm:ss'Z'");
};

export const getMockSlug = (slugName?: string): Schema.Author['slug'] => {
  return {
    _type: 'slug',
    current: slugName || faker.internet.domainWord(),
  };
};

export const getMockRev = (): Schema.Author['_rev'] => {
  // example rev: "Rfna04Xn7gw6L6GeeX1fQF"
  return faker.datatype.uuid().replace(/-/g, '');
};

export const getMockImage = (): Schema.Author['picture'] => {
  return {
    _type: 'articleImage',
    alt: `${faker.word.adjective()} ${faker.word.noun()}`,
    asset: {
      _type: 'reference',
      _ref: `image-${getMockRev()}-1024x1024-jpg`,
    },
  };
};
