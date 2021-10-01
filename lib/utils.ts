import * as Schema from 'lib/schema';

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
export function shuffle(a: any[]) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
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
  // if (n === 2) {
  //   return `${get(authors[0])} and ${get(authors[1])}`;
  // }
  let content = `${get(authors[0])}`;
  for (let i = 1; i < n - 1; i++) {
    content = content + `, ${get(authors[i])}`;
  }
  content = content + ` and ${get(authors[n - 1])}`;
  return content;
}

/** Frequently used selector for getting the authors name from an author schema */
export const getAuthorName = (
  currentAuthor: Pick<Schema.Author, 'name'>
): string => currentAuthor.name ?? '';
