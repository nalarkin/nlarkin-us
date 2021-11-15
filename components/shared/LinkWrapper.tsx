import Link from 'next/link';

export interface LinkWrapperProps {
  href: string;
  children: React.ReactNode;
}

/** Wraps the children with a link. Uses next link if the link destination
 * is within this domain, otherwise use a traditional <a> link */
export const LinkWrapper = ({ href, children }: LinkWrapperProps) => {
  if (href.includes('https:')) {
    return (
      <a target="_blank" href={href} rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  if (href.length === 0) {
    return <>{children}</>;
  }
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};
