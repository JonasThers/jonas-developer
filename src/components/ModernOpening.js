import React, { useContext, useState } from "react";
import { LoadingContext } from "../context/LoadingContext";
import Typing from "react-typing-animation";

const ModernOpening = () => {
  const { loading, setLoading } = useContext(LoadingContext);

  const [setLoadContent] = useState(0);

  const skipIntro = () => {
    setTimeout(() => {
      setLoading(loading + 1);
    }, 500);
  };

  return (
    <Typing onFinishedTyping={skipIntro} speed={25}>
      <p className="intro__content">
        <Typing.Delay ms={100} />
        Welcome to my personal site! <Typing.Delay ms={700} />
        <Typing.Backspace count={29} />
        I'm a Danish software developer
        <Typing.Delay ms={700} />
        <Typing.Backspace count={31} />
        I've been living in Finland for a few years
        <Typing.Delay ms={700} />
        <Typing.Backspace count={43} />
      </p>
    </Typing>
  );
};

export default ModernOpening;
