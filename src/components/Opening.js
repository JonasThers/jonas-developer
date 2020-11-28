import React, { useState, useEffect, useContext } from "react";
import Header from './Header';
import { LoadingContext } from "./LoadingContext";

const Opening = () => {
  const [loadContent, setLoadContent] = useState(0);

  const { loading, setLoading } = useContext(LoadingContext);

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
        <button onClick={buttonClick}>Press here to start</button>
        <div className="opening__trademark">Jonas Thers © 2020</div>
      </div>
    </div>
  );
};

export default Opening;
