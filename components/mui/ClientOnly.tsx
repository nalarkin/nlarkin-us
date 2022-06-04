import React, { ReactNode } from 'react';

// Encapsulate the logic to avoid React hydration problems
// See https://www.joshwcomeau.com/react/the-perils-of-rehydration/
// On first client-side render, we need to render exactly as the server rendered
// isBrowser is set to true only after a successful hydration
//
// This is used to prevent initial flash of light theme
export default function ClientOnly({
  children,
}: {
  children: ReactNode;
}): JSX.Element | null {
  const [hasMounted, setHasMounted] = React.useState<boolean>(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return <>{children}</>;
}
