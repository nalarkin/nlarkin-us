// import * as React from 'react';

// import { allTiles } from 'pages';

// export const HomeContext = React.createContext<UIContextInterface | null>(null);

// interface UIProviderProps {
//   children: React.ReactNode;
// }

// interface Tile {
//   name: string;
//   textContent: React.ReactElement;
//   image: React.ReactElement;
// }

// interface UIContextInterface {
//   activeTile: Tile;
//   updateActiveTile: (tile: Tile) => void;
// }

// export default function HomeUIProvider({ children }: UIProviderProps) {
//   const [activeTile, setActiveTile] = React.useState(allTiles[0]);

//   const updateActiveTile = React.useCallback(
//     (tile: Tile) => {
//       setActiveTile(tile);
//     },
//     [setActiveTile]
//   );

//   const contextValue = React.useMemo(() => {
//     return {
//       activeTile,
//       updateActiveTile,
//     };
//   }, [activeTile, updateActiveTile]);

//   return (
//     <HomeContext.Provider value={contextValue}>{children}</HomeContext.Provider>
//   );
// }

// export function useHomeUI() {
//   return React.useContext(HomeContext);
// }

export {};
