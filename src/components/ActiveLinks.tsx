import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { cloneElement, ReactElement } from 'react';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) {
  const { pathname } = useRouter();

  let isActive = false;

  if (
    shouldMatchExactHref &&
    (pathname === rest.href || pathname === rest.as)
  ) {
    isActive = true;
  }

  if (
    !shouldMatchExactHref &&
    (pathname.startsWith(String(rest.href)) ||
      pathname.startsWith(String(rest.as)))
  ) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? '#0078FF' : 'gray.50',
      })}
    </Link>
  );
}