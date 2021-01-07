import React, { useState, useContext, useEffect } from "react";
import { LoadingContext } from "./LoadingContext";
import Typing from 'react-typing-animation';

const LoadingScreen = () => {
  const { loading, setLoading } = useContext(LoadingContext);

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
          <Typing onFinishedTyping={skipIntro} speed={60}>
            <div className="intro__content">
              <Typing.Delay ms={100} />
              The adventure begins with young Jonas from Denmark. 
              <Typing.Delay ms={500} /> 
              Instead of pursuing a career as a raiding viking, he chose one within web development.
              </div>
            <Typing.Delay ms={1000} />
            <br />
            <div>So far the adventure has brought him to Finland, where he currently resides.</div>
            <Typing.Delay ms={1000} />
          </Typing>
          <button className="skip" onClick={skipIntro}>
            Skip intro
          </button>
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;
