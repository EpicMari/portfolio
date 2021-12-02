import React from "react";

const Link = ({ children, href, onClick }) => {
  return (
    <a href={href} onClick={onClick}>
      {children}
    </a>
  );
};

export default Link;
