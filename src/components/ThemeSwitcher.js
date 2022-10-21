import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import Switch from "react-switch";

const ThemeSwitcher = () => {
  const [loadContent, setLoadContent] = useState(0);

  const startToLoad = () => {
    setLoadContent(1);
  };

  useEffect(() => {
    setTimeout(() => {
      startToLoad();
    }, 500);
  }, []);

  const { theme, setTheme } = useContext(ThemeContext);

  const handleChange = () => {
    setTheme(!theme);
  };

  return (
    <div className="switch" style={{ opacity: loadContent }}>
      <div className="switch__title">Switch Theme</div>
      <Switch
        checked={theme}
        onChange={handleChange}
        handleDiameter={28}
        height={30}
        width={100}
        uncheckedIcon={<div className="retro-switch">Retro</div>}
        checkedIcon={<div className="modern-switch">Modern</div>}
        className={theme ? "on" : "off"}
      />
    </div>
  );
};

export default ThemeSwitcher;
