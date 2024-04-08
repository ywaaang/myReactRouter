import React, { useContext } from "react";
import { RouterContext } from "./BrowserRouter";

function Link({ children, to }) {
  const { history } = useContext(RouterContext);
  const onClick = e => {
    e.preventDefault();
    history.push(to);
  };
  return (
    <a href={to} onClick={onClick}>
      {children}
    </a>
  );
}

export default Link;