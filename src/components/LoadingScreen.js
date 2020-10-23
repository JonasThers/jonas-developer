import React, { useContext, useEffect } from "react";
import { LoadingContext } from "./LoadingContext";

const LoadingScreen = () => {
  const { loading, setLoading } = useContext(LoadingContext);

  const skipIntro = () => {
    setLoading(loading + 1);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(loading + 1);
    }, 1500);
  }, []);

  return (
    <div>
      <div>Loading screen</div>
      <button onClick={skipIntro}>Skip intro</button>
    </div>
  );
};

export default LoadingScreen;
