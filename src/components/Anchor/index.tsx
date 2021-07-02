import React from 'react';
import { SpaceProps, ColorProps, TypographyProps, LayoutProps } from '~/styles';
import { StyledLink, StyledAnchor } from './style';

interface IProps extends SpaceProps, ColorProps, TypographyProps, LayoutProps {
  href: string;
  className?: string | undefined;
  rel?: string | undefined;
  label?: string | undefined;
  target?: '_blank' | '_self' | '_parent' | '_top';
  onClick?: (e: React.MouseEvent) => void;
  variant?: 'link1' | 'link2' | 'link3';
}

const Anchor: React.FC<IProps> = ({
  href,
  children,
  className,
  rel,
  label,
  target,
  onClick,
  variant,
  ...rest
}) => {
  const internal = /^\/(?!\/)/.test(href);
  if (!internal) {
    const isHash = href.startsWith('#');
    if (isHash) {
      return (
        <StyledAnchor
          aria-label={label}
          rel={rel}
          className={className}
          href={href}
          onClick={onClick}
          $variant={variant}
          {...rest}
        >
          {children}
        </StyledAnchor>
      );
    }
    return (
      <StyledAnchor
        aria-label={label}
        rel={rel}
        className={className}
        href={href}
        target={target}
        onClick={onClick}
        $variant={variant}
        {...rest}
      >
        {children}
      </StyledAnchor>
    );
  }

  return (
    <StyledLink
      aria-label={label}
      rel="preload"
      className={className}
      href={href}
      onClick={onClick}
      $variant={variant}
      {...rest}
    >
      {children}
    </StyledLink>
  );
};

Anchor.defaultProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
};

Anchor.displayName = 'Anchor';

export default Anchor;
