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
    setLoading(loading + 1);
  };

  useEffect(() => {
    setTimeout(() => {
      startToLoad();
    }, 500);
  }, []);

  return (
    <div style={{ opacity: loadContent }}>
      <Header />
      <button onClick={buttonClick}>Press here to start</button>
    </div>
  );
};

export default Opening;
