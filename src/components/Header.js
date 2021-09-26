import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <h2 className="header">
        {theme ? 'Hello world, my name is Jonas' : 'Jonas The Developer'}
    </h2>
  );
};

export default Header;
