import * as React from 'react';

interface Props<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export function List<T>(props: Props<T>) {
  const { items, renderItem } = props;

  return <>{items.map(renderItem)}</>;
}
