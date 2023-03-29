import React, { useContext, useState } from "react";
import { LoadingContext } from "../context/LoadingContext";
import Typing from "react-typing-animation";

const RetroOpening = () => {
  const { loading, setLoading } = useContext(LoadingContext);

  const [setLoadContent] = useState(0);

  const skipIntro = () => {
    setTimeout(() => {
      setLoading(loading + 1);
    }, 500);
  };

  return (
    <Typing onFinishedTyping={skipIntro} speed={50}>
      <p className="intro__content">
        <Typing.Delay ms={100} />
        The adventure begins with young Jonas from Denmark.{" "}
        <Typing.Delay ms={500} />
        Instead of pursuing a career as a raiding viking, he chose one within
        software development.
      </p>
      <Typing.Delay ms={1000} />
      <br />
      <p>
        So far the adventure has brought him to Finland, where he currently
        resides.
      </p>
      <Typing.Delay ms={1000} />
    </Typing>
  );
};

export default RetroOpening;
