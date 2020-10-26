import React, { useState, useContext, useEffect } from "react";
import { LoadingContext } from "./LoadingContext";

const LoadingScreen = () => {
  const { loading, setLoading } = useContext(LoadingContext);

  const [loadContent, setLoadContent] = useState(0);

  const startToLoad = () => {
    setLoadContent(1);
  };

  const skipIntro = () => {
    setLoading(loading + 1);
  };

  useEffect(() => {
    setTimeout(() => {
      startToLoad();
    }, 500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(loading + 1);
    }, 1500);
  }, []);

  return (
    <div style={{ opacity: loadContent }}>
      <div>Loading screen</div>
      <button onClick={skipIntro}>Skip intro</button>
    </div>
  );
};

export default LoadingScreen;
