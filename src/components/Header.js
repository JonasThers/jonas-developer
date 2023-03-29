import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header>
      <h2 className="header">
        {theme ? "Hello world, my name is Jonas" : "Jonas The Developer"}
      </h2>
    </header>
  );
};

export default Header;
