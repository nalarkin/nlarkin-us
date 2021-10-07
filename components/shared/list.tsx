interface Props<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}
export function List<T>(props: Props<T>) {
  const { items, renderItem } = props;
  // You can use type T in List function scope.
  // const [state, setState] = React.useState<T[]>([]);

  return (
    <>
      {items.map(renderItem)}
      {/* <button onClick={() => setState(items)}>Clone</button>
      {JSON.stringify(state, null, 2)} */}
    </>
  );
}
