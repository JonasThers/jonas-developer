import React, { useState, useEffect, useContext } from "react";
import Header from './Header';
import { LoadingContext } from "./LoadingContext";
import { ThemeContext } from "./ThemeContext";

const Opening = () => {
  const [loadContent, setLoadContent] = useState(0);

  const { loading, setLoading } = useContext(LoadingContext);
  const { theme } = useContext(ThemeContext);

  const startToLoad = () => {
    setLoadContent(1);
  };

  const buttonClick = () => {
    setLoadContent(0);
    setTimeout(() => {
      setLoading(loading + 1);
    }, 500);
  };

  useEffect(() => {
    setTimeout(() => {
      startToLoad();
    }, 500);
  }, []);

  return (
    <div className="opening" style={{ opacity: loadContent }}>
      <Header />
      <div className="center">
        <button onClick={buttonClick}>{theme ? 'Learn more about me' : 'Press here to start'}</button>
        {!theme && <div className="opening__trademark">Jonas Thers © 2021</div>}
      </div>
    </div>
  );
};

export default Opening;
