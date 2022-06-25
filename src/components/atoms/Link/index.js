import React from 'react';
import { Link as LinkScroll } from 'react-scroll';

const Link = ({ children, href, onClick, target, linkType, to }) => {
  return linkType === 'linkScroll' ? (
    <LinkScroll to={to}>{children}</LinkScroll>
  ) : (
    <a href={href} onClick={onClick} target={target}>
      {children}
    </a>
  );
};

export default Link;
