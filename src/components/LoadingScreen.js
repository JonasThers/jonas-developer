import React, { useState, useContext, useEffect } from "react";
import RetroOpening from "./RetroOpening";
import ModernOpening from "./ModernOpening";
import { LoadingContext } from "../context/LoadingContext";
import { ThemeContext } from "../context/ThemeContext";

const LoadingScreen = () => {
  const { loading, setLoading } = useContext(LoadingContext);
  const { theme } = useContext(ThemeContext);

  const [loadContent, setLoadContent] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  const startToLoad = () => {
    setLoadContent(1);
  };

  const skipIntro = () => {
    setLoadContent(0);
    setTimeout(() => {
      setLoading(loading + 1);
    }, 500);
  };

  useEffect(() => {
    setTimeout(() => {
      startToLoad();
      setStartTyping(true);
    }, 500);
  }, []);

  return (
    <div className="intro container" style={{ opacity: loadContent }}>
      {startTyping && (
        <div className="intro__text">
          {theme ? <ModernOpening /> : <RetroOpening />}
          <div className="skip-button">
            <button className="skip" onClick={skipIntro}>
              Skip intro
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;
