import React, { ReactNode, useEffect, useState } from 'react';

// Encapsulate the logic to avoid React hydration problems
// See https://www.joshwcomeau.com/react/the-perils-of-rehydration/
// On first client-side render, we need to render exactly as the server rendered
// isBrowser is set to true only after a successful hydration

export const BrowserContext = React.createContext<boolean>(false);

export function BrowserContextProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return (
    <BrowserContext.Provider value={isBrowser}>
      {children}
    </BrowserContext.Provider>
  );
}

export function useHasMounted() {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
}
