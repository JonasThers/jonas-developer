import React, { useState, useEffect } from "react";

const Opening = () => {
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
    <div style={{opacity: loadContent}}>
      <div>Jonas The Developer</div>
      <button>Press here to start</button>
    </div>
  );
};

export default Opening;
