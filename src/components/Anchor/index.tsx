import React from 'react';
import Link from 'next/link';

interface IProps {
  passHref?: boolean;
  href: string;
  className?: string;
  rel?: string;
  label?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  onClick?: (e: React.MouseEvent) => void;
}

const Anchor: React.FC<IProps> = ({
  href,
  children,
  className,
  rel,
  label,
  target,
  onClick,
  passHref,
  ...rest
}) => {
  const internal = /^\/(?!\/)/.test(href);
  if (!internal) {
    const isHash = href.startsWith('#');
    if (isHash) {
      return (
        <a
          aria-label={label}
          rel={rel}
          className={className}
          href={href}
          onClick={onClick}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <a
        aria-label={label}
        rel={rel}
        className={className}
        href={href}
        target={target}
        onClick={onClick}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} passHref {...rest}>
      <a>{children}</a>
    </Link>
  );
};

Anchor.defaultProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
};

Anchor.displayName = 'Anchor';

export default Anchor;
