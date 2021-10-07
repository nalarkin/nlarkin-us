import React from 'react';

import { allFooterTopNavLinks, FooterCategory } from 'links';

export type FooterGroups = {
  [index: string]: boolean;
};
function buildInitialState(arr: FooterCategory[]) {
  const newObject: FooterGroups = {};
  arr.forEach(({ name }) => {
    newObject[name] = false;
  });
  return newObject;
}

export const CategoryContext = React.createContext({
  groups: buildInitialState(allFooterTopNavLinks),
  handleClick: () => {},
});
