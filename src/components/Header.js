import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Header = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <div className="header">
        {theme ? 'Hello world, my name is Jonas' : 'Jonas The Developer'}
    </div>
  );
};

export default Header;
