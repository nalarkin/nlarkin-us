/* eslint-disable no-param-reassign */
import * as Schema from 'lib/schema';

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
export function shuffle(a: any[]) {
  let j;
  let x;
  let i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
export function shuffleCopy<T>(a: T[]) {
  const copyArray = [...a];
  let j;
  let x;
  let i;
  for (i = copyArray.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = copyArray[i];
    copyArray[i] = copyArray[j];
    copyArray[j] = x;
  }
  return copyArray;
}

/**
 * Return a string which is the proper formatting of the list of authors
 *
 */
export function formatAuthors<T>(
  authors: Array<T>,
  get: (arg0: T) => string
): string {
  const n = authors.length;
  if (n === 0) {
    return '';
  }
  if (n === 1) {
    return get(authors[0]);
  }
  let content = `${get(authors[0])}`;
  for (let i = 1; i < n - 1; i++) {
    content += `, ${get(authors[i])}`;
  }
  content += ` and ${get(authors[n - 1])}`;
  return content;
}

/** Frequently used selector for getting the authors name from an author schema */
export const getAuthorName = (
  currentAuthor: Pick<Schema.Author, 'name'>
): string => currentAuthor.name ?? '';

export const buildArticleSlug = (slug: string) => `/news/articles/${slug}`;
export const buildSectionSlug = (slug: string) => `/news/sections/${slug}`;

/**
 * Preference for making articles excerpts of certain length to format nicely on cards.
 * Full sentance within range > Longer sentance which is shortened with elipses to fit
 * range > multiple sentances concatenated to fit in range.
 * @param excerpt excerpt to be used for article card
 * @param minSize minimum number of characters for excerpt length
 * @param maxSize max number of characters for excerpt length
 * @returns a string which contains an edited version of the excerpt to fit within range
 */
export const editExcerptToSize = (
  excerpt?: string,
  minSize = 55,
  maxSize = 83
) => {
  if (!excerpt) {
    return '';
  }
  const sentanceSizeRegex = new RegExp(
    `[.!?]\\s?([^.!?]{${minSize},${maxSize}}[.!?])`
  );
  const hasLargeSentence = new RegExp(`([^.!?]{${minSize},}[.!?])`);
  const captureLargeSentence = new RegExp(`[^?!.]{${minSize},${maxSize}}`);
  if (sentanceSizeRegex.test(excerpt)) {
    const firstOccurrance = new RegExp(
      `[.!?]\\s?([^.!?]{${minSize},${maxSize}}[.!?])`
    );
    const result = excerpt.match(firstOccurrance);
    if (result) {
      const [, capturedString] = result;
      return capturedString;
    }
  } else if (hasLargeSentence.test(excerpt)) {
    // occurs when all sentances in excerpt are longer than max length desired.
    const result = `${excerpt.match(captureLargeSentence)}...`;
    return result;
  }
  // occurs when all sentences are shorter than the required length.
  console.error(
    `failed all tests in editExcerptToSize() function call for excerpt: ${excerpt}`
  );
  return `failed all tests for excerpt: ${excerpt}`;
};

export const imageSizeRegex = /-([\d]{3,})x([\d]{3,})-/;
