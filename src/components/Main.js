import React, { useState, useEffect } from "react";
import Resume from "./Resume";

const Main = () => {
  const [loadContent, setLoadContent] = useState(0);

  const startToLoad = () => {
    setLoadContent(1);
  };

  useEffect(() => {
    setTimeout(() => {
      startToLoad();
    }, 500);
  }, []);

  return (
    <div style={{ opacity: loadContent }}>
      <div>Main</div>
      <Resume />
    </div>
  );
};

export default Main;
