import React from "react";

const Link = ({ children, href, onClick, target }) => {
  return (
    <a href={href} onClick={onClick} target={target}>
      {children}
    </a>
  );
};

export default Link;
